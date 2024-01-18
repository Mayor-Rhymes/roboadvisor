import Button from "../components/ui/Button";
import Footer from "../components/Footer";
import bonds from "../assets/bonds.jpg";
import BondHero from "../components/bond/BondHero";

export default function Bond() {
  return (
    <div>
      <BondHero />
      <div className="flex flex-col lg:flex-row gap-10 py-7 bg-cool-touch items-center px-4">
        <img src={bonds} className="h-[800px] lg:w-2/4" alt="savings" />

        <div className="flex flex-col gap-4 px-4 grow bg-cover">
          <p className="text-3xl">Our Bonds are a true investment</p>
          <p>Gain access to all kinds</p>

          <ul className="flex flex-col gap-6 font-bold">
            <li>Short Term Treasuries</li>
            <li>Corporate Bonds</li>
            <li>Floating Rate Bonds</li>
            <li>Long Term Treasuries</li>
          </ul>

          <Button className="w-40">Get Started</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
