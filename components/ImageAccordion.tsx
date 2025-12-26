'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa' 

const images = [
  { src: '/images/distributeur.png', title: 'Distributeur' },
  { src: '/images/prescripteur.png', title: 'Prescripteur' },
  { src: '/images/entreprise.png', title: 'Entreprise' },
  { src: '/images/podcasts.png', title: 'Podcasts' },
  { src: '/images/partenaire.png', title: 'Partenaire' },
]

export default function ImageAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative w-full h-full">
      <div
        className="
          flex w-full h-full
          overflow-x-auto md:overflow-hidden
          flex-nowrap
          scrollbar-none
        "
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="
              relative flex-1
              min-w-[70%] md:min-w-0 
              cursor-pointer overflow-hidden
              mr-4 last:mr-0       
            "
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              flexGrow: hoveredIndex === index ? 2 : 1,
              scale: hoveredIndex === index ? 1.03 : 1,
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src={img.src}
              alt={img.title}
              fill
              priority={index === 0}
              className="object-cover transition-transform duration-700"
            />

            <motion.div
              className="absolute inset-0 bg-black/30 flex items-center justify-center"
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span
                className="text-white text-xl font-bold"
                animate={{
                  y: hoveredIndex === index ? 0 : 10,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {img.title}
              </motion.span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 md:hidden pointer-events-none">
        <FaChevronRight className="text-white text-2xl opacity-70" />
      </div>
    </div>
  )
}
