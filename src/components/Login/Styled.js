import styled from "styled-components";

export const Wrapper = styled.section`
    display: grid;
    grid-template-areas: "leftside rightside"  ;
    justify-content: center;
    max-width:100%;
    max-height:100%;
    @media (max-width: 991px) {
		width:auto;
	}
	@media (max-width: 480px) {
		width: auto;
	}
    

`

export const Loginwrap = styled.section`
    grid-area:leftside;
    margin-left:23%;
    width:764px;    
    height:603px;
   

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
        border: none;
        margin-top: 2rem;
        padding: 0px 8px;
        width: 439px;
        height: 45px;
        color: white;
        background-color:#5198D7;
        border-radius: 12px;
    }
    
`
export const SwandFg = styled.div`
    display:flex;
    align-items: center;
    margin-top: 1rem;
    

`

export const Fgcon = styled.section`
    margin-left: 10px;
    label{
        margin-right:0;
        color:#2D3748;
       
    }
    a{
        margin-left: 108px;
        color:#5198D7;
        font-weight:700;
        text-decoration:none;

    }
`

export const Switch = styled.label`
    height:16px;
   
`

export const Loginbanner = styled.form`
    grid-area: rightside;
    margin-left: 0rem;
    border-bottom-left-radius: 20px 20px;
    width: 748px;
    height: 845px;
    @media (max-width: 991px) {
		width:auto;
        height:auto;
	}
	@media (max-width: 480px) {
		width:auto;
        height:auto;
	}
  
`

export const Lgnfooter = styled.footer`
   grid-area: leftside;
   margin-top: 215px;
   margin-left: 165px;
   margin-bottom: 5%;
   align-items: center;
   justify-content:center;

   p{
    color:#A0AEC0;
   }
    
`