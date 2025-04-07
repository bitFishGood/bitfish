// src/main/java/com/bitfish/dto/KakaoUserResponse.java
package com.bitfish.bitfish.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class KakaoUserResponse {

    @JsonProperty("id")
    private Long id;

    @JsonProperty("kakao_account")
    private KakaoAccount kakaoAccount;

    public Long getId() {
        return id;
    }

    public KakaoAccount getKakaoAccount() {
        return kakaoAccount;
    }

    public static class KakaoAccount {
        @JsonProperty("email")
        private String email;

        @JsonProperty("profile")
        private Profile profile;

        public String getEmail() {
            return email;
        }

        public Profile getProfile() {
            return profile;
        }

        public static class Profile {
            @JsonProperty("nickname")
            private String nickname;

            public String getNickname() {
                return nickname;
            }
        }
    }
}
