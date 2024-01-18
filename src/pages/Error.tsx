import notFound from "../assets/notfound.jpg";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <img src={notFound} alt="not found" className="w-[500px]" />
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  );
}
