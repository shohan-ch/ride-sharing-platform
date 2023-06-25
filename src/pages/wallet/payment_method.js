import PaymentMethodView from "@/components/Payment/PaymentMethod/PaymentMethodView";

const payment_method = () => {
  return (
    <>
      <PaymentMethodView backLink={"/wallet"} />
    </>
  );
};

export default payment_method;
