import { useEffect, useRef } from 'react';
import styles from './CanvasBackground.module.css';

export const CanvasBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const animationFrameRef = useRef(null);
  const arrayColors = ['#DCDCDC'];

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Ensure canvas and container are available
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');

    // Set initial size
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = container.offsetWidth * dpr;
      canvas.height = container.offsetHeight * dpr;
      ctx.scale(dpr, dpr); // Scale for retina displays

      // Set CSS size
      canvas.style.width = `${container.offsetWidth}px`;
      canvas.style.height = `${container.offsetHeight}px`;
    };

    const initCanvas = () => {
      setCanvasSize();
      dotsRef.current = [];
      for (let index = 0; index < 100; index++) {
        dotsRef.current.push({
          x: Math.floor(Math.random() * container.offsetWidth),
          y: Math.floor(Math.random() * container.offsetHeight),
          size: 6 * 1.5 + 0.5,
          baseSize: Math.random() * 1.5 + 0.5,
          color: '#DCDCDC',
          phase: Math.random() * Math.PI * 2,
          speed: 0.02 + 0.05 * 0.02,
          opacity: Math.random() * 0.3 + 0.2,
        });
      }
    };

    const drawDots = (timestamp = 0) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dotsRef.current.forEach(dot => {
        dot.phase += dot.speed;
        dot.size = dot.baseSize + Math.sin(dot.phase) * 0.5;
        dot.opacity = 0.2 + Math.sin(dot.phase) * 0.15;

        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.size * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${dot.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(drawDots);
    };

    const handleMouseMove = event => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sparkling dots
      dotsRef.current.forEach(dot => {
        dot.phase += dot.speed;
        dot.size = dot.baseSize + Math.sin(dot.phase) * 0.5;
        dot.opacity = 0.2 + Math.sin(dot.phase) * 0.15;

        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.size * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${dot.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      const rect = container.getBoundingClientRect();
      const mouse = {
        x: (event.clientX - rect.left) * (canvas.width / container.offsetWidth),
        y: (event.clientY - rect.top) * (canvas.height / container.offsetHeight),
      };

      // Draw lines with subtle glow
      dotsRef.current.forEach(dot => {
        const distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 200) {
          ctx.strokeStyle = '#ffffff';
          ctx.globalAlpha = Math.max(0, 1 - distance / 200) * dot.opacity * 0.3;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
    };

    const handleResize = () => {
      initCanvas();
      drawDots();
    };

    // Initialize
    initCanvas();
    animationFrameRef.current = requestAnimationFrame(drawDots);

    // Event listeners
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []); // Empty dependency array since we only want to run this once

  return (
    <div ref={containerRef} className={styles.container}>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
};
