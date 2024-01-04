import React from 'react'
import { Lgnform, Logo, Greet, Wrapper, Loginbanner } from './Styled'
import Tokiomarinelogo from "../../asset/Tokiomarinelogo.png";
import Bannerback from "../../asset/bannerbg.jpg"

function Login() {
  return (
    <Wrapper>
        <Login>
            <Logo>
                <img src={Tokiomarinelogo} />
            </Logo>
            <Greet>
                <h1>Welcome Back</h1>
                <p>Enter your email and password to sign in</p>
            </Greet>
            <Lgnform>
                <form action="">
                    <p>Email</p>
                    <input type="text" />
                    <p>Password</p>
                    <input type="password" /> <br />
                    <a href='#'>Forget your password ?</a> <br />
                    <button type='submit'>Login</button>
                </form>
            </Lgnform>
        </Login>
        <Loginbanner style={{background:`url(${Bannerback})`}}>
            
        </Loginbanner>

    </Wrapper>
    
  )
}

export default Login