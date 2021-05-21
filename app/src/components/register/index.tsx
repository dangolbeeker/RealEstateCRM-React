/* eslint-env es6 */
/* eslint-disable no-console */

import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';


interface RegisterValues {
    Name:  string;
    Email: string;
    Phone: string;
    Password: string;
    RepeatPassword: string;
}


  const Register: React.VFC = () => {
   let RegisterForm = (props: FormikProps<RegisterValues>) => {
    const { touched, errors, isSubmitting} = props;
    <Form>
    <Field type="Name" name="Name" />
    {touched.Name && error.Name && <div>{errors.name}</div>}
    <Field type="Email" name="Email" />
    {touched.Email && error.Email && <div>{errors.Email}</div>}
    <Field type="Phone" name="Phone" />
    {touched.Phone && error.Phone && <div>{errors.Phone}</div>}
    <Field type="Password" name="Password" />
    {touched.Password && error.Password && <div>{errors.Password}</div>}
    <Field type="PasswordConfirmation" name="Passwordconfirmation" />
    {touched.Passwordconfirmation && errors.Passwordconfirmation<div>errors.RepeatPassword}
     <button type="submit" disabled={isSubmitting}>
         Submit
       </button>
     </Form>
     
   };
 };

  
  RegistrationSchema: Yup.object().shape({
    Name: Yup.string().required("Name is Required"),
    Email: Yup.string().required("Email is Required"),
    Username: Yup.string().required("Username is required"),
    Password: Yup.string()
    .min(6)
    .required("password is required"),
    Passwordconfirmation: Yup.string()
    .min(6)
    .required("please repeat your password")
  })


export default Register;
