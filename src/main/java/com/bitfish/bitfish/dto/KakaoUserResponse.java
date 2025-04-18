// src/main/java/com/bitfish/dto/KakaoUserResponse.java
package com.bitfish.bitfish.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class KakaoUserResponse {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("kakao_account")
    private KakaoAccount kakaoAccount;

    @Getter
    public static class KakaoAccount {
        @JsonProperty("email")
        private String email;

        @JsonProperty("profile")
        private Profile profile;

        @Getter
        public static class Profile {
            @JsonProperty("nickname")
            private String nickname;

        }
    }
}
