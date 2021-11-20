import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router";
import useAxios from "../../../hooks/useAxios";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51Jw6ifG7HrHcr2IyP64GByXr2qFejyfDiKZpyLn3GeuTzc6nZNiyPp2jAkk6W8rPNxO4mYhRm16rFgiudEFCATAX00fhfo4vlH"
);

const Pay = () => {
  const { client } = useAxios();
  const { paymentId } = useParams();
  const [order, setOrder] = useState({});
  useEffect(() => {
    client.get(`/payments/${paymentId}`).then((response) => {
      setOrder(response.data);
    });
  }, [paymentId]);
  return (
    <div>
      <h4 className="text-center">car selected :{order.model}</h4>
      <h4 className="text-center">Pay : ${order.price}</h4>
      {order?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm order={order} />
        </Elements>
      )}
    </div>
  );
};

export default Pay;
