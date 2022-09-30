import { Grid, TextField, Typography } from "@mui/material";
import { CardCvcElement, CardExpiryElement, CardNumberElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementType } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import agent from "../../app/api/agent";
import AppTextInput from "../../app/components/AppTextInput";
import { useAppDispatch } from "../../app/store/configureStore";
import { setBasket } from "../basket/basketSlice";
import { StripeInput } from "./StripeInput";

interface Props {
  cardState: { elementError: {[key in StripeElementType]?: string} };
  onCardInputChange: (event: any) => void;
}

const stripePromise = loadStripe('pk_test_51LnNCWEdYseqauRRtlqc8Xa97XwjVXs9YQQdxGLg9HsyBfUDMrPUOB0JJA25RDlbrwWrmrJzakEJTI7BUkDCh5b800M9lQeIZs');


export default function PaymentForm({cardState, onCardInputChange}: Props) {
  const { control } = useFormContext();

  const dispatch = useAppDispatch();
const [loading, setLoading] = useState(true);

useEffect(() => {
  agent.Payments.createPaymentIntent()
    .then(basket => dispatch(setBasket(basket)))
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
}, [dispatch])

  return (
    <Elements stripe={stripePromise}>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <AppTextInput
            name="nameOnCard"
            label="Name on card"
            control={control}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={onCardInputChange}
            error={!!cardState.elementError.cardNumber}
            helperText={cardState.elementError.cardNumber}
            id="cardNumber"
            label="Card Number"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
            InputLabelProps={{shrink: true}}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardNumberElement
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={onCardInputChange}
            error={!!cardState.elementError.cardExpiry}
            helperText={cardState.elementError.cardExpiry}
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="outlined"
            InputLabelProps={{shrink: true}}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement
              }
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            onChange={onCardInputChange}
            error={!!cardState.elementError.cardCvc}
            helperText={cardState.elementError.cardCvc}
            id="cvv"
            label="CVV"
            fullWidth
            autoComplete="cc-csc"
            variant="outlined"
            InputLabelProps={{shrink: true}}
            InputProps={{
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement
              }
            }}
          />
        </Grid>
      </Grid>
    </Elements>
  );
}
