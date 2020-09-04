import React from 'react';
import { Row, Form, Col } from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { LoginApi } from '../api'

const schema = Yup.object({
    email: Yup.string().required().email('Enter a valid email'),
    password: Yup.string().required().min(6, 'Enter atleast 6 characters!'),
});

const mapStateToProps = state => ({
    pageState: state.AuthPageState,
    userInfo: state.UserInfo
})

function login({ pageState, userInfo, dispatch }) {
    console.log('Page state ', pageState)
    console.log('User info ', userInfo)
    if (userInfo.userLogged) {
        return <Redirect to='/' />
    }
    return (
        <div className="login-page-box">
            <h1>Login</h1>
            {pageState.loginError && <div className="alert alert-warning" role="alert">{pageState.loginError}</div>}
            <Formik
                validationSchema={schema}
                onSubmit={
                    (values) => {
                        LoginApi(dispatch, values);
                    }
                }

                initialValues={{
                    email: '',
                    password: '',
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
                    isSubmitting
                }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik1">
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

                                <Form.Group as={Col} md="12" controlId="validationFormik2">
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
                            </Form.Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <p>Not registered? <Link to="/signup">Sign up</Link></p>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                    <button type="submit" className="btn-auth-page" disabled={pageState.loginDisabled}>{pageState.loginBtnText}</button>
                                </Col>
                            </Row>

                        </Form>
                    )}
            </Formik>
        </div>
    );
}
export default connect(mapStateToProps)(login);
