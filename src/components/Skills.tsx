import React from 'react';
import { motion } from 'framer-motion';
export function Skills() {
  const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'C#', 'C++', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Frontend',
    skills: [
    'React',
    'Vite',
    'Redux Toolkit',
    'React Router',
    'Tailwind CSS',
    'Framer Motion',
    'HTML5/CSS3']

  },
  {
    title: 'Backend',
    skills: [
    'ASP.NET Core',
    'Node.js',
    'RESTful APIs',
    'Entity Framework',
    'Swagger/OpenAPI']

  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQL Server', 'MongoDB', 'Firebase']
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ IDEA', 'XAMPP']
  },
  {
    title: 'Architecture',
    skills: [
    'Microservices',
    'Repository Pattern',
    'Service Layer',
    'Webhook Integration',
    'OOP']

  }];

  return (
    <section id="skills" className="py-24 md:py-32 bg-dark text-cream">
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
          className="mb-16">
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Technical Expertise
          </h2>
          <div className="w-16 h-[2px] bg-gold"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, catIndex) =>
          <motion.div
            key={category.title}
            initial={{
              opacity: 0,
              y: 30
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
              delay: catIndex * 0.1
            }}>
            
              <h3 className="text-xl font-serif font-bold text-gold mb-6 pb-2 border-b border-charcoal">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, skillIndex) =>
              <motion.li
                key={skill}
                initial={{
                  opacity: 0,
                  x: -10
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.4,
                  delay: catIndex * 0.1 + skillIndex * 0.05
                }}
                className="flex items-center text-sage group">
                
                    <span className="w-1.5 h-1.5 bg-charcoal rounded-full mr-3 group-hover:bg-gold transition-colors"></span>
                    <span className="group-hover:text-cream transition-colors">
                      {skill}
                    </span>
                  </motion.li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}