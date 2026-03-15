import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductGallery } from './components/ProductGallery';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ProductGallery />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
