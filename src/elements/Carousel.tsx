import React, { useState, useRef } from "react"
import useCarousel from "../hooks/useCarousel"

interface CarouselProps {
  images: string[]
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const imageWidth = 1000 + 16 // Adjust according to your image width
  const {
    containerRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  } = useCarousel(imageWidth)

  return (
    <div
      className="flex cursor-pointer snap-x  gap-4 overflow-x-hidden justify-center items-center"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      {images.map((image, index) => (
        <div key={index} className="w-[1000px] h-96 flex-shrink-0">
          {/* <div key={index} className="h-40 w-60 flex-shrink-0"> */}
          <img
            src={image}
            alt={`Carousel Image ${index}`}
            width={imageWidth}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  )
}

