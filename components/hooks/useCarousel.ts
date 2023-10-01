import { useState, useRef } from 'react';

const useCarousel = (imageWidth: number) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startDragX, setStartDragX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const findClosestSnapPoint = (scrollLeft: number): number => {
    return Math.round(scrollLeft / imageWidth) * imageWidth;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartDragX(e.pageX - containerRef.current!.offsetLeft);
    setScrollLeft(containerRef.current!.scrollLeft);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const closestSnapPoint = findClosestSnapPoint(containerRef.current!.scrollLeft);
    containerRef.current!.scrollTo({
      left: closestSnapPoint,
      behavior: 'smooth',
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current!.offsetLeft;
    const walk = x - startDragX;
    containerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return {
    containerRef,
    handleMouseDown,
    handleMouseLeave,
    handleMouseUp,
    handleMouseMove,
  };
};

export default useCarousel;
