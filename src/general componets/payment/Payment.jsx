import { loadStripe } from "@stripe/stripe-js";
import Hadlines from "../Hadlines";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe('pk_test_51OEAXTFSdPUsKpuTCPVL2kSpTFSpYORfZWuvoW3PeVixQF2PD8EyxYW2a51ureWZj29gE60yB5e2EkYQwCvNi7R800Yx6jtjN3')
const Payment = () => {










    return (
        <div>
            <Hadlines title={'Take Your Membership'}></Hadlines>

            <div className="">
    <Elements stripe={stripePromise}>
     <PaymentForm></PaymentForm>
    </Elements>
</div>

        </div>
    );
};

export default Payment;