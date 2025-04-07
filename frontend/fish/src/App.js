import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoLogin from './KakaoLogin';
import KakaoCallback from './KakaoCallback';

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
