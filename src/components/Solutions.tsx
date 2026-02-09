import { Package, ClipboardList, BarChart3, Cog, TrendingUp, Users } from 'lucide-react';

const solutions = [
  {
    icon: ClipboardList,
    title: 'Production Planning',
    description: 'Advanced scheduling and capacity planning tools to optimize your production workflow and meet delivery deadlines.',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Real-time tracking and control of raw materials, work-in-progress, and finished goods across multiple locations.',
  },
  {
    icon: BarChart3,
    title: 'Supply Chain Visibility',
    description: 'End-to-end visibility of your supply chain with predictive analytics and demand forecasting.',
  },
  {
    icon: Cog,
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to reduce errors and increase operational efficiency.',
  },
  {
    icon: TrendingUp,
    title: 'Quality Management',
    description: 'Comprehensive quality control systems to ensure compliance and maintain product excellence.',
  },
  {
    icon: Users,
    title: 'Workforce Management',
    description: 'Optimize labor allocation, track productivity, and manage shift schedules effectively.',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl text-gray-900 mb-4">
            Comprehensive Manufacturing Solutions
          </h2>
          <p className="text-lg text-gray-600">
            From planning to execution, our integrated suite of tools empowers manufacturers 
            to achieve operational excellence and sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <solution.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
