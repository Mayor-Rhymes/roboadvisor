import { motion } from "framer-motion";
import Button from "../ui/Button";
// import heroImage from "./hero-image.jpg";

export default function CashHero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex relative items-center justify-center flex-col gap-5 py-20 bg-hero-image bg-cover h-[600px]"
    >
      <div className="absolute w-full h-full bg-black opacity-20 z-10"></div>
      <h1 className="text-3xl font-bold relative z-20">Cash</h1>

      <p className="font-extrabold text-white text-4xl text-center relative z-20">
        Create A Free Cash Account With Everything Available
      </p>

      <Button className="relative z-20">Create An Account</Button>
    </motion.div>
  );
}
