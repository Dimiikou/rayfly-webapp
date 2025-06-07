import Header from "./Components/header.tsx";
import Hero from "./Components/hero.tsx";
import AboutSection from "./Components/about-section.tsx";
import ServicesSection from "./Components/services-section.tsx";
import WingsSection from "./Components/wings-section.tsx";
import Footer from "./Components/footer.tsx";

function App() {
    return (
        <>
            <Header/>
            <main className="flex flex-col gap-15 pl-32 pr-32 pt-10 pb-10">
                <Hero />
                <AboutSection />
                <ServicesSection />
                <WingsSection />
                <Footer />
            </main>
        </>
    )
}

export default App
