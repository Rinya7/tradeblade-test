import Header from "@/components/00_Header";
import Hero from "@/components/01_Hero";
import Numbers from "@/components/02_Numbers";
import Deals from "@/components/03_Deals";
import Prices from "@/components/04_Prices";

import Footer from "@/components/05_Footer";

export default function Home() {
  return (
    <main>
      <Header />
       
      
        <Hero />
      
      <section id="numbers">
        <Numbers />
      </section>
      <section id="deals">
        <Deals />
      </section>
      <section id="prices">
        <Prices />
      </section>
        <Footer />
       
    </main>
  );
}
