import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../common/Preloader/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import s from "../../common/Preloader/FormsControls/FormControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          validate={[requiredField]}
          placeholder={"Email"}
          name={"email"}
          component={FormControl}
          types="input"
        />
      </div>
      <div>
        <Field
          validate={[requiredField]}
          placeholder={"Password"}
          name={"password"}
          component={FormControl}
          types="input"
          type={"password"}
        />
      </div>
      <div>
        <Field
          component={FormControl}
          name={"rememberMe"}
          type={"checkbox"}
          types="input"
        />
        remember me
      </div>
      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl && (
        <Field
          validate={[requiredField]}
          placeholder={"Symbols from image"}
          name={"captcha"}
          component={FormControl}
          types="input"
        />
      )}
      {error && <div className={s.formSummoryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
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
      <h1>LOGIN</h1>;
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
