import { useState, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";
import FormInput from "../common/Form-input/Form-input.component";
import Button from "../common/Button/Button.component";
import "./payment.styles.scss";
import { storeOrder } from "../../utils/Firebase/Firebase.utils";
import { Usercontext } from "../../contexts/user.context";

const Paymentcomponent = () => {
  const navigation = useNavigate();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [Expire, setExpire] = useState("");
  const [CVV, setCVV] = useState("");
  const { cartItems } = useContext(CartContext);
  console.log(cartItems, "items");

  const { currentUser } = useContext(Usercontext);
  console.log(currentUser.uid);

  const handlePayment = () => {
    if (!name || !number || !Expire || !CVV) {
      alert("Enter card credentials");
    } else {
      storeOrder(currentUser.uid, cartItems);
      alert("Payment Successful");
      navigation("/home");
    }
  };

  return (
    <>
      <div>
        <h1 className="setting">Card Details</h1>
      </div>

      <div className="accountholdername">
        <FormInput
          label="Account Holder Name"
          type="text"
          required
          name="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Card Number"
          type="number"
          required
          name="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <FormInput
          label="Expire"
          type="number"
          required
          name="number"
          value={Expire}
          onChange={(e) => setExpire(e.target.value)}
        />
        <FormInput
          label="CVV"
          type="number"
          required
          name="number"
          value={CVV}
          onChange={(e) => setCVV(e.target.value)}
        />
        <div className="payments">
          <Button onClick={handlePayment}>Payment</Button>
        </div>
      </div>
    </>
  );
};
export default Paymentcomponent;
