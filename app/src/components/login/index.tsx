
interface LoginValues{
    Email: string;
    Password: string;
}

const Login: React.VFC = () => {
   let LoginForm = (props: FormikProps<RegisterValues>) => {
    const { touched, errors, isSubmitting} = props;
    <Form>
   <Field type="Email" name="Email" />
    {touched.Email && error.Email && <div>{errors.Email}</div>}
    <Field type="Password" name="Password" />
    {touched.Password && error.Password && <div>{errors.Password}</div>}
     <button type="submit" disabled={isSubmitting}>
         Submit
       </button>
     </Form>
     
   };
 };

 RegistrationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()("Password is required")
    .min(6)
    .required("password is required")
 })