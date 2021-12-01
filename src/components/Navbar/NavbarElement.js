import styled from 'styled-components';

export const Search = styled.input`
    width: 300px;
    height : 35px;
    padding: 0px 30px;
    border-radius: 25px;
    
    outline: none;
    font-size: 16px;
    
    border: 0.5px solid var(--primary);
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));
    @media screen and (max-width: 960px){
        width: 80vw; 
        height : 45px;
        font-size : 12px;
    }
`