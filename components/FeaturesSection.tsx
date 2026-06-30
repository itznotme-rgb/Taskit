'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  Zap,
  Shield,
  MapPin,
  CreditCard,
  Star,
  AlertCircle,
  Lock,
} from 'lucide-react';

const featureData = [
  { icon: CheckCircle, label: 'Hire by Time', desc: 'Book for 30min-1 day' },
  { icon: Zap, label: 'Assign Multiple Tasks', desc: 'Add tasks on the fly' },
  { icon: Shield, label: 'Verified Taskers', desc: 'Background checked' },
  { icon: MapPin, label: 'Live GPS Tracking', desc: 'Real-time location' },
  { icon: CreditCard, label: 'Secure Payments', desc: 'All transactions safe' },
  { icon: Star, label: 'Ratings & Reviews', desc: 'Transparent feedback' },
  { icon: AlertCircle, label: 'Emergency SOS', desc: 'Immediate support' },
  { icon: Lock, label: 'Real-Time Notifications', desc: 'Stay updated always' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">Taskit?</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the perfect blend of convenience, trust, and flexibility.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featureData.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glassmorphic p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="mb-4">
                  <Icon
                    size={32}
                    className="text-primary group-hover:text-secondary transition-colors"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.label}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
