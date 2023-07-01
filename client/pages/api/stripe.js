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
          allowed_countries: ["KE", "UG", "TZ", "RW", "NG", "SA"],
        },
        allow_promotion_codes: true,
        shipping_options: [
          { shipping_rate: "shr_1NP5j4Ar5sgh1wyKBMi2rNRr" },
          { shipping_rate: "shr_1NP6B9Ar5sgh1wyKCbmM54bA" },
        ],
        line_items: req.body.map((item) => {
          return {
            price_data: {
              currency: "KES",
              product_data: {
                name: item.Title,
                images: [item.Image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.Price * 100,
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
            },
            quantity: item.quantity,
          };
        }),
        //Bring people to sucess or failed page
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/failed`,
      });
      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
};

export default handler;
