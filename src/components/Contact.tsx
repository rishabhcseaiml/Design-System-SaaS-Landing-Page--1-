import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-white to-cyan-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            Ready to order? Contact us for retailers, wholesalers, and custom orders
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Phone</h3>
                <p className="text-gray-600">Contact us for bulk orders</p>
                <a href="tel:+1234567890" className="text-cyan-600 hover:text-cyan-700">
                  +123 456 7890
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Email</h3>
                <p className="text-gray-600">Send us your inquiries</p>
                <a href="mailto:info@mintwater.com" className="text-cyan-600 hover:text-cyan-700">
                  info@mintwater.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Instagram</h3>
                <p className="text-gray-600">Follow us for updates</p>
                <a 
                  href="https://instagram.com/mintwater_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-600 hover:text-cyan-700"
                >
                  @mintwater_
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Location</h3>
                <p className="text-gray-600">
                  Available for retailers, wholesalers<br />
                  & bulk orders nationwide
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl mb-3">Ready to Order?</h3>
            <p className="mb-6 text-cyan-50">
              Contact us today for competitive pricing on bulk orders and custom branding options
            </p>
            <a 
              href="tel:+1234567890"
              className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
