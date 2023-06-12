import { AiOutlinePhone } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center lg:justify-between gap-5 p-4 shadow text-slate-400">
      <div>
        <p>
          support@example.com
        </p>
      </div>
      <div className="flex justify-between gap-5">
        <div className="flex justify-between gap-1"><BiTimer className="mt-1"/><span> Mn-Fr: 8am - 8pm, St-Sn: 8am - 4pm, St-Sn: 8am - 4pm</span></div>
        <div className="flex justify-between gap-1">
          <AiOutlinePhone className="mt-1"/>
          <div>+8801637131835</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
