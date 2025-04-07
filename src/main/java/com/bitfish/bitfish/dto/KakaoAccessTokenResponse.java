// src/main/java/com/bitfish/dto/KakaoAccessTokenResponse.java
package com.bitfish.bitfish.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

public class KakaoAccessTokenResponse {

    @Getter
    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("token_type")
    private String tokenType;

    @JsonProperty("refresh_token")
    private String refreshToken;

    @JsonProperty("expires_in")
    private int expiresIn;

    @JsonProperty("scope")
    private String scope;

}
