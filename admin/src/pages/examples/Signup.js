
import { faEnvelope, faUnlockAlt, faUser, faUserCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Col, Container, Form, FormCheck, InputGroup, Row } from '@themesberg/react-bootstrap';
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from "react-toast-notifications";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { signupThunk } from "../../redux/authSlice";
import { Routes } from "../../routes";

const ProgressBar = require('react-progress-bar-plus');


export default () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();
  let { addToast } = useToasts()
  const [checkbox, setCheckbox] = useState(false)
  let dispatch = useDispatch();
  let history = useHistory()
  let signup = async (form) => {
    if (checkbox) {
      if (form.password !== form.confirmPassword) {
        addToast("Mật khẩu nhập lại chưa đúng", { appearance: 'error', autoDismiss: 2000 })
      }
      let { confirmPassword, ...other } = form;
      let data = await dispatch(signupThunk(other));
      if (data?.statusCode == 201) {
        addToast(data.message, { appearance: 'error' })
      } else {
        addToast("Đăng ký thành công", { appearance: 'success', autoDismiss: 2000 })
        history.push(Routes.PendingAccount.path)
      }
    } else {
      addToast("Bạn cần đồng ý với điều khoản của chúng tôi", { appearance: 'info', autoDismiss: 2000 })
    }
  }
  let progress = useSelector(state => state.progress.value)

  return (
    <>
      <ProgressBar percent={progress} />
      <main>
        <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
          <Container>
            <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
              <Col xs={12} className="d-flex align-items-center justify-content-center">
                <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h3 className="mb-0">Sign up</h3>
                  </div>
                  <Form className="mt-4">
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Email</Form.Label>
                      <Controller
                        control={control}
                        name="email"
                        render={({
                          field: { onChange, onBlur, value }
                        }) => (
                          <InputGroup>
                            <InputGroup.Text style={{ borderColor: errors.email?.type === "required" && 'red' }} >
                              <FontAwesomeIcon icon={faEnvelope} />
                            </InputGroup.Text>
                            <Form.Control autoFocus required type="email" placeholder="example@company.com" onChange={e => onChange(e.target.value)}
                              onBlur={onBlur}
                              style={{ borderColor: errors.email?.type === "required" && 'red' }}
                            />
                          </InputGroup>
                        )}
                        rules={{
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                          }
                        }}
                      />
                      <span style={{ color: 'red', fontSize: 12 }} >{errors.email?.type === 'pattern' && "* Chưa đúng định dạng email"}</span>
                    </Form.Group>
                    <Form.Group id="username" className="mb-4">
                      <Form.Label>Username</Form.Label>
                      <Controller
                        control={control}
                        name="username"
                        render={({
                          field: { onChange, onBlur, value }
                        }) => (
                          <InputGroup>
                            <InputGroup.Text style={{ borderColor: errors.email?.type === "required" && 'red' }} >
                              <FontAwesomeIcon icon={faUserCog} />
                            </InputGroup.Text>
                            <Form.Control autoFocus required type="text" placeholder="hoangminh" onChange={e => onChange(e.target.value)}
                              onBlur={onBlur}
                              style={{ borderColor: errors.email?.type === "required" && 'red' }}
                            />
                          </InputGroup>
                        )}
                        rules={{ required: true }}
                      />
                    </Form.Group>
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>First Name</Form.Label>
                      <Controller
                        control={control}
                        name="firstName"
                        render={({
                          field: { onChange, onBlur, value }
                        }) => (
                          <InputGroup>
                            <InputGroup.Text style={{ borderColor: errors.email?.type === "required" && 'red' }}>
                              <FontAwesomeIcon icon={faUser} />
                            </InputGroup.Text>
                            <Form.Control autoFocus required type="text" placeholder="Hoàng" onChange={e => onChange(e.target.value)}
                              onBlur={onBlur}
                              style={{ borderColor: errors.email?.type === "required" && 'red' }}
                            />
                          </InputGroup>
                        )}
                        rules={{ required: true }}
                      />
                    </Form.Group>
                    <Form.Group id="email" className="mb-4">
                      <Form.Label>Last Name</Form.Label>
                      <Controller
                        control={control}
                        name="lastName"
                        render={({
                          field: { onChange, onBlur, value }
                        }) => (
                          <InputGroup>
                            <InputGroup.Text style={{ borderColor: errors.email?.type === "required" && 'red' }}>
                              <FontAwesomeIcon icon={faUser} />
                            </InputGroup.Text>
                            <Form.Control autoFocus required type="text" placeholder="Minh" onChange={e => onChange(e.target.value)}
                              onBlur={onBlur}
                              style={{ borderColor: errors.email?.type === "required" && 'red' }}
                            />
                          </InputGroup>
                        )}
                        rules={{ required: true }}
                      />
                    </Form.Group>

                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <Controller
                        control={control}
                        name="password"
                        render={({
                          field: { onChange, onBlur, value }
                        }) => (
                          <InputGroup>
                            <InputGroup.Text style={{ borderColor: errors.email?.type === "required" && 'red' }} >
                              <FontAwesomeIcon icon={faUnlockAlt} />
                            </InputGroup.Text>
                            <Form.Control autoFocus required type="password" onChange={e => onChange(e.target.value)}
                              onBlur={onBlur}
                              style={{ borderColor: errors.email?.type === "required" && 'red' }}
                            />
                          </InputGroup>
                        )}
                        rules={{ required: true, minLength: 8 }}
                      />
                      <span style={{ color: 'red', fontSize: 12 }} >{errors.password?.type === 'minLength' && "* Mật khẩu cần ít nhất là 8 ký tự"}</span>
                    </Form.Group>
                    <Form.Group id="confirmPassword" className="mb-4">
                      <Form.Label>Confirm Password</Form.Label>
                      <Controller
                        control={control}
                        name="confirmPassword"
                        render={({
                          field: { onChange, onBlur, value }
                        }) => (
                          <InputGroup>
                            <InputGroup.Text style={{ borderColor: errors.email?.type === "required" && 'red' }}>
                              <FontAwesomeIcon icon={faUnlockAlt} />
                            </InputGroup.Text>
                            <Form.Control autoFocus required type="password" onChange={e => onChange(e.target.value)}
                              onBlur={onBlur}
                              style={{ borderColor: errors.email?.type === "required" && 'red' }}
                            />
                          </InputGroup>
                        )}
                        rules={{ required: true, minLength: 8 }}
                      />
                      <span style={{ color: 'red', fontSize: 12 }} >{errors.password?.type === 'minLength' && "* Mật khẩu cần ít nhất là 8 ký tự"}</span>
                    </Form.Group>
                    <FormCheck type="checkbox" className="d-flex mb-4"  >
                      <FormCheck.Input required id="terms" className="me-2" checked={checkbox} onChange={() => setCheckbox(!checkbox)} />

                      <FormCheck.Label htmlFor="terms">
                        I agree to the <Card.Link>terms and conditions</Card.Link>
                      </FormCheck.Label>
                    </FormCheck>
                    <Button variant="primary" type="submit" className="w-100" onClick={handleSubmit(signup)} >
                      Sign up
                    </Button>
                  </Form>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="fw-normal">
                      Already have an account?
                      <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                      </Card.Link>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};
