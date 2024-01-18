import { Link, useNavigate } from "react-router-dom";
import LinkItem from "./ui/LinkItem";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { userStore } from "../store/userStore";
import Button from "./ui/Button";
import { cn } from "../libs/utils";
import { forwardRef, useState } from "react";

const MotionX = motion(X);
const MotionMenu = motion(Menu);

export default function Navbar() {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const navigate = useNavigate();
  const { user, logout } = userStore((state) => state);
  console.log(user);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "flex justify-between lg:justify-normal gap-5 h-[80px] items-center px-6 border-b-4 "
        )}
      >
        <Link to="/" className="text-xl lg:grow font-bold">
          WealthHelp
        </Link>

        <ul className="hidden lg:flex grow-[2] gap-10">
          <LinkItem href="/cash" className="hover:bg-black hover:text-white">
            Cash
          </LinkItem>
          <LinkItem href="/bond" className="hover:bg-black hover:text-white">
            Bonds
          </LinkItem>

          <LinkItem href="/products" className="hover:bg-black hover:text-white">
            Products
          </LinkItem>
          <LinkItem href="/risktolerance" className="hover:bg-black hover:text-white">
            Check Risk Tolerance
          </LinkItem>
        </ul>

        <ul className="hidden lg:flex grow gap-10 items-center">
          {user ? (
            <>
              <p>Hi, {user?.username}</p>
              <Button
                onClick={handleLogout}
                className="bg-black hover:bg-black text-white "
              >
                Logout
              </Button>
            </>
          ) : (
            <LinkItem href="/login" className="bg-black text-white ">
              Login/Signup
            </LinkItem>
          )}

          {/* {(session && session?.user) && <SignOutButton />} */}
        </ul>
        <AnimatePresence>
          {menuCollapse ? (
            <MotionX
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden"
              onClick={() => setMenuCollapse(false)}
            />
          ) : (
            <MotionMenu
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden"
              onClick={() => setMenuCollapse(true)}
            />
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {menuCollapse && (
          <motion.ul
            key="mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "inherit" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex lg:hidden flex-col gap-4 justify-center py-4"
          >
            <LinkItem
              href="/cash"
              className="rounded-none hover:bg-black hover:text-white"
            >
              Cash
            </LinkItem>
            <LinkItem
              href="/bond"
              className="rounded-none hover:bg-black hover:text-white"
            >
              Bonds
            </LinkItem>

            <LinkItem
              href="/products"
              className="rounded-none hover:bg-black hover:text-white"
            >
              Products
            </LinkItem>
            <LinkItem
              href="/risktolerance"
              className="rounded-none hover:bg-black hover:text-white"
            >
              Check Risk Tolerance
            </LinkItem>
            {user && (
              <Button
                onClick={handleLogout}
                className="rounded-none bg-black hover:bg-black text-white "
              >
                Logout
              </Button>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}
