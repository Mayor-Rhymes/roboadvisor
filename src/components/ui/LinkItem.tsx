import { cn } from "../../libs/utils";
import { Link } from "react-router-dom";
import { HTMLAttributes } from "react";


interface LinkItemProps extends HTMLAttributes<HTMLLIElement> {
    href: string
}

export default function LinkItem({href, className, children, ...props}: LinkItemProps){

    return (
        <li className={cn("px-4 py-2 hover:bg-slate-200 rounded-md transition-all delay-100 duration-100", className)} {...props}>
          <Link to={href}>{children}</Link>
        </li>
    )
}