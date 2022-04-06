import { ErrorMessage, useField } from "formik"

interface Props{
  label:string;
  name:string;
  type?:'text'|'email'|'password';
  placeholder?:string;
  [x:string]:any;
}

export const MyTextInput = ({label, ...props}:Props) => {

  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className={ meta.error && "cualquier clase" } { ...field } { ...props } />
      <ErrorMessage name={props.name} component="span" className="cualquiera"/>
    </>
  )
}
