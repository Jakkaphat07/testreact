import styled from "styled-components";

export const Wrapper = styled.div`
    grid-template-areas:"navbar navbar navbar" 
                        "sidebar searchbar searchbar" 
                        "sidebar promanage promanage";
    background-color:#F8F9FA;
`
export const Navcon = styled.div`
    grid-area:"navbar";
`

export const Sidecon = styled.div`
    grid-area:"sidebar";
`

export const Searchcon = styled.div`
    grid-area:"searchbar";
`

export const Promancon = styled.div`
    grid-area:"promanage";
`