import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle } from 'lucide-react';

const features = [
  'Real-time production monitoring and analytics',
  'Seamless ERP integration capabilities',
  'Cloud-based accessibility from anywhere',
  'Customizable dashboards and reporting',
  'Automated compliance documentation',
  'Mobile-friendly responsive design',
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2OTQ5NDU1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Warehouse inventory management"
              className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
              Platform Features
            </div>
            
            <h2 className="text-3xl sm:text-4xl text-gray-900">
              Built for Modern Manufacturing
            </h2>
            
            <p className="text-lg text-gray-600">
              Our platform is engineered to handle the complexities of today's manufacturing 
              environment while remaining intuitive and easy to use.
            </p>

            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
