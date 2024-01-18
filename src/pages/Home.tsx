import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Blogs from "../components/Blogs";
import Example from "../components/Accordion";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Hero />
      <Offers />
      <Blogs />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="py-6 flex flex-col gap-10"
      >
        <h3
          className="text-center text-4xl font-bold"
          style={{ textShadow: "5px 10px lightgrey" }}
        >
          Create An Account On Our Dime
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-7">
          <Card className="justify-center shadow-none border hover:translate-y-0 hover:border-black hover:border-3">
            <p className="text-2xl font-bold ">Basic</p>
            <p>
              Get Started with the simplest and cheapest plan available.
              Register for free, observe your portfolio for free.
            </p>
            <ul className="px-4 flex flex-col gap-4">
              <li>Basic Analytics Tools</li>
              <li>Timezone Tracking</li>
              <li>Basic Maintenance</li>
            </ul>
            <Button className="w-32 self-end rounded-full bg-black text-white hover:bg-slate-500">
              Go
            </Button>
          </Card>
          <Card className="justify-center shadow-none border hover:translate-y-0 hover:border-black hover:border-3">
            <p className="text-2xl font-bold ">Premium</p>
            <p>
              Our most popular plan. Gain access to the most important things.
            </p>
            <ul className="px-4 flex flex-col gap-4">
              <li>Basic Analytics Tools</li>
              <li>Advanced Analytics Tools</li>
              <li>Timezone Tracking</li>
              <li>Premium Maintenance</li>
              <li>Personal Finance Adviser</li>
              <li>New Stock Promotion</li>
            </ul>
            <Button className="w-32 self-end rounded-full bg-black text-white hover:bg-slate-500">
              Go
            </Button>
          </Card>
          <Card className="justify-center shadow-none border hover:translate-y-0 hover:border-black hover:border-3">
            <p className="text-2xl font-bold ">Golden</p>
            <p>
              For the most distinguished. Gain access to all of our services,
              insights and in-house tools. This plan is for those who want to
              rule the world and be a part of the elites or are already a part
              of the elites
            </p>
            <ul className="px-4 flex flex-col gap-4">
              <li>Basic Analytics Tools</li>
              <li>Advanced Analytics Tools</li>
              <li>Timezone Tracking</li>
              <li>Premium Maintenance</li>
              <li>Personal Finance Adviser</li>
              <li>New Stock Promotion</li>
            </ul>
            <Button className="w-32 self-end rounded-full bg-black text-white hover:bg-slate-500">
              Go
            </Button>
          </Card>
        </div>
      </motion.div>

      <div className="py-10 flex justify-evenly flex-col lg:flex-row px-10">
        <h3
          className="text-4xl font-bold grow"
          style={{ textShadow: "5px 10px lightgrey" }}
        >
          Frequently Asked Questions
        </h3>

        <Example />
      </div>

      <Footer />
    </motion.div>
  );
}
