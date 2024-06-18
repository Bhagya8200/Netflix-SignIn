import React from 'react';
import './App.css';

function App() {
  return (
    <>    
    <div>
   <div className="container">
    <h2>Sign In</h2>
    <div>
        <input type="text" placeholder="Email or mobile number" size="30"/><br/><br/>
        <input type="password" placeholder="Password" size="30"/><br/>
    </div>    
    <button id="btn1" >Sign In</button>
    <p>OR</p>
    <button id="btn2" >Use a sign-in code</button>
    <p id="forgot-pass">Forgot password?</p>
    <div className="checkbox">
        <input type="checkbox" id="remember"/>
        <label for="remember">Remember me</label>
    </div>
    <p id="text">New to Netflix? <span>Sign up now.</span></p>
    <p id="bottom-text">This page is protected by Google reCAPTCHA to ensure you're not a bot.<a href="google.com">Learn more</a></p>
   </div> 
</div>
    </>
  );
}

export default App;
