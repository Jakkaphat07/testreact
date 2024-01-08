import React from 'react'
import { Lgnform, Logo, Greet, Wrapper, Loginbanner, Lgnfooter, Loginwrap, SwandFg, Switch, Fgcon } from './Styled'
import Toggleswitch from '../Toggleswitch/Toggleswitch';
import PasswordInput from '../PasswordInput/PasswordInput';
import Tokiomarinelogo from "../../asset/Tokiomarinelog.png";
import Rightsidebg from "../../asset/rightsidebg.png"

function Login() {
  return (
    <Wrapper>
        <Loginwrap>
            <Logo>
                <img src={Tokiomarinelogo} />
            </Logo>
            <Greet>
                <h1>Welcome Back</h1>
                <p>Enter your email and password to sign in</p>
            </Greet>
            <Lgnform>
                
                    <p>Email</p>
                    <input type="text" placeholder='Your name or email'/>
                    <p>Password</p>
                    <PasswordInput/> 
                    <SwandFg>
                        <Switch>
                            <Toggleswitch/>
                        </Switch>
                        <Fgcon>
                            <label>Remember me</label>
                            <a href='#'>Forget your password?</a>
                        </Fgcon> 
                    </SwandFg>
                    <button type='submit'>Login</button>
                
            </Lgnform>
             
            <Lgnfooter>
                <p>2023, Fast Track</p>
            </Lgnfooter>

        </Loginwrap>

        <Loginbanner style={{background:`url(${Rightsidebg})`}}/>
       
    </Wrapper>
    
  )
}

export default Login