import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njk1MzgyNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Business team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/90"></div>
          </div>

          <div className="relative px-8 py-16 sm:px-12 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-4xl text-white mb-4 max-w-3xl mx-auto">
              Ready to Optimize Your Manufacturing Operations?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of manufacturers who have transformed their operations with our 
              comprehensive software solutions. Schedule a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-colors">
                Request a Demo
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
