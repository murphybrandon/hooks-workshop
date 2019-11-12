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

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true)
    const [emailNode, passwordNode] = e.target.elements;
    let email = emailNode.value;
    let password = passwordNode.value

    setLoading(true);
    login(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        alert('error!');
        setLoading(false);
      })
  }
  return (
    <form onSubmit={(e) => handleLogin(e)}>
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
