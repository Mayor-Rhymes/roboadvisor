import { cn } from "../../libs/utils";
import { HTMLAttributes } from "react"


type CardProps = HTMLAttributes<HTMLDivElement>;



export default function Card({className, children, ...props}: CardProps){

    return (
        <div className={cn("flex flex-col gap-6 py-7 shadow-md px-3 rounded-2xl cursor-pointer hover:-translate-y-4 hover:shadow-2xl transition-all duration-250 delay-250", className)} {...props}>
            {children}
        </div>
    )
}