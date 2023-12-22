import PostList from "@/components/postcard/postlist";
import Link from "next/link";
import Image from "next/image";
import homeImg from "public/images/home.jpg";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row align-middle justify-center absolute -z-10 inset-0">
        <Image src={homeImg} alt="home" fill style={{ objectFit: "cover" }} />
      </div>
    </main>
  );
}
