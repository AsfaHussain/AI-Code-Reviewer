import React from 'react'
import './Language.css'
import { useNavigate } from 'react-router-dom';

const Language = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/code');
    }
    const handlePythonClick = () => {navigate('/codePython');}
    const handleJavaScriptClick = () => {navigate('/codeJS');}
    const handleCPPClick = () => {navigate('/codeCPP');}
    const handleHTMLClick = () => {navigate('/codeHTML');}
    const handleRustClick = () => {navigate('/codeRust');}
    const handleGoClick = () => {navigate('/codeGo');}
    const handleKotlinClick = () => {navigate('/codeKotlin');}
      const handleRClick = () => {navigate('/codeR');}
      const handleSQLClick = () => {navigate('/codeSQL');}
    return (
      <div className='bg'>
       <div className="particle-container">
  {Array.from({ length: 60 }).map((_, i) => (
    <span
      key={i}
      className="particle"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`, 
        animationDuration: `${8 + Math.random() * 5}s`,
        animationDelay: `-${Math.random() * 8}s`, 
        width: `${1 + Math.random() * 1.5}px`,
        height: `${1 + Math.random() * 1.5}px`
      }}
    />
  ))}
</div>


        <p className='title'>SELECT YOUR</p>
        <p className='titletwo'>LANGUAGE</p>
        <div class="cards">
          <div class="card red">
        <button onClick={handleClick} style={{ animationDelay: '0s' }}>Java</button></div>



           <div class="card blue">
              <button onClick={handlePythonClick} style={{ animationDelay: '0.1s' }}>Python</button>
           </div>
           <div class="card yellow">
              <button onClick={handleJavaScriptClick} style={{ animationDelay: '0.2s' }}>JavaScript</button>
           </div>
           <div class="card green">
              <button onClick={handleCPPClick} style={{ animationDelay: '0.3s' }}>C</button>
           </div>
           <div class="card green">
              <button onClick={handleCPPClick} style={{ animationDelay: '0.3s' }}>C++</button>
           </div>

           <div class="card orange">
              <button onClick={handleHTMLClick} style={{ animationDelay: '0.4s' }}>HTML</button>
           </div>
           <div class="card orange">
              <button onClick={handleHTMLClick} style={{ animationDelay: '0.4s' }}>CSS</button>
           </div>
           <div class="card purple">
              <button onClick={handleRustClick} style={{ animationDelay: '0.5s' }}>Rust</button>
           </div>
           <div class="card pink">
              <button onClick={handleGoClick} style={{ animationDelay: '0.6s' }}>Go</button>
           </div>
           <div class="card pink">
              <button onClick={handleKotlinClick} style={{ animationDelay: '0.7s' }}>Kotlin</button>
           </div>
             <div class="card pink">
               <button onClick={handleRClick} style={{ animationDelay: '0.8s' }}>Ruby</button>

           </div>
             <div class="card pink">
               <button onClick={handleSQLClick} style={{ animationDelay: '0.9s' }}>SQL</button>
      </div>
      </div></div>
    )
  }
export default Language


