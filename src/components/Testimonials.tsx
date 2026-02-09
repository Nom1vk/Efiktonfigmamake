import { ArrowRight, TrendingUp, Clock, DollarSign } from 'lucide-react';

const testimonials = [
  {
    quote: "ManufactureSoft transformed our production planning process. We've seen a 40% reduction in downtime and our inventory accuracy has improved dramatically.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Precision AutoParts Inc.",
    industry: "Automotive Manufacturing",
    metrics: [
      { icon: TrendingUp, label: "40% less downtime", color: "text-green-600" },
      { icon: Clock, label: "30% faster delivery", color: "text-blue-600" },
    ],
  },
  {
    quote: "The real-time visibility across our supply chain has been a game-changer. We can now anticipate issues before they become problems and keep our customers informed.",
    author: "Michael Rodriguez",
    role: "Supply Chain Director",
    company: "TechComponents Global",
    industry: "Electronics Manufacturing",
    metrics: [
      { icon: DollarSign, label: "$2M cost savings", color: "text-green-600" },
      { icon: TrendingUp, label: "25% efficiency gain", color: "text-blue-600" },
    ],
  },
  {
    quote: "Implementing this solution was seamless, and the support team has been exceptional. Our quality metrics have never been better, and compliance reporting is now automated.",
    author: "Jennifer Park",
    role: "Quality Assurance Manager",
    company: "MedDevice Solutions",
    industry: "Medical Device Manufacturing",
    metrics: [
      { icon: TrendingUp, label: "99.8% quality rate", color: "text-green-600" },
      { icon: Clock, label: "80% faster reporting", color: "text-blue-600" },
    ],
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm mb-4">
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600">
            See how manufacturers across industries are achieving operational excellence 
            with our solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Company Logo Placeholder */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">
                  {testimonial.company.charAt(0)}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>

              {/* Metrics */}
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                {testimonial.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    <span className="text-sm font-semibold text-gray-900">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Author Info */}
              <div className="mb-4">
                <div className="text-gray-900 font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
                <div className="text-sm text-gray-600">{testimonial.company}</div>
                <div className="text-xs text-gray-500 mt-1">{testimonial.industry}</div>
              </div>

              {/* Case Study Link */}
              <button className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-sm font-semibold mt-auto">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* View All Case Studies */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
