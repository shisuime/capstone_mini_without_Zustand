import { useState,useContext } from "react"
import { createAuthUserWithEmailandPassword,createUserDocumentFromAuth } from "../../utils/Firebase/Firebase.utils"
import FormInput from "../common/Form-input/Form-input.component"
import './sign-up-form.styles.scss'
import Button from "../common/Button/Button.component"




const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmpassword:''
}

const SignUpForm=()=>{
    const [formFields,setformFields]=useState(defaultFormFields)
    const{displayName,email,password,confirmpassword}=formFields

    
    
    const resetformFields=()=>{
        setformFields(defaultFormFields)
    }
    const handlesubmit= async(event)=>{
        event.preventDefault()
        if(password !== confirmpassword ){
            alert("password do not match")
            return
        }
        try{
            const {user}= await createAuthUserWithEmailandPassword(email,password)

            

            await createUserDocumentFromAuth(user,{displayName})


            resetformFields()

            
        }
        
        catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert("email already in use")
            }
            else{
                console.log("user creation error",error)
            }
            
        }
    }
    const handlechange=(event)=>{
        const {name,value}=event.target
        setformFields({...formFields,[name]:value})
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form className="form" onSubmit={handlesubmit}>
                
                <FormInput label="Display Name" type="text" required onChange={handlechange} name="displayName" value={displayName}/>

                
                <FormInput label="Email" type="email" required onChange={handlechange} name="email" value={email}/>

                
                <FormInput label="Password" type="password" required onChange={handlechange} name="password" value={password}/>

                
                <FormInput label="Confirm Password" type="password" required onChange={handlechange} name="confirmpassword"value={confirmpassword}/>
                <div className="wrap">
                <Button className ='btn btn-primary btn-ghost btn-shine'  type="submit">Sign Up</Button>
                </div>
            </form>
        </div>
        
    )
}


export default SignUpForm