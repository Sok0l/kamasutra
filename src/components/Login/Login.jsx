import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormControl } from "../../common/Preloader/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import s from "../../common/Preloader/FormsControls/FormControls.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
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
      {props.error && <div className={s.formSummoryError}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) return <Navigate to={"/profile"} />;
  return (
    <div>
      <h1>LOGIN</h1>;
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default connect(mapStateToProps, { login })(Login);
