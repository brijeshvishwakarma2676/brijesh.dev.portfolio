import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsappIcon } from '../ui/BrandIcons';
import { SectionHeading, FadeIn } from '../ui/SectionHeading';
import { Check, Settings, Sparkles, Zap } from 'lucide-react';

const projectTypes = [
  { id: 'website', name: 'Custom Website', baseDays: 14, baseCost: 800, desc: 'Responsive marketing or business website' },
  { id: 'ecommerce', name: 'E-Commerce Store', baseDays: 21, baseCost: 1500, desc: 'ShopCanvas style multi-theme shop' },
  { id: 'saas', name: 'SaaS Platform', baseDays: 35, baseCost: 2500, desc: 'PointNest style scalable web app' },
  { id: 'automation', name: 'API / Automation', baseDays: 10, baseCost: 600, desc: 'Custom integrations & workflow scripts' }
];

const features = [
  { id: 'payments', name: 'Stripe Payments Integration', days: 4, cost: 250 },
  { id: 'auth', name: 'Advanced Auth / User Management', days: 3, cost: 200 },
  { id: 'cms', name: 'Content Management System (CMS)', days: 5, cost: 300 },
  { id: 'animations', name: 'Interactive Animations (Framer Motion)', days: 3, cost: 150 },
  { id: 'multitheme', name: 'Multi-Theme Customizer', days: 4, cost: 200 },
  { id: 'database', name: 'Relational Database setup', days: 5, cost: 350 }
];

export default function ProjectPlanner() {
  const [selectedType, setSelectedType] = useState('website');
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentType = projectTypes.find(t => t.id === selectedType);
  const selectedFeaturesData = features.filter(f => selectedFeatures.includes(f.id));

  const totalDays = currentType.baseDays + selectedFeaturesData.reduce((acc, f) => acc + f.days, 0);
  const totalCost = currentType.baseCost + selectedFeaturesData.reduce((acc, f) => acc + f.cost, 0);

  const handleShareOnWhatsApp = () => {
    const typeName = currentType.name;
    const featuresList = selectedFeaturesData.length > 0 
      ? selectedFeaturesData.map(f => `  • ${f.name}`).join('%0A')
      : '  • None selected';
    const message = `Hello Brijesh,%0A%0AI just built a project configuration on your website planner:%0A%0A*Project Type:* ${typeName}%0A*Selected Features:*%0A${featuresList}%0A%0A*Estimated Duration:* ~${totalDays} Days%0A*Estimated Base Cost:* $${totalCost}%0A%0AI'd like to discuss starting this project!`;
    window.open(`https://wa.me/919699642659?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-24 bg-gray-50/30 dark:bg-gray-900/30 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Planner"
          title="Interactive Project Planner"
          description="Configure your business requirements, preview estimated timescales, and directly discuss your setup on WhatsApp."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Planner inputs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Select Type */}
            <FadeIn delay={0.05}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                  <Settings size={18} className="text-blue-500" />
                  1. Select Project Type
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectTypes.map((type) => {
                    const isSelected = selectedType === type.id;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? 'border-blue-500 bg-blue-50/20 dark:bg-blue-950/20 ring-1 ring-blue-500'
                            : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm text-gray-900 dark:text-white">{type.name}</span>
                          {isSelected && <Check size={16} className="text-blue-500" />}
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{type.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Step 2: Select Features */}
            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                  <Sparkles size={18} className="text-purple-500" />
                  2. Choose Add-on Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature.id);
                    return (
                      <button
                        key={feature.id}
                        onClick={() => toggleFeature(feature.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                          isSelected
                            ? 'border-purple-500 bg-purple-50/20 dark:bg-purple-950/20 ring-1 ring-purple-500'
                            : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-xs text-gray-900 dark:text-white">{feature.name}</span>
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected ? 'bg-purple-500 border-purple-500 text-white' : 'border-gray-300 dark:border-gray-700'
                          }`}>
                            {isSelected && <Check size={10} />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Estimates card */}
          <FadeIn delay={0.15} className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 overflow-hidden relative">
              {/* Corner ambient glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Live Cost & Timeline Estimate
              </span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
                Plan Summary
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Project Type</span>
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{currentType.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Addons Included</span>
                  <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{selectedFeatures.length}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Estimated Duration</span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                    <Zap size={12} />
                    ~{totalDays} Days
                  </span>
                </div>
                <div className="flex justify-between items-end pt-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">Estimated Investment</span>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">* Minimum project engagement starts from $500</span>
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    ${totalCost}
                  </span>
                </div>
              </div>

              <button
                onClick={handleShareOnWhatsApp}
                className="w-full py-3.5 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center gap-2 text-sm font-semibold shadow-lg shadow-green-500/10 hover:shadow-green-500/20 active:scale-[0.98] transition-all"
              >
                <WhatsappIcon size={18} />
                Discuss on WhatsApp
              </button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
