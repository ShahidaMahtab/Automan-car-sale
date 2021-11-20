import React, { useEffect, useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
  _id,
} from "@stripe/react-stripe-js";
import useAuth from "../../../hooks/useAuth";
import { CircularProgress } from "@mui/material";
import useAxios from "../../../hooks/useAxios";
const CheckoutForm = ({ order }) => {
  const { client } = useAxios();
  const { price, name, _id } = order;
  const { user } = useAuth();
  const stripe = useStripe();
  const element = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  useEffect(() => {
    client.post("/create-payment-intent", { price }).then((response) => {
      setClientSecret(response.data.clientSecret);
    });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !element) {
      return;
    }
    const card = element.getElement(CardElement);
    if (card == null) {
      return;
    }
    setProcessing(true);
    //it would return error and payment method
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }
    //payment Intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: user.email,
          },
        },
      });
    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setProcessing(false);
      setSuccess("Your payment processed successfully");

      // console.log(paymentIntent);
      //save to database
      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent?.client_secret?.slice("_secret")[0],
      };

      client.put(`/purchase/${_id}`, payment).then((response) => {
        console.log(response.data);
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {processing ? (
          <CircularProgress />
        ) : (
          <div className="mt-5 text-center">
            <button
              type="submit"
              disabled={!stripe || success}
              className="btn btn-primary"
            >
              Pay
            </button>
          </div>
        )}
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default CheckoutForm;
