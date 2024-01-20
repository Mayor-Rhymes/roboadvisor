import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row gap-20 p-10 justify-evenly bg-black text-white cursor-pointer">
      <h4 className="text-xl font-extrabold">WealthHelp</h4>

      <div className="flex flex-col gap-5">
        <p className="font-semibold">Investing</p>
        <Link to="/cash">Cash</Link>
        <Link to="/bond">Bonds</Link>
        <Link to="/forex">Forex</Link>
        <Link to="/crypto">Crypto</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-semibold">About</p>
        <Link to="/reviews">Reviews</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/overview">Overview</Link>
        <Link to="career">Career</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
    </footer>
  );
}
