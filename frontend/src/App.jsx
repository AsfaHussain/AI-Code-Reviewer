// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import Code from './pages/Code';
import Language from './pages/Language';
import CodePython from './pages/CodePython';
import CodeJS from './pages/CodeJavaScript';
import CodeCPP from './pages/CPP';
import CodeHTML from './pages/Html';
import CodeRust from './pages/Rust';
import CodeGo from './pages/Go';
import CodeKotlin from './pages/Kotlin';
import CodeR from './pages/Ruby';
import CodeSQL from './pages/SQL';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/language" element={<Language />} />
        <Route path="/codePython" element={<CodePython />} />
        <Route path="/codeJS" element={<CodeJS />} />
        <Route path="/codeCPP" element={<CodeCPP />} />
        <Route path="/codeHTML" element={<CodeHTML />} />
        <Route path="/codeRust" element={<CodeRust />} />
        <Route path="/codeGo" element={<CodeGo />} />
        <Route path="/codeKotlin" element={<CodeKotlin />} />
        <Route path="/codeR" element={<CodeR/>} />
        <Route path="/codeSQL" element={<CodeSQL />} />
        <Route path="/code" element={<Code />} />
      </Routes>
    </Router>
  );
}
export default App;




