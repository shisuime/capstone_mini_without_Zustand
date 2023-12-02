import { Card } from "@mui/material"
import FormInput from "../common/Form-input/Form-input.component"
import Button from "../common/Button/Button.component"
import  "./payment.styles.scss"

const Paymentcomponent = () => {
    return (
        <>
        <div>
            <h1 className="setting">Card Details</h1>
        </div>

        
        <div className="accountholdername">
            <FormInput label="Account Holder Name" type ="text" required  name="text" value="" />
            <FormInput label="Card Number" type ="number" required  name="Card Number" value="" />
            <FormInput label="Expire" type ="number" required  name="number" value="" />
            <FormInput label="Cvv" type ="number" required  name="number" value="" />
            <div className="payments">

            <Button class='glowing-btn'>Payment</Button>
            </div>
        </div>

        








        </>
        
    )
}
export default Paymentcomponent