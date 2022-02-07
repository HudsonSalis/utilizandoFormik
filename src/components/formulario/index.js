import React, { useState } from "react";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import schema from '../schema/schema';
import * as S from './style';
const Swal = require('sweetalert2');

const Formulario = () => {

    function onSubmit(values, actions) {
        Swal.fire(
            'Good job!',
            'Você completou o formulário',
            'success'
          );
        console.log( 'SUBMIT: ',values)
    }

    function onBlurCep(ev, setFieldValue) {
        const { value } = ev.target;
        const cep = value?.replace(/[^0-9]/g, '');
    
        if( cep?.length !== 8){
          return;
        }
    
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
          .then((res) => res.json())
          .then((data) => {
            setFieldValue('bairro' , data.bairro);
            setFieldValue('cidade' , data.localidade);
            setFieldValue('rua' , data.logradouro);
            setFieldValue('uf' , data.uf);  
          })   
    }

   const [showElement, setShowElement] = useState(false);
   const showOrHide = () => {
       if(showElement === false){
            setShowElement(true);
       }
       if(showElement === true){
            setShowElement(false);
       }
   }


    return (
        <S.Conteudo>
            <S.ConteudoForm>
                <S.Titulo>Formulário automático - CEP</S.Titulo>

                <Formik 
                    validationSchema={schema}
                    validateOnMount
                    onSubmit={onSubmit}
                    initialValues={{
                    cep: '',
                    rua: '',
                    numero: '',
                    uf: '',
                    complemento: '',
                    bairro: '',
                    cidade: '',
                    }}
                >
                    {
                        ( { isValid, setFieldValue } ) => (
                        
                        <Form className="Form">
                        
                            <S.FormOption>
                                <label> CEP <span className="spanObrigatorio">*</span> </label>
                                <Field className="input-Form" name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
                                <div className="nao-sei-Cep">
                                    <div type="submit" onClick={showOrHide}>?</div>
                                    { showElement ? 
                                        <div className="site-Cep">
                                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" rel="noreferrer" target="_blank">Não sabe seu Cep?
                                            </a> 
                                        </div> : null}
                                    
                                </div>
                                <ErrorMessage component="div" className="teste"  name="cep" />
                            </S.FormOption>
            
                            <S.FormOption>
                                <label> RUA <span className="spanObrigatorio">*</span></label>
                                <Field className="input-Form" name="rua" type="text" />
                    
                                <ErrorMessage component="div" className="teste" name="rua" />
                               
                                
                            </S.FormOption>
            
                            <S.FormOption>
                                <label> NÚMERO <span className="spanObrigatorio">*</span></label>
                                <Field className="input-Form" name="numero" type="text" />
                                <ErrorMessage component="div" className="teste" name="numero" />
                            </S.FormOption>
            
                            <S.FormOption>
                                <label> COMPLEMENTO </label>
                                <Field className="input-Form" name="complemento" type="text" />
                                <ErrorMessage name="complemento" />
                            </S.FormOption>
            
                            <S.FormOption>
                                <label> BAIRRO <span className="spanObrigatorio">*</span></label>
                                <Field className="input-Form" name="bairro" type="text" />
                                <ErrorMessage component="div" className="teste"  name="bairro" />
                            </S.FormOption>
            
                            <S.FormOption>
                                <label> CIDADE <span className="spanObrigatorio">*</span></label>
                                <Field  className="input-Form" name="cidade" type="text" />
                                <ErrorMessage component="div" className="teste"  name="cidade" />
                            </S.FormOption>
            
                            <S.FormOption>
                                <label> ESTADO <span className="spanObrigatorio">*</span></label>
                                <Field  component="select" name="uf">   
                                    <option value="SP">São Paulo</option>
                                    <option value="MG">Minas Gerais </option>
                                    <option value="RJ">Rio de Janeiro </option>

                                </Field>
                                <ErrorMessage component="div" className="teste" name="estado" />
                            </S.FormOption>
            
                            <S.Button type="submit" disabled={!isValid}>Enviar</S.Button>
                        </Form>
                        )
                    }
                </Formik>
            </S.ConteudoForm>
        </S.Conteudo>
    
      );
    
}



export default Formulario;
