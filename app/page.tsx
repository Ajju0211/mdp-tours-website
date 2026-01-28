import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Destinations } from "@/components/destinations";
import { Services } from "@/components/services";
import { QueryForm } from "@/components/query-form";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";

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
