import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      
      {/* Background Hacker Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-0"
        style={{
          backgroundImage:
          'linear-gradient(rgba(245,203,92,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,203,92,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Text Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="order-2 lg:order-1">
          
          {/* Terminal-style label */}
          <div className="flex items-center space-x-3 mb-6">
            <span
              className="text-gold text-sm"
              style={{
                fontFamily: '"JetBrains Mono", monospace'
              }}>
              
              {'>'} <span className="text-sage/60">~/portfolio</span>
              <motion.span
                animate={{
                  opacity: [1, 0]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8
                }}
                className="text-gold ml-0.5">
                
                _
              </motion.span>
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-tight mb-6">
            Prabhath <br />
            <span className="text-sage italic font-normal">Koralage</span>
          </h1>

          <h2 className="text-lg md:text-xl text-gold tracking-widest uppercase font-medium mb-4">
            Software Engineer & Full Stack Developer
          </h2>
          <p
            className="text-xl md:text-2xl text-sage mb-6 max-w-lg leading-relaxed"
            style={{
              fontFamily: '"DM Serif Display", serif'
            }}>
            
            <span className="italic text-cream">Clean architecture.</span>{' '}
            Modern technologies.{' '}
            <span className="italic text-cream">Scalable solutions.</span>
          </p>

          {/* Coordinates */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 1.2,
              duration: 0.8
            }}
            className="flex items-center space-x-3 mb-8"
            style={{
              fontFamily: '"JetBrains Mono", monospace'
            }}>
            
            <div className="w-2 h-2 bg-gold/60 rounded-full animate-pulse"></div>
            <span className="text-sage/50 text-xs tracking-wider">
              7.2906° N, 80.6337° E
            </span>
          </motion.div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gold text-dark font-medium overflow-hidden transition-all hover:bg-cream">
              
              <span className="relative z-10 flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-charcoal text-cream font-medium hover:border-gold hover:text-gold transition-colors">
              
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] w-full flex justify-center lg:justify-end items-center">
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2"></div>

          <div className="relative h-full w-full max-w-md lg:max-w-lg">
            {/* Image Container with Vignette/Gradient overlay to blend edges */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-dark"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark via-transparent to-transparent"></div>
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-dark via-transparent to-transparent"></div>

            {/* Scanline overlay for hacker effect */}
            <div
              className="absolute inset-0 z-20 pointer-events-none opacity-[0.06]"
              style={{
                backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,203,92,0.15) 2px, rgba(245,203,92,0.15) 4px)'
              }}>
            </div>

            <img
              src="/59d60b4f-7c0c-467d-8ecf-447d0a0260ec.jpg"
              alt="Prabhath Koralage"
              className="w-full h-full object-cover object-center relative z-0"
              style={{
                filter: 'contrast(1.1) brightness(0.9)'
              }} />
            

            {/* Binary overlay on image */}
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 1.8,
                duration: 1.2
              }}
              className="absolute bottom-8 left-4 right-4 z-30 text-center"
              style={{
                fontFamily: '"JetBrains Mono", monospace'
              }}>
              
              <div className="text-gold/30 text-[10px] md:text-xs tracking-[0.3em] leading-relaxed">
                <div>01110000 01101011 01101011</div>
              </div>
            </motion.div>

            {/* Corner brackets - hacker targeting UI */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-gold/25 z-30"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold/25 z-30"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-gold/25 z-30"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-gold/25 z-30"></div>

            {/* Subtle Gold Accent Border */}
            <div className="absolute -inset-4 border border-gold/20 z-0 hidden lg:block translate-x-8 translate-y-8"></div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        
        <span
          className="text-sage text-xs tracking-widest uppercase mb-2"
          style={{
            fontFamily: '"JetBrains Mono", monospace'
          }}>
          
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-charcoal relative overflow-hidden">
          <motion.div
            animate={{
              y: [0, 48, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'linear'
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gold" />
          
        </div>
      </motion.div>
    </section>);

}