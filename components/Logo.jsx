import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Logo({ isFooter = false, size = "2x" }) {
  return (
    <Link href="/">
      <div>
        <FontAwesomeIcon
          icon={faCode}
          size={isFooter ? "4x" : "2x"}
          className="text-title-active-static"
        />
      </div>
    </Link>
  );
}
