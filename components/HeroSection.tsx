'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-5xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium">
            ✨ The Future of On-Demand Services
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Hire People.
          <br />
          <span className="text-gradient">Not Just Services.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Book verified Taskers for 30 minutes, 1 hour, 3 hours, or a full day and
          assign multiple legal tasks during your booking.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button className="group px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2">
            Book a Tasker
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300">
            Become a Tasker
          </button>
        </motion.div>

        {/* Floating Feature Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mt-16"
        >
          {[
            { label: '5K+', desc: 'Verified Taskers' },
            { label: '50K+', desc: 'Happy Customers' },
            { label: '100K+', desc: 'Tasks Completed' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={floatingVariants}
              animate="animate"
              className="glassmorphic p-4 rounded-lg"
            >
              <p className="text-2xl font-bold text-gradient mb-1">{stat.label}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
