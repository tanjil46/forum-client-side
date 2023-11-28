import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import usePublicAxios from "../../Hooks/usePublicAxios";



const PaymentForm = () => {
const stripe=useStripe()
const elements=useElements()
const[secretOfClient,setSecretOfClient]=useState('')
const[transitionId,setTransationId]=useState('')
const axiosSecure=UseAxiosSecure()
const openAxios=usePublicAxios()
const[Errors,setError]=useState('')
const price=80;
const{user}=useAuth()
const navigate=useNavigate()
useEffect(()=>{
   
    axiosSecure.post('/create-payment-intent',{price})
    .then(res=>{
     console.log(res.data)
    setSecretOfClient(res.data.clientSecret)
        })
    

    },[axiosSecure])
    
    

   



const formHandler=async(event)=>{
    event.preventDefault();
    if(!stripe || !elements) {
       return
    }
     const card=elements.getElement(CardElement)
   
   if(card==null){
       return
   }


   const{error,paymentMethod}=await stripe.createPaymentMethod({
    type:'card',
    card
    
    })
    if(error){
        console.log('Payment Error',error)
       setError(error.message)
    }
    else{
        console.log('Payment method',paymentMethod)
       setError('')
    }
    
     const{paymentIntent,error:isError}=await stripe.confirmCardPayment(secretOfClient,{
        payment_method:{
            card:card,
            billing_details:{
             email:user.email,
             name:user.displayName,
            
            }
        }
     })
    



     if(isError){
        console.log(' payment error',isError)
    }else{
        console.log('confrim payment intent',paymentIntent)
         if(paymentIntent.status==='succeeded'){
           setTransationId(paymentIntent.id)

           const paymentInfo={
            email:user.email,
            price,
            transitionId:paymentIntent.id,
            date:new Date(),
            goldBadge:'https://i.ibb.co/qJJz3pG/images11.jpg'
           
    }

 const res=await axiosSecure.post('/payment',paymentInfo)
           console.log('paymet upload',res.data)

         const badgeInfo={
            badge:'https://i.ibb.co/qJJz3pG/images11.jpg'
         }

   const badgeRes=await openAxios.patch(`/users/${user?.email}`,badgeInfo)
   console.log(badgeRes.data)

           if(res.data.insertedId){
            Swal.fire(
              'success',
              'You are Member Now',
              'success'
            )
            navigate('/')
          }




         }

        






}






}
    return (
        <div>
             <form onSubmit={formHandler}>


<CardElement
options={{
style: {
    
base: {
    
fontSize: '18px',
color: '#CD5C5C',
'::placeholder': {
color: '#aab7c4',
},
},
invalid: {
color: '#9e2146',
},
},
}}      
/>
<button className="btn btn-sm bg-slate-500 my-6" type="submit" disabled={!stripe|| !secretOfClient  } >
Pay
</button>
 


</form>
{
    Errors&& <p className="text-center text-red-600">{Errors}</p>
 }




{
    transitionId&&<p className="text-center text-green-600">{transitionId}</p>
}
        </div>
    );
};

export default PaymentForm;