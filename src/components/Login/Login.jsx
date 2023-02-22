import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../common/Preloader/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            E-mail
          </label>
          <Field
            validate={[requiredField]}
            placeholder={"Email"}
            name={"email"}
            component={FormControl}
            types="input"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div id="emailHelp" class="form-text">
            We will never share your email with anyone.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <Field
            validate={[requiredField]}
            placeholder={"Password"}
            name={"password"}
            component={FormControl}
            types="input"
            type={"password"}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <Field
            validate={[]}
            placeholder={"Email"}
            name={"email"}
            component={FormControl}
            types="input"
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          />

          <label class="form-check-label" for="exampleCheck1">
            Remember me
          </label>
        </div>

        {captchaUrl && <img src={captchaUrl} alt="captcha" />}
        {captchaUrl && (
          <div className="pt-1 pb-1">
            <Field
              validate={[requiredField]}
              placeholder={"Symbols from image"}
              name={"captcha"}
              component={FormControl}
              types="input"
              class="form-control"
              id="exampleInput1"
            />
          </div>
        )}
        {error && <div className={"alert alert-danger"}>{error}</div>}
        <button type="submit" class="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) return <Navigate to={"/profile"} />;
  return (
    <div>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default connect(mapStateToProps, { login })(Login);
