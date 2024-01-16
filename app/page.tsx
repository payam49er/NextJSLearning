import homeImg from "public/images/home.jpg";
import Hero from "@/components/reusable/hero";

export default function Home() {
  return (
    <main>
      <Hero
        imageData={homeImg}
        imageAlt="Car factory"
        title="Reusable component"
      />
    </main>
  );
}
