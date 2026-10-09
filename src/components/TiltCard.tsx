import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 10,
  perspective = 1000,
  scale = 1.02
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)'
  });
  const [isHovered, setIsHovered] = useState(false);

  // Derive pointer and motion support
  const [isSupported] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    return !prefersReducedMotion && isFinePointer;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isSupported || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate cursor position relative to center of element (-0.5 to +0.5)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    // Calculate rotation angles
    const rotateX = -(yPct * maxTilt * 2);
    const rotateY = xPct * maxTilt * 2;

    setStyle({
      transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, 1)`,
      transition: 'transform 80ms ease-out'
    });
  };

  const handleMouseEnter = () => {
    if (!isSupported) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isSupported) return;
    setIsHovered(false);
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu [transform-style:preserve-3d] ${className}`}
      style={isSupported ? style : undefined}
      data-hovered={isHovered}
    >
      {children}
    </div>
  );
};
