import Link from "next/link";

const link_class = "text-blue-500 hover:text-blue-800";

const Navbar = () => {
  return (
    <div className="flex bg-transparent p-4">
      <ul className="flex items-center justify-items-center space-x-4">
        <li>
          <Link href="/" className={link_class}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/hooks" className={link_class}>
            Hooks
          </Link>
        </li>
        <li>
          <Link href="/events" className={link_class}>
            Events
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
