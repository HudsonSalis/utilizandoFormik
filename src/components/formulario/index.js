import React, { useState } from "react";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import schema from '../schema/schema';
import * as S from './style';


const Formulario = () => {

    
    function onSubmit(values, actions) {
        const Swal = require('sweetalert2');
        Swal.fire(
            'Good job!',
            'Você completou o formulário!!',
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
                        ( { isValid, errors, touched,setFieldValue } ) => (
                        
                        <Form className="Form">
                        
                            <div className="informative-Text">Digite seu cep e seus dados serão carregados automaticamente</div>
                            <div className="form-floating">
                                <Field id="floatInput" placeholder="Cep" className={ errors.cep && touched.cep ? "input-Form-Invalid form-control" : "input-Form form-control"} name="cep" type="text" onBlur={(ev) => onBlurCep(ev, setFieldValue)} />
                                <label htmlFor="floatInput"> Cep * </label>

                                <div className="nao-sei-Cep">
                                    <div className="buscaCep" type="submit" onClick={showOrHide}>?</div>
                                    { showElement ? 
                                        <div className="site-Cep">
                                            <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" rel="noreferrer" target="_blank">Não sabe seu Cep?
                                            </a> 
                                        </div> : null}
                                    
                                </div>
                                <ErrorMessage component="div" className="teste"  name="cep" />
                            </div>
            
                            <div className="form-floating">
                                <Field placeholder="Rua" id="inputFloat" className={ errors.rua && touched.rua ? "input-Form-Invalid form-control" : "input-Form form-control"} name="rua" type="text" />                
                                <label htmlFor="inputFloat"> Rua * </label>

                                <ErrorMessage component="div" className="teste" name="rua" />
                                
                            </div>
            
                            <div className="form-floating">
                                <Field placeholder="Número" id="floatInput" className={ errors.numero && touched.numero ? "input-Form-Invalid form-control" : "input-Form form-control"} name="numero" type="text" />
                                <label htmlFor="floatInput"> Número *</label>

                                <ErrorMessage component="div" className="teste" name="numero" />
                            </div>
            
                            <div className="form-floating">
                                <Field id="inputFloat" placeholder="Complemento" className="input-Form form-control" name="complemento" type="text" />
                                <label htmlFor="inputFloat"> Complemento </label>

                                <ErrorMessage name="complemento" />
                            </div>
            
                            <div className="form-floating">
                                <Field id="floatInput" placeholder="Bairro" className={ errors.bairro && touched.bairro ? "input-Form-Invalid form-control" : "input-Form form-control"} name="bairro" type="text" />
                                <label htmlFor="floatInput"> Bairro *</label>

                                <ErrorMessage component="div" className="teste"  name="bairro" />
                            </div>
            
                            <div className="form-floating">
                                <Field  id="floatInput"  placeholder="Cidade" className={ errors.cidade && touched.cidade ? "input-Form-Invalid form-control" : "input-Form form-control"} name="cidade" type="text" />
                                <label htmlFor="floatInput"> Cidade *</label>

                                <ErrorMessage component="div" className="teste"  name="cidade" />
                            </div>
            
                            <S.FormOption>
                                <label> Estado *</label>
                                
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
