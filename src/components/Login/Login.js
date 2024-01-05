import React from 'react'
import { Lgnform, Logo, Greet, Wrapper, Loginbanner, Lgnfooter, Loginwrap, SwandFg, Switch } from './Styled'
import Toggleswitch from '../Toggleswitch/Toggleswitch';
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
                <div >
                    <p>Email</p>
                    <input type="text" placeholder='Your name or email'/>
                    <p>Password</p>
                    <input type="password" placeholder='Your password'  /> 
                    <SwandFg>
                        <Switch>
                            <Toggleswitch/>
                        </Switch>
                        <div>
                            <label>Remember me</label>
                        </div>
                        <a href='#'>Forget your password?</a> 
                    </SwandFg>
                    <button >Login</button>
                </div>
            </Lgnform>
        </Loginwrap>

        <Loginbanner style={{background:`url(${Rightsidebg})`}}>
            
        </Loginbanner>
        
        <Lgnfooter>
            <p>2023, Fast Track</p>
        </Lgnfooter>

    </Wrapper>
    
  )
}

export default Login