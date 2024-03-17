import React from "react";
import { VStack, Image, Text, Button } from "@chakra-ui/react";
import axios from "axios";
function Card({ amount }) {
  const checkoutHandler = async () => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {});
    // console.log(data);

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: 1000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
      currency: "INR",
      name: "Dial2shop",
      description: "Dial2shop Website",
      image: "https://avatars.githubusercontent.com/u/147711117?v=4",
      order_id: order.id, //This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
      callback_url: "http://localhost:4000/api/paymentverification",
      // handler: function (response) {
      //   alert(response.razorpay_payment_id);
      // },
      prefill: {
        name: "Dial2shop",
        email: "dial2shop@gmail.com",
        contact: "7717589527",
      },
      notes: {
        address: "note value",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    // document.getElementById("razorGateway").onclick = function (e) {
    razor.open();
    // e.preventDefault();
    // };
  };
  return (
    <VStack>
      <Image
        src="https://m.media-amazon.com/images/I/71-1Shs1erL._SY695_.jpg"
        boxSize={"64"}
        objectFit="cover"
      />
      <Text>500</Text>
      <Button onClick={() => checkoutHandler(amount)}>Buy</Button>
    </VStack>
  );
}

export default Card;
