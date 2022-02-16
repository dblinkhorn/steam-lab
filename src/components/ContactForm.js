import { Formik, Form, useField } from "formik"
import * as Yup from "yup"
import './ContactForm.css'

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='contact__label-container'>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        { meta.touched && meta.error ? (
        <div className="error">{ meta.error }</div>
        ) : null }
      </div>
      <input className="text-input" { ...field } { ...props } />
    </>
  )
}

const PhoneInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className='contact__label-container'>
        <label htmlFor={ props.id || props.name }>{ label }</label>
        { meta.touched && meta.error ? (
        <div className="error">{ meta.error }</div>
        ) : '(optional)' }
      </div>
      <input className="text-input" { ...field } { ...props } />
    </>
  )
}

const ContactForm = () => {
  return (
    <div className='contact__form-inner-container'>
      <div className="contact__heading">Contact Us</div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: ""
        }}

        validationSchema={ Yup.object({
          firstName: Yup.string()
            .max(15, "* Must be 15 characters or less")
            .required("* Required"),
          lastName: Yup.string()
            .max(20, "* Must be 20 characters or less")
            .required("* Required"),
          email: Yup.string()
            .email("* Invalid email address")
            .required("* Required"),
          phoneNumber: Yup.string()
            .matches(
              /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
              "* Invalid phone number"
              )
        })}
        
        onSubmit={ async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 500))
          setSubmitting(false);
        }}
      >
      <div className="contact__form-container">
        <div className="contact__message">
          Please provide your contact information below and we will be in touch to discuss any questions you may have
          about Mr Reed's STEAM Lab.
          <p>We look foward to hearing from you!</p>
        </div>
        <Form className="contact__form">
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="First name"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Last name"
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="email@example.com"
          />
          <PhoneInput
            label='Phone Number'
            name='phoneNumber'
            type='tel'
            placeholder='(555) 555-5555'
          />
          <div className='contact__submit-container'>
            <button className='contact__submit-button' type="submit">Submit</button>
          </div>
        </Form>
      </div>
      </Formik>
    </div>
  );
};

export default ContactForm