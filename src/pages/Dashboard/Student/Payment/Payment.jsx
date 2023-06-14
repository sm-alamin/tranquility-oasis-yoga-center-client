import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import useCart from "../../../../hooks/useCart";
import { useParams } from "react-router-dom";

// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY);
const Payment = () => {
    const {id} = useParams();
    console.log(id);
    const [cart] = useCart();
    const newCart = cart.find(item => item._id === id);
    console.log('price will be', newCart)
    return (
        <div>
            <SectionHeader heading="Please! Payment" tagline='Only limited seat available'/>
           
            <Elements stripe={stripePromise}>
                <CheckoutForm newCart={newCart} price ={newCart.price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;