// "use client"

// import { motion } from "framer-motion"
// import { MapPin, Star, ArrowRight } from "lucide-react"

// const destinations = [
//   {
//     name: "Paris",
//     country: "France",
//     image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
//     price: "$1,299",
//     rating: 4.9,
//   },
//   {
//     name: "Dubai",
//     country: "UAE",
//     image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
//     price: "$899",
//     rating: 4.8,
//   },
//   {
//     name: "Bali",
//     country: "Indonesia",
//     image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop",
//     price: "$999",
//     rating: 4.9,
//   },
//   {
//     name: "Switzerland",
//     country: "Europe",
//     image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2070&auto=format&fit=crop",
//     price: "$1,799",
//     rating: 5.0,
//   },
//   {
//     name: "Maldives",
//     country: "Indian Ocean",
//     image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop",
//     price: "$1,999",
//     rating: 5.0,
//   },
//   {
//     name: "Singapore",
//     country: "Asia",
//     image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2052&auto=format&fit=crop",
//     price: "$1,099",
//     rating: 4.8,
//   },
// ]

// export function Destinations() {
//   return (
//     <section id="destinations" className="py-24 lg:py-32 px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16 lg:mb-20"
//         >
//           <p className="text-sm font-semibold text-[#1a5f7a] uppercase tracking-[0.2em] mb-4">
//             Explore the World
//           </p>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
//             Popular Destinations
//           </h2>
//           <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
//             Discover our handpicked selection of the world{"'"}s most breathtaking destinations.
//           </p>
//         </motion.div>

//         {/* Destinations Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {destinations.map((destination, index) => (
//             <motion.div
//               key={destination.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <motion.div
//                 whileHover={{ y: -8 }}
//                 transition={{ duration: 0.3 }}
//                 className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer"
//               >
//                 {/* Image */}
//                 <div className="aspect-[4/5] overflow-hidden">
//                   <motion.img
//                     src={destination.image}
//                     alt={destination.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                   />
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />
//                 </div>

//                 {/* Rating */}
//                 <div className="absolute top-4 right-4">
//                   <span className="inline-flex items-center gap-1 bg-white px-3 py-1.5 rounded-full text-xs font-bold text-neutral-900 shadow-lg">
//                     <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
//                     {destination.rating}
//                   </span>
//                 </div>

//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="flex items-center gap-1.5 mb-2">
//                     <MapPin className="h-3.5 w-3.5 text-[#57b8d7]" />
//                     <span className="text-xs text-white/70 font-medium">{destination.country}</span>
//                   </div>
//                   <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-[#57b8d7] transition-colors">
//                     {destination.name}
//                   </h3>
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <span className="text-xs text-white/60 font-medium block">Starting from</span>
//                       <p className="text-2xl font-bold text-white">{destination.price}</p>
//                     </div>
//                     <div className="w-12 h-12 rounded-xl bg-[#1a5f7a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
//                       <ArrowRight className="w-5 h-5 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         {/* View All Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="text-center mt-14 lg:mt-16"
//         >
//           <button className="group inline-flex items-center gap-2 text-[#1a5f7a] font-semibold hover:opacity-80 transition-opacity">
//             View All Destinations
//             <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

"use client";

import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1935&auto=format&fit=crop",
    price: 1299,
    rating: 4.9,
    reviews: 2847,
  },
  {
    id: 2,
    name: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938&auto=format&fit=crop",
    price: 899,
    rating: 4.8,
    reviews: 3921,
  },
  {
    id: 3,
    name: "Maldives",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop",
    price: 2499,
    rating: 4.9,
    reviews: 1856,
  },
  {
    id: 4,
    name: "Tokyo, Japan",
    image:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop",
    price: 1599,
    rating: 4.7,
    reviews: 4102,
  },
  {
    id: 5,
    name: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop",
    price: 1199,
    rating: 4.8,
    reviews: 5234,
  },
  {
    id: 6,
    name: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop",
    price: 1799,
    rating: 4.7,
    reviews: 2918,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function Destinations() {
  return (
    <section id="destinations" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-2 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Explore the World
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Popular Destinations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Discover our handpicked selection of the world&apos;s most
            breathtaking destinations, each offering unique experiences and
            unforgettable memories.
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {destinations.map((destination) => (
            <motion.div key={destination.id} variants={itemVariants}>
              <Card className="group cursor-pointer overflow-hidden border-0 p-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    {/* Price Badge */}
                    <div className="absolute right-4 top-4 rounded-full bg-card/90 px-3 py-1.5 text-sm font-semibold text-foreground backdrop-blur-sm">
                      From ${destination.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
                          {destination.name}
                        </h3>
                        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="size-3.5" />
                          <span>
                            {destination.name.split(",")[1]?.trim() ||
                              destination.name}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1">
                        <Star className="size-3.5 fill-accent text-accent" />
                        <span className="text-sm font-medium text-foreground">
                          {destination.rating}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {destination.reviews.toLocaleString()} reviews
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
