import { Link } from "react-router-dom";
import { IButton } from "../types/IApp";
import { BsArrowRight } from "react-icons/bs";


const BlackButton: React.FC<IButton> = ({name, url, className}) => {
    return (
        <div className="flex bg-black rounded-2xl px-5 py-2 w-fit">
            <Link
                to={url}
                className={` text-white text-sm hover:underline ${className}`}
            >
                {name}
            </Link>
            <div className="flex flex-col justify-center ml-3">
                <BsArrowRight color="white" /> 
            </div>
        </div>
    )
}

export default BlackButton;
