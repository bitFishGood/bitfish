import logo from './logo.svg';
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoLogin from './api/KakaoLogin';
import KakaoCallback from './api/KakaoCallback';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<KakaoLogin />} />   {/* ✅ 기본 경로 추가 */}
              <Route path="/login" element={<KakaoLogin />} />
              <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
          </Routes>

      </BrowserRouter>
  );
}

export default App;
