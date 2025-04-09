import React, { useEffect } from 'react';

function KakaoCallback() {
    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');

        if (!code) {
            console.error("❌ 인가코드 없음");
            return;
        }

        console.log("✅ 받은 인가코드:", code);

        // 백엔드로 인가코드 자동 전송
        fetch('http://localhost:8080/oauth/kakao/callback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // ⭐ 추가
            body: JSON.stringify({ code }),  // ✅ 이게 맞는 형식
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('🎉 백엔드 응답:', data);
                // 👉 여기에 로그인 성공 처리 로직 넣으면 됨
                // 예: 토큰 저장, 페이지 이동 등
            })
            .catch((err) => {
                console.error('🔥 서버 통신 에러:', err);
            });
    }, []);

    return <p>로그인 처리 중...</p>;
}

export default KakaoCallback;
