import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={(values)=>{
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2, 'El nombre debe ser de 3 caracteres o mas').max(15, 'Debe ser menor de 15').required('Requerido'),
          email: Yup.string().email('Debe ser un correo valido').required('Requerido'),
          password1: Yup.string().required().min(6, 'Minimo 6 caracteres'),
          password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas deben ser iguales').required('Requerido')
        })}
      >
        {
          ({handleReset}) => (
            <Form>
              <MyTextInput 
                label="Nombre"
                name="name"
                placeholder="Escribe tu nombre"
              />
              <MyTextInput 
                label="email"
                name="email"
                placeholder="Escribe tu correo"
                type="email"
              />
              <MyTextInput 
                label="Password"
                name="password1"
                placeholder="*************"
                type="password"
              />
              <MyTextInput 
                label="Repeat Password"
                name="password2"
                placeholder="*************"
                type="password"
              />
              <button type="submit">Create</button>
              <button type="button" onClick={handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
