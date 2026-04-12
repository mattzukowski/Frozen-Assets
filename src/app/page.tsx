import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Champions from "@/components/Champions";
import Rules from "@/components/Rules";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Champions />
        <Rules />
      </main>
      <Footer />
    </>
  );
}
