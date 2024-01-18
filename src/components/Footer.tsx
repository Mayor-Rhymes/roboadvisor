export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row gap-20 p-10 justify-evenly bg-black text-white cursor-pointer">
      <h4 className="text-xl font-extrabold">WealthHelp</h4>

      <div className="flex flex-col gap-5">
        <p className="font-semibold">Investing</p>
        <p>Stock</p>
        <p>Bonds</p>
        <p>Forex</p>
        <p>Crypto</p>
        <p>Pricing</p>
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-semibold">About</p>
        <p>Reviews</p>
        <p>Blogs</p>
        <p>Overview</p>
        <p>Career</p>
        <p>Pricing</p>
      </div>
    </footer>
  );
}
