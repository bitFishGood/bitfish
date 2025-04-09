import React, { useEffect } from 'react';

function KakaoLogin() {
    useEffect(() => {
        // Kakao 객체가 존재하고 아직 초기화되지 않았을 때만 init
        if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init('fa003cbb07c8656757bdf385384e8987');
        }
    }, []);

    const loginWithKakao = () => {
        if (window.Kakao) {
            window.Kakao.Auth.authorize({
                redirectUri: 'http://localhost:3000/oauth/kakao/callback',
            });
        } else {
            alert('카카오 SDK 로드 중입니다. 잠시만 기다려주세요.');
        }
    };

    return (
        <button onClick={loginWithKakao}>
            <img
                src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
                alt="카카오 로그인"
            />
        </button>
    );
}

export default KakaoLogin;
