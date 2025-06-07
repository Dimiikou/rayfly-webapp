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

/**
 * Copyright 2025 León Aissa
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */