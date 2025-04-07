package com.bitfish.bitfish.controller;

import com.bitfish.bitfish.dto.KakaoAccessTokenResponse;
import com.bitfish.bitfish.dto.KakaoUserResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
@RestController
@RequestMapping("/oauth/kakao")
@RequiredArgsConstructor
public class KakaoAuthController {

    private final RestTemplate restTemplate = new RestTemplate();

    @PostMapping("/callback")
    public ResponseEntity<?> getAccessToken(@RequestBody Map<String, String> request) {
        try {
            String code = request.get("code");
            System.out.println("💡 받은 인가코드: " + code);

            // 1. access_token 요청
            String tokenUri = "https://kauth.kakao.com/oauth/token";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

            MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
            body.add("grant_type", "authorization_code");
            body.add("client_id", "48b54e1ac06e5c4ed20b1188ba8ff575");
            body.add("redirect_uri", "http://localhost:3000/oauth/kakao/callback");
            body.add("code", code);

            HttpEntity<MultiValueMap<String, String>> tokenRequest = new HttpEntity<>(body, headers);

            ResponseEntity<KakaoAccessTokenResponse> tokenResponse =
                    restTemplate.postForEntity(tokenUri, tokenRequest, KakaoAccessTokenResponse.class);

            String accessToken = Objects.requireNonNull(tokenResponse.getBody()).getAccessToken();

            // 2. 사용자 정보 요청
            HttpHeaders userInfoHeaders = new HttpHeaders();
            userInfoHeaders.setBearerAuth(accessToken);
            HttpEntity<Void> userInfoRequest = new HttpEntity<>(userInfoHeaders);

            ResponseEntity<KakaoUserResponse> userResponse =
                    restTemplate.exchange("https://kapi.kakao.com/v2/user/me",
                            HttpMethod.GET,
                            userInfoRequest,
                            KakaoUserResponse.class);

            KakaoUserResponse.KakaoAccount account = Objects.requireNonNull(userResponse.getBody()).getKakaoAccount();
            String nickname = account.getProfile().getNickname();
            String email = account.getEmail();

            Map<String, Object> response = new HashMap<>();
            response.put("nickname", nickname);
            response.put("email", email);

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            System.out.println("🔥 에러 발생! 상세 내용:");
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("서버 내부 오류: " + e.getMessage());
        }
    }
}
