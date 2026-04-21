import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight, Phone } from 'lucide-react';
export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-dark text-cream border-t border-charcoal/50">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
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
              duration: 0.8
            }}>
            
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-6">
              Let's Build <br />
              <span className="text-gold italic">Together.</span>
            </h2>
            <p className="text-sage text-lg mb-12 max-w-md leading-relaxed">
              Currently open to new opportunities. Whether you have a question
              or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:prabath7689@gmail.com"
                className="flex items-center text-sage hover:text-gold transition-colors group">
                
                <div className="w-12 h-12 border border-charcoal flex items-center justify-center mr-6 group-hover:border-gold transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">prabath7689@gmail.com</span>
              </a>
              <a
                href="tel:+94768475041"
                className="flex items-center text-sage hover:text-gold transition-colors group">
                
                <div className="w-12 h-12 border border-charcoal flex items-center justify-center mr-6 group-hover:border-gold transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-lg">+94 768475041</span>
              </a>
              <a
                href="https://www.linkedin.com/in/prabhath-koralage"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-sage hover:text-gold transition-colors group">
                
                <div className="w-12 h-12 border border-charcoal flex items-center justify-center mr-6 group-hover:border-gold transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg">Prabhath Koralage</span>
              </a>
              <a
                href="https://github.com/Pkk2001"
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-sage hover:text-gold transition-colors group">
                
                <div className="w-12 h-12 border border-charcoal flex items-center justify-center mr-6 group-hover:border-gold transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-lg">Pkk2001</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
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
              duration: 0.8,
              delay: 0.2
            }}>
            
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-charcoal py-4 text-cream focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                  placeholder="Name" />
                
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-sage text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-3 peer-valid:text-xs">
                  
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-charcoal py-4 text-cream focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                  placeholder="Email" />
                
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-sage text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-3 peer-valid:text-xs">
                  
                  Email Address
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-charcoal py-4 text-cream focus:outline-none focus:border-gold transition-colors peer placeholder-transparent resize-none"
                  placeholder="Message">
                </textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-4 text-sage text-lg transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-gold peer-valid:-top-3 peer-valid:text-xs">
                  
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gold text-dark font-medium overflow-hidden transition-all hover:bg-cream w-full sm:w-auto">
                
                <span className="relative z-10 flex items-center">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}