/*
 * @Author: tanzhiyu
 * @Date: 2022-05-23 16:46:33
 * @LastEditors: tanzhiyu
 * @LastEditTime: 2022-05-26 23:45:58
 */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import * as bip39 from 'bip39'
function App() {
  const [value, setValue] = useState("")
  const onChange = (v) => {
    setValue(v.target.value)
  }
  const handleValid = ( ) => {

    const keyword = value.split(" ").filter(item => Number.isNaN(Number(item))).join(" ")

    fetch("/validate?keyword=" + keyword).then(res => res.json()).then(data => {
      console.log(data)
      if (data.code === 0 ) {
        const valid = data.valid
        if (valid) {
          alert("有效")
        } else {
          alert("Incorrect Mnemonic Phrase")
        }
      }
    })


  }
  return (
    <div className="App">
      <header className="App-header">
       <input style={{width : 1220, height: 44, fontSize: 20}} type="textarea" value={value} onChange={onChange} />
       <button style={{marginTop: 20, width: 60, height: 44}} onClick={handleValid}>验证</button>
      </header>
    </div>
  );
}

export default App;
