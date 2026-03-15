import image1 from '../assets/WhatsApp Image 2026-03-15 at 9.09.22 PM.jpeg';
import image2 from '../assets/WhatsApp Image 2026-03-15 at 9.09.22 PM (1).jpeg';
import image3 from '../assets/WhatsApp Image 2026-03-15 at 9.09.22 PM (2).jpeg';
import image4 from '../assets/WhatsApp Image 2026-03-15 at 9.09.22 PM (3).jpeg';
import image5 from '../assets/WhatsApp Image 2026-03-15 at 9.09.23 PM.jpeg';
import image6 from '../assets/WhatsApp Image 2026-03-15 at 9.09.23 PM (1).jpeg';
import image7 from '../assets/WhatsApp Image 2026-03-15 at 9.09.23 PM (2).jpeg';

export function ProductGallery() {
  const images = [
    { src: image1, alt: 'Mint Water product bottle close-up', caption: 'Mint Water in Action' },
    { src: image2, alt: 'Mint Water product range bottles', caption: 'Product Range' },
    { src: image3, alt: 'Mint Water and cricket gear on the field', caption: 'Sports Hydration' },
    { src: image4, alt: 'Mint Water bottles on cricket ground', caption: 'Match Day Refreshment' },
    { src: image5, alt: 'Mint Water on a table setting', caption: 'Everyday Purity' },
    { src: image6, alt: 'Mint Water outdoor campaign shot', caption: 'Stay Fresh, Stay Hydrated' },
    { src: image7, alt: 'Mint Water lifestyle shot', caption: 'Pure Water, Pure Vibe' },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Our Presence
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by athletes, events, and communities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 flex items-center justify-center"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-[300px] object-contain p-4 transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-lg p-6 w-full">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
