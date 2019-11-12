import React, { useState } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import { FaSignInAlt } from "react-icons/fa"
import TabsButton from "app/TabsButton"
import { login } from "app/utils"

// import LoginFormFinal from './LoginForm.final'
// export default LoginFormFinal


export default function LoginForm() {
  const [checkShowPassword, setCheckShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkFields = (e) => {
    e.preventDefault();
    setLoading(true)
    const [emailInput, passwordInput] = e.target.elements;
    
    login(emailInput.value, passwordInput.value)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        alert('error!');
      })
  }
  return (
    <form onSubmit={(e) => checkFields(e)}>
      <VisuallyHidden>
        <label htmlFor="login:email">Email:</label>
      </VisuallyHidden>
      <input
        type="text"
        id="login:email"
        className="inputField"
        placeholder="you@example.com"
      />

      <VisuallyHidden>
        <label htmlFor="login:password">Password:</label>
      </VisuallyHidden>
      <input
        id="login:password"
        type={checkShowPassword ? 'text' : 'password'}
        className="inputField"
        placeholder="Password"
      />

      <div>
        <label>
          <input
            className="passwordCheckbox"
            type={"checkbox"}
            defaultChecked={false}
            onChange={() => setCheckShowPassword(!checkShowPassword)}
          />{" "}
          show password
        </label>
      </div>

      <TabsButton>
        <FaSignInAlt />
        <span>{loading ? 'loading' : 'login'}</span>
      </TabsButton>
    </form>
  )
}
