
import SignUpForm from '../Sign-up Form component/sign-up-form.component'
import SignInForm from '../Sign-in-Form/sign-in-form.component'
import './Signin.styles.scss'

const SigninComponent=()=>{
   
    

    
    return(
        <div className="signin-page">
            
            <SignInForm />
            <SignUpForm />
            
        </div>
        
    )
}

export default SigninComponent;