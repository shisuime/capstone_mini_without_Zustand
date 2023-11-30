// import React, { Component } from 'react';
// import{ ElementsConsumer, CardElement} from "@stripe/react-stripe-js";

// class Cardcomponents extends Component {
//     handleSubmit= async (event)=> {
//     event.preventDefult();
//     const { stripe ,elements}=this.propes;
//     if(!stripe || !elements) return;
//     const card = elements.getElement(CardElement);
//     const result= await stripe.createToken(card);
//     if(result.error)

//     {
//       console.log(result.error.message);
//     }else{
//       console.log(result.token);
//     }
//  };
//   render() {
//     return (
//       <div className='cardcontaniner'>
//         <form onSubmit={this.handleSubmit}>
//             {/* <CardSection/> */}
//             <button disabled={!this.propes.stripe} className='btn-pay'>
//                 Buy Now
//             </button>

//         </form>
      
      
//       </div>
//     );
//   }
// }


// export default function InjectCheckout(){
//   return <ElementsConsumer>
//     {
//       ({stripe, elements})=>(
//         <cardcomponent stripe={stripe} elements={elements} />

//       )

//     }

//   </ElementsConsumer>
    
// }
