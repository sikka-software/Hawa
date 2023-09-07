import React, { useState, useRef } from "react"
import useCarousel from "../hooks/useCarousel"

interface CarouselProps {
  images: string[]
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const imageWidth = 240 + 16 // Adjust according to your image width
  const {
    containerRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useCarousel(imageWidth)

  return (
    <div
      className="flex cursor-pointer snap-x  gap-4 overflow-x-scroll"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {images.map((image, index) => (
        <div key={index} className="h-40 w-60 flex-shrink-0">
          <img
            src={image}
            alt={`Carousel Image ${index}`}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  )
}

// import React, { FC, useEffect, useRef } from "react"
// import clsx from "clsx"

// type CarouselTypes = {
//   /** The text inside the chip */
//   label: string
//   /** The small icon before the chip label  */
//   icon?: JSX.Element
//   /** The color of the chip, must be a tailwind color */
//   color?: string
//   /** The size of the chip */
//   size?: "small" | "normal" | "large"
//   /** Enable/Disable the dot before the label of the chip */
//   dot?: boolean
//   /** Red/Green dot next to the label of the chip indicating online/offline or available/unavailable */
//   dotType?: "available" | "unavailable"
// }

// export const Carousel: FC<CarouselTypes> = (props) => {
//   const scrollContainer = useRef(null)

//   useEffect(() => {
//     let isDown = false
//     let startX
//     let scrollLeft

//     const onMouseDown = (e) => {
//       isDown = true
//       startX = e.pageX
//       scrollLeft = scrollContainer.current.scrollLeft
//     }

//     const onMouseLeave = () => {
//       isDown = false
//     }

//     const onMouseUp = () => {
//       isDown = false
//     }

//     const onMouseMove = (e) => {
//       if (!isDown) return
//       e.preventDefault()
//       const x = e.pageX
//       const walk = x - startX
//       scrollContainer.current.scrollLeft = scrollLeft - walk
//     }

//     const container = scrollContainer.current
//     container.addEventListener("mousedown", onMouseDown)
//     container.addEventListener("mouseleave", onMouseLeave)
//     container.addEventListener("mouseup", onMouseUp)
//     container.addEventListener("mousemove", onMouseMove)

//     return () => {
//       container.removeEventListener("mousedown", onMouseDown)
//       container.removeEventListener("mouseleave", onMouseLeave)
//       container.removeEventListener("mouseup", onMouseUp)
//       container.removeEventListener("mousemove", onMouseMove)
//     }
//   }, [])
//   return (
//     <div className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-50">
//       <div className="w-[500px]">
//         <div
//           ref={scrollContainer}
//           className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10"
//         >
//           <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
//             <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
//               <h2 className="mt-4 text-xl font-bold text-white">Cangu</h2>
//               <p className="text-sm text-white/50">Indonesia</p>
//             </div>
//             <img
//               src="https://source.unsplash.com/9bp48ITvd00"
//               alt="image"
//               className="h-full w-full rounded-xl object-cover"
//             />
//           </div>

//           <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]">
//             <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
//               <h2 className="mt-4 text-xl font-bold text-white">New York</h2>
//               <p className="text-sm text-white/50">United States</p>
//             </div>
//             <img
//               src="https://source.unsplash.com/4HG5hlhmZg8"
//               className="h-full w-full rounded-xl object-cover"
//             />
//           </div>

//           <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-blue-100 sm:w-[44%] md:w-[30%]">
//             <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
//               <h2 className="mt-4 text-xl font-bold text-white">London</h2>
//               <p className="text-sm text-white/50">United Kingdom</p>
//             </div>
//             <img
//               src="https://source.unsplash.com/oBmlsTW2pHY"
//               className="h-full w-full rounded-xl object-cover"
//             />
//           </div>

//           <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-green-100 sm:w-[44%] md:w-[30%]">
//             <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
//               <h2 className="mt-4 text-xl font-bold text-white">Bali</h2>
//               <p className="text-sm text-white/50">Indonesia</p>
//             </div>
//             <img
//               src="https://source.unsplash.com/1kdIG_258bU"
//               className="h-full w-full rounded-xl object-cover"
//             />
//           </div>

//           <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-rose-100 sm:w-[44%] md:w-[30%]">
//             <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
//               <h2 className="mt-4 text-xl font-bold text-white">
//                 Times Square
//               </h2>
//               <p className="text-sm text-white/50">Singapore</p>
//             </div>
//             <img
//               src="https://source.unsplash.com/l8vKWxhVuts"
//               className="h-full w-full rounded-xl object-cover"
//             />
//           </div>

//           <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-yellow-100 sm:w-[44%] md:w-[30%]">
//             <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
//               <h2 className="mt-4 text-xl font-bold text-white">Bangkok</h2>
//               <p className="text-sm text-white/50">Thailand</p>
//             </div>
//             <img
//               src="https://source.unsplash.com/0LGDmbnk0-U"
//               className="h-full w-full rounded-xl object-cover"
//             />
//           </div>

//           <div className="md:2/3 relative aspect-[2/3] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-red-100 sm:w-[44%] md:w-[30%]">
//             <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
//               <h2 className="mt-4 text-xl font-bold text-white">Latina</h2>
//               <p className="text-sm text-white/50">South America</p>
//             </div>
//             <img
//               src="https://source.unsplash.com/tVqQSfXQ_SI"
//               className="h-full w-full rounded-xl object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
