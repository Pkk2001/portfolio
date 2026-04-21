import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  const stats = [
  {
    label: 'Projects Built',
    value: '8+'
  },
  {
    label: 'Technologies',
    value: '20+'
  },
  {
    label: 'GitHub Repos',
    value: '10+'
  },
  {
    label: 'Frameworks',
    value: '6+'
  }];

  return (
    <section id="about" className="py-24 md:py-32 bg-cream text-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 0.8
              }}>
              
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Crafting <br />
                <span className="italic text-charcoal font-normal">
                  Digital
                </span>{' '}
                <br />
                Excellence.
              </h2>
              <div className="w-24 h-[2px] bg-gold mb-8"></div>
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 0.8,
                delay: 0.2
              }}
              className="prose prose-lg text-charcoal max-w-none mb-16">
              
              <p className="text-xl leading-relaxed mb-6">
                A passionate Software Engineer with a strong focus on full stack
                development and modern web technologies. I specialize in
                building scalable, well-architected applications using React,
                .NET, and Java ecosystems — delivering solutions that are both
                performant and maintainable.
              </p>
              <p className="leading-relaxed mb-6">
                My expertise spans the entire development lifecycle — from
                designing RESTful APIs and microservices architectures to
                crafting responsive, intuitive user interfaces. I thrive on
                solving complex problems with clean, efficient code and have a
                deep appreciation for software design patterns and best
                practices.
              </p>
              <p className="leading-relaxed">
                Beyond development, I am committed to continuous learning and
                contributing to the developer community through open-source
                projects and collaborative problem-solving.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-sage/30 pt-12">
              {stats.map((stat, index) =>
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1
                }}>
                
                  <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-charcoal uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}