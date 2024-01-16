import Link from "next/link";

const link_class = "text-blue-500 space-x-4 text-3xl";

const Navbar = () => {
  return (
    <div className="flex bg-transparent p-4 w-full absolute text-blue-500 z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl hover:text-blue-800">
          Home
        </Link>
        <div className={link_class}>
          <Link href="/hooks" className="hover:text-blue-800">
            Hooks
          </Link>
          <Link href="/events" className="hover:text-blue-800">
            Events
          </Link>
          <Link href={"/snippets"} className="hover:text-blue-800">
            Snippets
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
