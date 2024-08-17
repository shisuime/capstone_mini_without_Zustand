import SignUpForm from "../Sign-up Form component/sign-up-form.component";
import SignInForm from "../Sign-in-Form/sign-in-form.component";
import "./Signin.styles.scss";
import { useContext, useEffect } from "react";
import { Usercontext } from "../../contexts/user.context.js";
import { useNavigate } from "react-router-dom";

const SigninComponent = () => {
  const { currentUser } = useContext(Usercontext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/home");
    }
  }, [currentUser]);

  return (
    <div className="signin-page">
      <SignInForm currentUser={currentUser} />
      <SignUpForm currentUser={currentUser} />
    </div>
  );
};

export default SigninComponent;
