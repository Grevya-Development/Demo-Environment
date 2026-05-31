import { DialogProvider } from "@/components/dialog-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { ProductsDashboard } from "@/components/sections/products-dashboard";
import { Launchpad } from "@/components/sections/launchpad";
import { Solutions } from "@/components/sections/solutions";
import { Roadmap } from "@/components/sections/roadmap";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <DialogProvider>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <ProductsDashboard />
        <Launchpad />
        <Solutions />
        <Roadmap />
        <About />
        <Contact />
      </main>
      <Footer />
    </DialogProvider>
  );
}
