import { Formik, Form, useField } from "formik";
import { useState, useEffect } from "react";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

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

const PhoneInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className='contact__label-container'>
                <label htmlFor={props.id || props.name}>{label}</label>
                {meta.touched && meta.error ? (
                    <div className='error'>{meta.error}</div>
                ) : (
                    "(optional)"
                )}
            </div>
            <input className='text-input' {...field} {...props} />
        </>
    );
};

const ContactForm = () => {
    const [showSuccessPage, setShowSuccessPage] = useState(false);
    const [countdownValue, setCountdownValue] = useState(10);
    const [errorMessage, setErrorMessage] = useState("");

    const timeoutMessage = `* You will be redirected to the home page in ${countdownValue} seconds...`;

    // redirects to home page after countdown ends
    useEffect(() => {
        if (countdownValue === 0) {
            window.location = "/";
        }
    });

    // countdown timer before redirect
    const countdownTimer = countdownValue => {
        let counter = countdownValue;
        setInterval(() => {
            setCountdownValue(counter);
            counter--;
        }, 1000);
    };

    const sendEmail = formValues => {
        emailjs
            .send(
                // real emailjs
                "service_y4xngug",
                "template_ywp4ga2",
                formValues,
                "NJynmtQghU3G96OpJ"

                // test emailjs
                // "service_lw3cijd",
                // "template_itwcwsl",
                // formValues,
                // "cReGtDoZbnriQ2erv"
            )
            .then(
                () => {
                    setShowSuccessPage(true);
                    countdownTimer(9);
                },
                error => {
                    console.log(error.text);
                    setErrorMessage(
                        "* Sorry, something went wrong. Please try again."
                    );
                }
            );
    };

    return (
        <div className='contact__form-inner-container'>
            {showSuccessPage ? (
                <div className='contact__form-container'>
                    <div className='contact__message margin-fix'>
                        Thank you for your interest in Mr Reed's STEAM Lab!
                        <p>
                            We have successfully received your inquiry and will
                            be in touch soon.
                        </p>
                        <div className='contact__button-countdown-container margin-top'>
                            <div className='contact__countdown-container'>
                                {timeoutMessage}
                            </div>
                            <div className='contact__submit-container'>
                                <button
                                    className='contact__submit-button'
                                    onClick={() => (window.location = "/")}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='contact__heading'>Contact Us</div>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phoneNumber: "",
                        }}
                        validationSchema={Yup.object({
                            firstName: Yup.string()
                                .max(25, "* Must be 25 characters or less")
                                .required("* Required"),
                            lastName: Yup.string()
                                .max(25, "* Must be 25 characters or less")
                                .required("* Required"),
                            email: Yup.string()
                                .email("* Invalid email address")
                                .required("* Required"),
                            phoneNumber: Yup.string().matches(
                                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                                "* Invalid phone number"
                            ),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            const formParams = {
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                phoneNumber: values.phoneNumber,
                            };
                            sendEmail(formParams);
                            setSubmitting(false);
                        }}>
                        <div className='contact__form-container'>
                            <div className='contact__message'>
                                Please provide your contact information below
                                and we will be in touch to discuss any questions
                                you may have about Mr Reed's STEAM Lab.
                                <p>We look foward to hearing from you!</p>
                            </div>
                            <Form className='contact__form'>
                                <TextInput
                                    autoFocus
                                    label='First Name'
                                    name='firstName'
                                    type='text'
                                    placeholder='First name'
                                />
                                <TextInput
                                    label='Last Name'
                                    name='lastName'
                                    type='text'
                                    placeholder='Last name'
                                />
                                <TextInput
                                    label='Email Address'
                                    name='email'
                                    type='email'
                                    placeholder='email@example.com'
                                />
                                <PhoneInput
                                    label='Phone Number'
                                    name='phoneNumber'
                                    type='tel'
                                    placeholder='(555) 555-5555'
                                />
                                <div className='contact__submit-container'>
                                    <div className='contact__error-message error'>
                                        {errorMessage}
                                    </div>
                                    <div className='contact__submit-button-container'>
                                        <button
                                            className='contact__submit-button'
                                            type='submit'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </Formik>
                </>
            )}
        </div>
    );
};

export default ContactForm;
