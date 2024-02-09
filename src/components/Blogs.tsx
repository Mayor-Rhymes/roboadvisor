import { Link } from "react-router-dom";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <motion.div
      initial={{ opacity:0, scale: 0.5, rotate: 90, x: -100 }}
      whileInView={{scale: 1, rotate: 0, x: 0, opacity: 1}}
      viewport={{once: true}}
      transition={{duration: .5, delay: .5}}
      
      className="py-10 flex flex-col gap-20"
    >
      <h3
        className="text-center text-4xl font-bold"
      >
        Do you like Blogs? We have Financial Blogs Authored By Highly Qualified
        People
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-10">
        <Card className="shadow-xl lg:col-span-2 bg-black text-white">
          <p className="font-serif text-xl">
            You are losing money by doing nothing!
          </p>

          <p>Author: Killung Hector</p>

          <p>Finances, Banking</p>

          <Button className="w-32 p-3 bg-white text-black hover:bg-slate-400">
            Read
          </Button>
        </Card>
        <Card className="shadow-xl bg-yellow-400">
          <p className="font-serif text-xl">Steps to a successful business</p>

          <p>Author: Velsing Hunter</p>

          <p>Finances, Business, Investment</p>

          <Button className="w-32 p-3 bg-green-300 hover:bg-green-500 text-black">
            Read
          </Button>
        </Card>
        <Card className="shadow-xl bg-purple-600 text-white">
          <p className="font-serif text-xl">Steps to a successful business</p>

          <p>Author: Velsing Hunter</p>

          <p>Finances, Business, Investment</p>

          <Button className="w-32 p-3 bg-pink-600 text-white hover:bg-pink-900">
            Read
          </Button>
        </Card>
        <Card className="shadow-xl">
          <p className="font-serif text-xl">Steps to a successful business</p>

          <p>Author: Velsing Hunter</p>

          <p>Finances, Business, Investment</p>

          <Button className="w-32 p-3">Read</Button>
        </Card>
      </div>

      <div className="flex gap-4 justify-center">
        <Link to="/" className="font-semibold hover:text-blue-400">
          See more Blogs
        </Link>
        <ChevronRight color="blue" />
      </div>
    </motion.div>
  );
}
