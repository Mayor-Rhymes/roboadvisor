import CashHero from "../components/cash/CashHero";
import savingsImage from "../assets/savings-image.jpg";
import Button from "../components/ui/Button";
import Footer from "../components/Footer";

export default function Cash() {
  return (
    <div>
      <CashHero />
      <div className="flex flex-col lg:flex-row gap-10 py-7 bg-cool-touch items-center px-4">
        <img src={savingsImage} className="h-[800px] lg:w-2/4" alt="savings" />

        <div className="flex flex-col gap-4 px-4 grow bg-cover">
          <p className="text-3xl">A magical savings account</p>
          <p>Not a bank but much much better than one</p>

          <ul className="flex flex-col gap-6 font-bold">
            <li>Create account at no cost. Yes really.</li>
            <li>Unlimited transfers and withdrawals</li>
            <li>Insurance? Easy Peazy!</li>
            <li>We even have different types of accounts</li>
          </ul>

          <Button className="w-40">Get Started</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
