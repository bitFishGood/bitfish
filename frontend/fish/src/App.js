
import './styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KakaoLogin from './api/KakaoLogin';
import KakaoCallback from './api/KakaoCallback';
import StartScreen from "./pages/StartScreen";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<StartScreen />} />   {/* ✅ 기본 경로 추가 */}
              <Route path="/login" element={<KakaoLogin />} />
              <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
              <Route path="/start" element={<KakaoLogin />} /> {/* ✅ 여기 추가됨 */}
          </Routes>

      </BrowserRouter>
  );
}

export default App;
