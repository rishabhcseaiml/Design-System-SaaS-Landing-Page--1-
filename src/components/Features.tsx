import { Package, Truck, ShoppingCart, Sparkles } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Retail Orders',
      description: 'Perfect for retail stores looking to stock premium bottled water.'
    },
    {
      icon: Package,
      title: 'Bulk Orders',
      description: 'Competitive pricing for large volume orders and wholesale distribution.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Reliable delivery service to ensure your orders arrive on time.'
    },
    {
      icon: Sparkles,
      title: 'Custom Branding',
      description: 'Personalize bottles with your logo for events and corporate needs.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-cyan-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Why Choose Mint Water?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for premium packaged drinking water
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
