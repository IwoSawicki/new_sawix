import Image from "next/image";
import Link from "next/link";

import Logo from "../public/Sawix-Logo.svg";

export default function Header() {
  return (
    <div className="px-6 flex text-white justify-between px-2">
      <div>
        <Link href="/">
          <Image src={Logo} alt="Seitenlogo"></Image>
        </Link>
      </div>
      <div>Menu</div>
    </div>
  );
}
