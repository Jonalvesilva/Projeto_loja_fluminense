import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

export default function ProfileButtons() {
  return (
    <div className="hidden lg:flex items-center gap-x-3">
      <IoSearchOutline size={20} className="text-white" />
      <IoMdCart size={20} className="text-white" />
      <FaUser size={20} className="text-white" />
    </div>
  );
}
