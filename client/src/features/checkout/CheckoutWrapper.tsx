import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const stripePromise = loadStripe('pk_test_51LnNCWEdYseqauRRtlqc8Xa97XwjVXs9YQQdxGLg9HsyBfUDMrPUOB0JJA25RDlbrwWrmrJzakEJTI7BUkDCh5b800M9lQeIZs');

export default function CheckoutWrapper() {

  return (
    <Elements stripe={stripePromise}>
        <CheckoutPage />
    </Elements>
  )
}
