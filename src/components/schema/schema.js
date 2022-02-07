import * as Yup from 'yup';

// now use Yup schemas AFTER you defined your custom dictionary
let schema = Yup.object().shape({

  cep: Yup.string().required("* Obrigatório"),
  bairro: Yup.string().required("* Obrigatório"),
  rua: Yup.string().required("* Obrigatório"),
  numero: Yup.number().typeError("Inválido, digite um número").max(10000, 'Número muito grande').required("* Obrigatório"),
  cidade: Yup.string().required("* Obrigatório"),



});

export default schema;