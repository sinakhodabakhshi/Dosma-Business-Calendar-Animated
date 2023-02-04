export default function PaymentMethod({ paymentMethod }) {
  return (
    <motion.p className="text-end mt-5 font-semibold text-red-400 ">
      {paymentMethod}
    </motion.p>
  );
}
