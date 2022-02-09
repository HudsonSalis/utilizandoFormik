import styled from "styled-components";


export const Conteudo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5vh;
    margin-bottom: 5vh;
`;

export const ConteudoForm = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    box-shadow: inset 0 0 0.5em black;
    border-radius: 10px;
    
    .Form{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .informative-Text{
        font-size: 13px;
    }

    .input-Form{
        font-family: 'Roboto', sans-serif;
        width: 350px;
        padding: 5px;
        margin-top: 15px;
       
    }
    label{
        margin-top: 15px;
    }
    .input-Form-Invalid{
        font-family: 'Roboto', sans-serif;
        width: 350px;
        border-color: red;
        margin-top: 15px;
    }

    .nao-sei-Cep{
        position: absolute;
        right: 20px;
        top: 30px;
        font-size: 17px;
        color: red;
        cursor: pointer;
    }
    .buscaCep{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid red;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    .site-Cep{
        position: absolute;
        font-size: 13px;
        margin-top: 14px;
        margin-left: -40px;
        width: 150px;
    }

    .teste{
        color:red;
        font-size: 13px;
        
    }
`;

export const Titulo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    height: 80px;
    font-family: 'Roboto', sans-serif;
    align-self: center;
    background-color:rgba(20, 20, 23, 0.86);
    color: white;

    border-bottom: 1px solid  rgba(25, 27, 237, 0.6);
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px; 
    font-size: 26px;
    margin-bottom: 30px;

`;

export const FormOption = styled.div`

    display: flex;
    flex-direction: column;

    label{
        margin-top: 15px;
    }
      
    select{
        margin-top: 5px;
        padding: 5px;
        border-radius: 5px;
    }
`;

export const Button = styled.button`
   color: black;
    background-color: rgba(114, 208, 6, 1);
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 15px;
    border: none;

    border-radius: 20px;
    width: 200px;
    align-self: center;
    cursor: pointer;
    transition: 0.2s;

    &:hover{
        background-color: rgba(0,50,190,0.7)
    }
`;

