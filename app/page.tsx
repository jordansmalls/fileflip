import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="pb-8 space-y-16">
      <Hero />
      <Dropzone />
      <Footer />
    </div>
  );
}
