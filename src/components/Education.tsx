import React from 'react';
import { motion } from 'framer-motion';
export function Education() {
  const courses = [
  'Computer Architecture',
  'Data Structures & Algorithms',
  'Web Application Development',
  'Mobile Application Development',
  'System Analysis & Design',
  'Database Design',
  'Microservices',
  'Project Management'];

  const qualifications = [
  {
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'Cardiff Metropolitan University (UK)',
    campus: 'ICBT Kandy Campus',
    period: '2025 - Present'
  },
  {
    degree: 'Higher Diploma in Computing and Software Engineering',
    institution: 'Cardiff Metropolitan University (UK)',
    campus: 'ICBT Kandy Campus',
    period: '2023 - 2025'
  }];

  return (
    <section id="education" className="py-24 md:py-32 bg-cream text-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
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
            duration: 0.6
          }}
          className="mb-16 text-center md:text-left">
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Qualifications */}
          <div className="lg:col-span-7 space-y-6">
            {qualifications.map((qual, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15
              }}>
              
                <div className="bg-dark text-cream p-8 md:p-10 border-l-4 border-gold">
                  <span className="text-gold font-mono text-sm mb-3 block">
                    {qual.period}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold mb-4">
                    {qual.degree}
                  </h3>
                  <p className="text-cream/80 text-base flex items-center">
                    <span className="w-6 h-[1px] bg-gold mr-3 flex-shrink-0"></span>
                    {qual.campus} / {qual.institution}
                  </p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Key Courses */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="lg:col-span-5 flex flex-col justify-center">
            
            <h4 className="font-serif text-xl font-bold mb-6 text-charcoal">
              Key Courses
            </h4>
            <div className="flex flex-wrap gap-3">
              {courses.map((course, i) =>
              <span
                key={i}
                className="text-sm font-medium text-dark bg-sage/30 border border-sage/50 px-4 py-2 rounded-sm hover:bg-gold hover:text-dark hover:border-gold transition-colors">
                
                  {course}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}