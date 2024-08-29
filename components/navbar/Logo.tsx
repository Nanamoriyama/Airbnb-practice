import Link from "next/link";

import { Button } from "../ui/button";
import { FaAirbnb } from "react-icons/fa";

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaAirbnb className="w-6 h-6 text-white" />
      </Link>
    </Button>
  );
}
export default Logo;
