import { EyeOff, Eye } from "lucide-react";
import { cn } from "../../libs/utils";
import { Dispatch, SetStateAction, useState } from "react";
import { DetailedHTMLProps, InputHTMLAttributes } from "react";
interface PasswordInputProp
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  setValue: Dispatch<SetStateAction<string>>;
}

export default function PasswordInput({
  className,
  placeholder,
  value,
  setValue,
  ...props
}: PasswordInputProp) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          "w-full p-3 outline-none border rounded-md hover:border-black focus:border-black",
          className
        )}
        {...props}
      />
      {showPassword ? (
        <Eye
          className="absolute top-3 right-2"
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <EyeOff
          className="absolute top-3 right-2"
          onClick={() => setShowPassword(true)}
        />
      )}
    </div>
  );
}
