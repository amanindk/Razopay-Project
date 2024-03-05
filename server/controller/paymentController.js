import { instance } from "../server.js";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: Number(req.body.amount * 100),
      currency: "INR",
      // receipt: "Order_rcptid_11",
    };

    const order = await instance.orders.create(options);
    if (!order) {
      console.error(`NothiingseXIST hER   `);
    }
    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      error: "Error creating order",
    });
  }
};

export const paymentVerification = async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    success: true,
  });
};
