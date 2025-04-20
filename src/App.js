import React, { useState } from 'react';
import { lc, uc, sc, nc } from './data/passchar';
import "./App.css";

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbercase, setNumbercase] = useState(false);
  const [scase, setScase] = useState(false);
  const [pswdl, setPswdl] = useState(10);
  const [passw, setPassw] = useState('');

  const createPassword = () => {
    let Charset = "";
    let fpswd = "";

    if (uppercase || lowercase || numbercase || scase) {
      if (uppercase) Charset += uc;
      if (lowercase) Charset += lc;
      if (numbercase) Charset += nc;
      if (scase) Charset += sc;

      for (let i = 0; i < pswdl; i++) {
        fpswd += Charset.charAt(Math.floor(Math.random() * Charset.length));
      }

      setPassw(fpswd);
    } else {
      alert("Please select at least one checkbox");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(passw);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="pswdbox">
      <h2>Password Generator</h2>

      <div className="pswdboxin">
        <input type="text" value={passw} readOnly />
        <button onClick={copyToClipboard}>Copy</button>
      </div>

      <div className="pswdl">
        <label>Password Length</label>
        <input
          type="number"
          max={20}
          min={10}
          value={pswdl}
          onChange={(e) => setPswdl(Number(e.target.value))}
        />
      </div>

      <div className="pswdl">
        <label>Include upper case</label>
        <input
          type="checkbox"
          checked={uppercase}
          onChange={() => setUppercase(!uppercase)}
        />
      </div>
      <div className="pswdl">
        <label>Include lower case</label>
        <input
          type="checkbox"
          checked={lowercase}
          onChange={() => setLowercase(!lowercase)}
        />
      </div>
      <div className="pswdl">
        <label>Include numbers</label>
        <input
          type="checkbox"
          checked={numbercase}
          onChange={() => setNumbercase(!numbercase)}
        />
      </div>
      <div className="pswdl">
        <label>Include symbols</label>
        <input
          type="checkbox"
          checked={scase}
          onChange={() => setScase(!scase)}
        />
      </div>

      <button className="btn" onClick={createPassword}>
        Generate Password
      </button>
    </div>
  );
}

export default App;
