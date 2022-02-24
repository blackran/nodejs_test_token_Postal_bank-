const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
var cors = require("cors");

// New app using express module
const app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", async function (req, res) {
  const dataPost = {
    amount: 990,
    currency: "EUR",
    orderId: "myOrderId-999999",
    customer: {
      email: "sample@example.com",
    },
  };

  const { data } = await axios.post(
    `https://api.scelliuspaiement.labanquepostale.fr/api-payment/V4/Charge/CreatePayment`,
    dataPost,
    {
      headers: {
        Authorization: `Basic NDIyMjk3NDQ6dGVzdHBhc3N3b3JkX0l2aEdDMzFGYjdtNDhtTm1nZG1SU0dhNVJrR3k1bmMwRlhjdlIxdUtvZzhNcw==`,
        "Content-Type": "application/json",
      },
    }
  );
  res.send(data);
});

app.listen(4000, function () {
  console.log("server is running on port 4000");
});
