import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

interface Props {
  search: {
    setShowSearchDiv: (showDivSearch: boolean) => void;
    showSearchDiv: boolean;
  };
}

export default function ProfileButtons({ search }: Props) {
  const { setShowSearchDiv, showSearchDiv } = search;
  return (
    <div className="hidden items-center gap-x-3 lg:flex">
      <IoSearchOutline
        size={20}
        className="cursor-pointer text-white"
        onClick={() => setShowSearchDiv(!showSearchDiv)}
      />
      <IoMdCart size={20} className="text-white" />
      <FaUser size={20} className="text-white" />
    </div>
  );
}
