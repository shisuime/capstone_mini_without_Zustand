import { useState } from "react";
import {
  signInwithGooglePopup,
  signInAuthUserWithEmailandPassword,
} from "../../utils/Firebase/Firebase.utils";
import FormInput from "../common/Form-input/Form-input.component";
import "./sign-in-form.styles.scss";
import Buttton from "../common/Button/Button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = ({ currentUser }) => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetformFields = () => {
    setformFields(defaultFormFields);
  };
  const handlesubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailandPassword(email, password);

      resetformFields();
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("incorrect credentials");
      }
    }
  };
  const handlechange = (event) => {
    const { name, value } = event.target;
    setformFields({ ...formFields, [name]: value });
  };
  const SignInwithGoogle = async () => {
    try {
      signInwithGooglePopup();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handlesubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handlechange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handlechange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Buttton type="submit">Sign In</Buttton>
          {/* className ='glow-on-hover' */}
          {/* className ='glow-on-hover' */}
        </div>
        <div className="Buttons-container">
          <Buttton type="button" buttonType="google" onClick={SignInwithGoogle}>
            Sign in with Google
          </Buttton>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
