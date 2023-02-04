import { motion } from "framer-motion";

export default function PaymentMethod({ paymentMethod }) {
  return (
    <motion.p
      initial={{
        x: 5,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      className="text-end mt-5 font-semibold text-red-400 "
    >
      {paymentMethod}
    </motion.p>
  );
}
