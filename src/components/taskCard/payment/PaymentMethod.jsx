export default function PaymentMethod({ paymentMethod }) {
  return (
    <p className="text-end mt-5 font-semibold text-red-400 ">
      {paymentMethod}
    </p>
  );
}
