"use client";

import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particles setup
    const particlesArray: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      pulse: number;
      pulseDirection: number;
    }[] = [];

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(canvas.width / 15), 100); // Limit number of particles
      
      for (let i = 0; i < particleCount; i++) {
        const size = Math.random() * 2.5 + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speedX = Math.random() * 0.5 - 0.25;
        const speedY = Math.random() * 0.5 - 0.25;
        const opacity = Math.random() * 0.5 + 0.1;
        const pulse = Math.random() * 0.5 + 0.2; // Initial pulse value
        const pulseDirection = Math.random() > 0.5 ? 1 : -1; // Pulsing direction
        
        // Colors using our new palette
        const colors = [
          `rgba(80, 146, 138, ${opacity})`, // pine-300
          `rgba(169, 201, 197, ${opacity})`, // pine-200
          `rgba(240, 180, 41, ${opacity})`,  // sun-500
        ];
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particlesArray.push({
          x,
          y,
          size,
          speedX,
          speedY,
          color,
          pulse,
          pulseDirection
        });
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only connect particles within a certain distance
          const maxDistance = canvas.width > 768 ? 180 : 120;
          if (distance < maxDistance) {
            // Less opacity for lines farther apart
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(80, 146, 138, ${opacity * 0.2})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid pattern
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(80, 146, 138, 0.03)';
      ctx.lineWidth = 1;
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += 60) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += 60) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      
      ctx.stroke();
      
      for (let i = 0; i < particlesArray.length; i++) {
        const p = particlesArray[i];
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Pulsing effect
        p.pulse += 0.01 * p.pulseDirection;
        if (p.pulse > 1 || p.pulse < 0.2) {
          p.pulseDirection *= -1;
        }
        
        // Bounce off edges with a buffer
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        
        // Draw particle with pulsing effect
        const glowSize = p.size * (1 + p.pulse);
        
        // Glow effect - Correctly parsing rgba values
        const baseColor = p.color.replace(/rgba\(([^)]+)\)/, '$1').split(',');
        if (baseColor.length >= 3) {
          const r = baseColor[0].trim();
          const g = baseColor[1].trim();
          const b = baseColor[2].trim();
          const a = baseColor[3] ? baseColor[3].trim() : "0.4"; // Default alpha if not provided
          
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize * 3);
          gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
          gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowSize * 3, 0, Math.PI * 2);
          ctx.fill();
          
          // Core particle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      connectParticles();
    };

    createParticles();

    // Animation loop
    let animationFrameId: number;
    const render = () => {
      animateParticles();
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-60"
    />
  );
};

export default AnimatedBackground;
