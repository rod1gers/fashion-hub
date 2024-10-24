/** @format */

import { Link } from "react-router-dom";
import { IButton } from "../../types/IApp";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Button: React.FC<IButton> = ({
  name,
  url,
  target,
  bgColor,
  className,
}) => {
  return (
    <Link
      to={url}
      target={target}
      className={`flex rounded-2xl px-5 py-2 w-fit hover:cursor-pointer hover:underline ${className}`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="text-white text-sm">{name}</div>
      <div className="flex flex-col justify-center ml-3">
        {name.includes("Go back") ? (
          <BsArrowLeft color="white" />
        ) : (
          <BsArrowRight color="white" />
        )}
      </div>
    </Link>
  );
};

export default Button;
