import { motion } from "framer-motion";
import Button from "./ui/Button";
import Card from "./ui/Card";

export default function Offers() {
  return (
    <motion.div initial={{scale: 0, translateX: -100}} whileInView={{scale: 1, translateX: 1}} className="py-5 px-4 flex flex-col gap-10">
      <h4 className="text-3xl font-bold">Our Offers</h4>

      <div className="flex flex-col lg:flex-row gap-10">
        <Card className="bg-pink-500 py-7 text-white ">
          <p className="text-xl font-semibold ">Money Grower</p>

          <p className="text-sm">
            The money grower premium strategy offer provides you a personalized
            financial professional to help you with all your business endeavours
            and business investments.
          </p>

          <Button className="w-40 self-end bg-purple-300 text-black hover:bg-purple-500 py-2 px-1">
            Explore
          </Button>
        </Card>
        <Card className="bg-green-500 ">
          <p className="text-xl font-semibold ">Money Saver</p>

          <p className="text-sm">
            The money saver plan is for those who want to make maximum profit
            from their salaries without having to invest much. Don't like to
            take risks? This plan is for you!
          </p>
          <Button className="w-40 self-end bg-yellow-300 text-black hover:bg-yellow-500 py-2 px-1">
            Explore
          </Button>
        </Card>
        <Card className="bg-black text-white">
          <p className="text-xl font-semibold ">Stock Advice</p>

          <p className="text-sm">
            The stock advice premium strategy is the perfect strategy for
            everyone. Want to know how to game the stock market and gain maximum
            profit? This plan might be for you. Prices may differ depending on
            bank account.
          </p>
          <Button className="w-40 self-end bg-white text-black hover:bg-slate-200 py-2 px-1">
            Explore
          </Button>
        </Card>
      </div>
    </motion.div>
  );
}
