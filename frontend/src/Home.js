import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

function Home() {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });
    // console.log(data);

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
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
    <Box>
      <Stack
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={"https://m.media-amazon.com/images/I/71-1Shs1erL._SY695_.jpg"}
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={5000}
          img={
            "https://m.media-amazon.com/images/I/41PaaZS6l4L._SX300_SY300_QL70_FMwebp_.jpg"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
}

export default Home;
