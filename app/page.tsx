import { Navbar } from "@/components/home/navbar";
import { Hero } from "@/components/home/hero";
import { Destinations } from "@/components/home/destinations";
import { Services } from "@/components/home/services";
import { QueryForm } from "@/components/home/query-form";
import { Footer } from "@/components/home/footer";
import { Testimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Testimonials />
      <QueryForm />
      <Footer />
    </main>
  );
}
