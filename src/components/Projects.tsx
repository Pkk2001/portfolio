import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
export function Projects() {
  const projects = [
  {
    title: 'GadgetHub',
    description:
    'A microservices-based e-commerce platform that manages quotation requests across multiple distributor APIs. Features a central hub API distributing customer requests to external services via webhook integration, with a React frontend for product catalog management and real-time quotation tracking.',
    tags: [
    'ASP.NET Core',
    'React',
    'SQL Server',
    'Microservices',
    'Redux Toolkit'],

    github: 'https://github.com/Pkk2001/shop-API'
  },
  {
    title: 'LuxeVista Resort',
    description:
    'Android mobile application enabling guests to book rooms and services, view local attractions, and manage bookings. Features real-time booking management, personalized recommendations, and Firebase-powered authentication.',
    tags: ['Android', 'Java', 'Firebase', 'Material Design'],
    github: 'https://github.com/Pkk2001/LuxeVista-Resort'
  },
  {
    title: 'OceanView Hotel Booking Platform',
    description:
    'A luxury accommodations booking system built as a Java web application with REST-style JSON APIs. Supports role-based authentication, room and reservation management, automatic confirmation emails, and staff-generated PDF bills.',
    tags: ['Java', 'Servlets', 'MySQL', 'REST API', 'Maven'],
    github: 'https://github.com/Pkk2001/OceanView'
  },
  {
    title: 'Fit Zone Gym Website',
    description:
    'A full-stack gym management web application for fitness centers to manage memberships, trainers, class schedules, and customer interactions. Includes role-based authentication, appointment booking, and a contact messaging system.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Typed.js'],
    github: 'https://github.com/Pkk2001/FIT-ZONE-Gym'
  },
  {
    title: 'Pet Shop Inventory Management',
    description:
    'Desktop application for managing inventory and user accounts for a pet shop. Features role-based authentication, inventory management with category search, and file-based data persistence.',
    tags: ['Java', 'Swing', 'File I/O', 'Apache Ant'],
    github: 'https://github.com/Pkk2001/PetShop'
  }];

  return (
    <section id="projects" className="py-24 md:py-32 bg-cream text-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <motion.div
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
              duration: 0.6
            }}>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Featured Work
            </h2>
            <div className="w-16 h-[2px] bg-gold"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {projects.map((project, index) =>
          <motion.div
            key={index}
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
              margin: '-50px'
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1
            }}
            className={`bg-charcoal text-cream p-8 md:p-10 group hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full ${index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}`}>
            
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-serif text-2xl font-bold group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-sage hover:text-gold transition-colors">
                
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-sage/90 leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map((tag) =>
              <span
                key={tag}
                className="text-xs font-mono text-gold border border-gold/30 px-3 py-1">
                
                    {tag}
                  </span>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}