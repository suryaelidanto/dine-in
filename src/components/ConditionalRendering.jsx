import { useState } from "react";

export default function ConditionalRendering() {
    const [isLogin, setIsLogin] = useState(true);
  
    function toggleLogin() {
      setIsLogin(!isLogin)
    }
  
    return (
      <>
        <p>{isLogin ? "Sudah Login" : "Belum Login"}</p>
        <button onClick={toggleLogin}>{isLogin ? "Logout" : "Login"}</button>
      </>
    );
  }

  export function ATest() {
    return <></>
  }

  export function B() {
    return <></>
  }