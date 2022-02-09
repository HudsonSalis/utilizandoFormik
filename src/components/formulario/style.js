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

    .nao-sei-Cep{
        position: absolute;
        margin-top: 34px;
        margin-right: 10px;
        align-self: end;
        font-size: 17px;
        color: red;
        cursor: pointer;
    }

    .site-Cep{
        position: absolute;
        margin-top: 8px;
        margin-left: -70px;
        width: 150px;
    }

    .spanObrigatorio{
        color: red;
    }

    label{
        margin-top: 5px;
        margin-bottom: 3px;
        font-family: 'Roboto', sans-serif;

    }

    .input-Form{
        font-family: 'Roboto', sans-serif;
        width: 350px;
        margin-top: 2px;
        padding: 7px;
        
    }

    .input-Form-Invalid{
        font-family: 'Roboto', sans-serif;
        width: 350px;
        margin-top: 2px;
        padding: 7px;
        border-color: rgba(250,10,10);
        border-radius: 5px;
    }

    .teste{

        color:red;

        &:focus{
            color: black;
        }
      }
      

    select{
        padding: 5px;
        border-color: rgba(0,50,190,0.4);
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

    &:hover{
        background-color: rgba(0,50,190,0.7)
    }
`;

