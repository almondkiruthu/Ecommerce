import Stripe from "stripe";
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

const handler = async (req, res) => {
  if (req.method === "POST") {
    // Create Checkout Sessions
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["US", "CA"],
        },
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.Title,
                images: [item.Image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
          };
        }),
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};

export default handler;
