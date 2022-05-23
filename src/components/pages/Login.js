import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./Login.css";
import "../ContactForm.css";

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className='contact__label-container'>
                <label htmlFor={props.id || props.name}>{label}</label>
                {meta.touched && meta.error ? (
                    <div className='error'>{meta.error}</div>
                ) : null}
            </div>
            <input className='text-input' {...field} {...props} />
        </>
    );
};

const LoginForm = props => {
    const { handleLogIn } = props;

    return (
        <div className='login__outer-container'>
            <div className='login__inner-container'>
                <div className='contact__heading'>Member Login</div>
                <Formik
                    initialValues={{
                        password: "",
                    }}
                    validationSchema={Yup.object({
                        password: Yup.string().required(
                            "* You must enter a password"
                        ),
                    })}
                    onSubmit={async (values, { setSubmitting }) => {
                        await new Promise(r => setTimeout(r, 500));
                        handleLogIn(values.password);
                        setSubmitting(false);
                    }}>
                    <div className='contact__form-container'>
                        <div className='contact__message'>
                            Please enter your password to view Members content.
                        </div>
                        <Form className='contact__form'>
                            <TextInput
                                label='Password'
                                name='password'
                                type='password'
                                placeholder='Enter your password'
                            />
                            <div className='contact__submit-container'>
                                <button
                                    className='contact__submit-button'
                                    type='submit'>
                                    Login
                                </button>
                            </div>
                        </Form>
                    </div>
                </Formik>
            </div>
        </div>
    );
};

export default LoginForm;
