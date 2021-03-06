import React from 'react';
import { Row, Form, Col } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { SignUpApi } from '../api'

const schema = Yup.object({
    name: Yup.string().required().min(2, 'Enter atleast 2 characters!'),
    email: Yup.string().required().email('Enter a valid email!'),
    password: Yup.string().required().min(6, 'Enter atleast 6 characters!'),
    cpassword: Yup.string().required('Retype password!').when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same!"
        )
    })

});

const mapStateToProps = state => ({
    pageState: state.AuthPageState,
    userInfo: state.UserInfo
})

function Signup({ pageState, userInfo, dispatch }) {
    if (userInfo.userLogged) {
        return <Redirect to='/' />
    }
    return (
        <div className="login-page-box">
            <h1>Create account</h1>
            {pageState.signupError && <div className="alert alert-warning" role="alert">{pageState.signupError}</div>}
            {pageState.signupSuccess && <div className="alert alert-success" role="alert">{pageState.signupSuccess}</div>}
            <Formik
                validationSchema={schema}
                onSubmit={
                    (values, { resetForm }) => {
                        SignUpApi(dispatch, values)
                    }
                }
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    cpassword: ''
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik1">
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={values.name}
                                        onChange={handleChange}
                                        isValid={touched.name && !errors.name}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="12" controlId="validationFormik2">
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isValid={touched.email && !errors.email}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="12" controlId="validationFormik3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isValid={touched.password && !errors.password}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="12" controlId="validationFormik4">
                                    <Form.Control
                                        type="password"
                                        placeholder="Retype password"
                                        name="cpassword"
                                        value={values.cpassword}
                                        onChange={handleChange}
                                        isValid={touched.cpassword && !errors.cpassword}
                                        isInvalid={!!errors.cpassword}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.cpassword}
                                    </Form.Control.Feedback>
                                </Form.Group>

                            </Form.Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <p>Registered? <Link to="/login">Log in</Link></p>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <button type="submit" className="btn-auth-page" disabled={pageState.signupDisabled}>{pageState.signupBtnText}</button>
                                </Col>
                            </Row>

                        </Form>
                    )}
            </Formik>
        </div>
    );
}
export default connect(mapStateToProps)(Signup);
