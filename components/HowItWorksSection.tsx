'use client';

import { motion } from 'framer-motion';
import {
  Search,
  Clock,
  MapPin,
  CheckSquare,
  CreditCard,
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Choose a Tasker Category',
    description: 'Browse through verified Taskers across different specialties.',
  },
  {
    icon: Clock,
    title: 'Select Booking Duration',
    description: 'Pick from 30 minutes, 1 hour, 3 hours, or a full day.',
  },
  {
    icon: MapPin,
    title: 'Get Matched with Nearby Tasker',
    description: 'We connect you with verified Taskers in your area.',
  },
  {
    icon: CheckSquare,
    title: 'Assign Multiple Tasks',
    description: 'Add as many legal tasks as needed during booked time.',
  },
  {
    icon: CreditCard,
    title: 'Track & Pay Securely',
    description: 'Monitor progress and complete secure payment through the app.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
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
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simple, transparent, and quick. Get started in just 5 easy steps.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          className="space-y-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 items-start group"
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <Icon className="absolute inset-0 m-auto" size={24} />
                  </motion.div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="w-1 h-24 bg-gradient-to-b from-primary/60 to-secondary/60 mx-auto mt-2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <motion.h3
                    className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
