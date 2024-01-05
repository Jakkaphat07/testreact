import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-areas: "leftside rightside"  ;
    justify-content: center;
    width:1512px;
    height:982px;
`

export const Loginwrap = styled.section`
    grid-area:leftside;
    margin-left:10rem;
   

`

export const Logo = styled.section`
    margin-top: 10rem;
    img{
        width:351px;
        height:62px;
    }

`

export const Greet = styled.section`
    margin-top: 3rem;
    h1{
        margin-bottom: 1rem;
        color:#5198D7;
        font-size: 32px;
        font-weight: bold;
    }
    p{
        margin-top: 0rem;
        color:#A0AEC0;
        font-size: 14px;
        font-weight: bold;
    }

`

export const Lgnform = styled.section`
    margin-top: 2rem;
    input{
        border-radius: 10px;
        border: 1px #E2E8F0 solid;
        width: 397px;
        height: 50px;
        margin-top: 0rem;
        margin-bottom: 1rem;
        font-size: 15px;
        padding: 0px 20px;
       
    }
    input::placeholder{
        color:#c3c4c3;

    }
    p{
        margin-bottom: 0.5rem;
        color:#2D3748;
        
    }
    button{
        border: 1px #c3c4c3 solid;
        margin-top: 2rem;
        padding: 0px 8px;
        width: 397px;
        height: 45px;
        color: white;
        background-color:#5198D7;
        border-radius: 12px;
    }
    
`

export const SwandFg = styled.label`
    display: flex;
    margin-top: 1rem;
    label{
        color:#2D3748;
        margin-left:-1px;
    }
    a{
        margin-left: 2rem;
        color:#5198D7;
        text-decoration:none;

    }

`

export const Switch = styled.label`
    width:10%
`

export const Loginbanner = styled.form`
    grid-area: rightside;
    margin-left: 12%;
    border-bottom-left-radius: 20px 20px;
    width: 748px;
    height: 845px;
`

export const Lgnfooter = styled.footer`
   margin-top: 10%;
   margin-left: 45%;
   margin-bottom: 5%;
   width: 50%;
   align-items: center;
   justify-content:center;

   p{
    color:#A0AEC0;
   }
    
`