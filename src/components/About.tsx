import { Droplet, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            About Mint Water
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Premium packaged drinking water available for retailers, wholesalers, 
            bulk orders, and customize water bottles for your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Droplet className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Pure & Fresh</h3>
            <p className="text-gray-600">
              100% pure drinking water, naturally filtered for the best taste and quality.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl mb-3 text-gray-900">Premium Quality</h3>
            <p className="text-gray-600">
              Highest standards of bottling and packaging to ensure freshness with every sip.
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl mb-3 text-gray-900">Custom Branding</h3>
            <p className="text-gray-600">
              Customize water bottles with your brand for events, promotions, and businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
