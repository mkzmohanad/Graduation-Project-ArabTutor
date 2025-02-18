import { useState } from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function App() {

  const [hasAccount , setHasAccount] = useState(false)

  function handleSetHasAccount() {
    setHasAccount(account => !account)
  }
  return  <>
    { hasAccount ? <LoginForm handleSetHasAccount = {handleSetHasAccount}/> : <SignupForm handleSetHasAccount={handleSetHasAccount}/>}
  </>
}

export default App
