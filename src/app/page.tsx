import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { LoadingScreen } from "@/components/layout/loading-screen";
import { BackToTop } from "@/components/layout/back-to-top";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Profile } from "@/components/sections/profile";
import { Experience } from "@/components/sections/experience";
import { Events } from "@/components/sections/events";
import { International } from "@/components/sections/international";
import { Skills } from "@/components/sections/skills";
import { Metrics } from "@/components/sections/metrics";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Profile />
        <Experience />
        <Events />
        <International />
        <Skills />
        <Metrics />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
