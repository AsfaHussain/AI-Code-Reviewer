// src/components/AnimatedHeader.jsx
import './GetStarted.css';
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useRef } from 'react';
import { TweenLite, Circ } from 'gsap';

const GetStarted = () => {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);
  const navigate = useNavigate();
      const handleClick = () => {
          navigate('/language');
      }


  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let points = [];
    let target = { x: width / 2, y: height / 2 };
    let animateHeader = true;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const initHeader = () => {
      if (headerRef.current) {
        headerRef.current.style.height = `${height}px`;
      }

      canvas.width = width;
      canvas.height = height;

      points = [];
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          const px = x + Math.random() * (width / 20);
          const py = y + Math.random() * (height / 20);
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // closest points
      points.forEach(p1 => {
        const closest = [];
        points.forEach(p2 => {
          if (p1 !== p2) {
            if (closest.length < 5) {
              closest.push(p2);
            } else {
              let maxDist = 0;
              let maxIndex = 0;
              closest.forEach((c, i) => {
                const dist = getDistance(p1, c);
                if (dist > maxDist) {
                  maxDist = dist;
                  maxIndex = i;
                }
              });
              if (getDistance(p1, p2) < maxDist) {
                closest[maxIndex] = p2;
              }
            }
          }
        });
        p1.closest = closest;
      });

      // assign circles
      points.forEach(p => {
        p.circle = new Circle(p, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
      });
    };

    const addListeners = () => {
      window.addEventListener('mousemove', mouseMove);
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    };

    const mouseMove = e => {
      target.x = e.pageX;
      target.y = e.pageY;
    };

    const scrollCheck = () => {
      animateHeader = document.body.scrollTop <= height;
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      if (headerRef.current) headerRef.current.style.height = `${height}px`;
    };

    const initAnimation = () => {
      animate();
      points.forEach(p => shiftPoint(p));
    };

    const animate = () => {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        points.forEach(p => {
          const distance = getDistance(target, p);
          if (distance < 4000) {
            p.active = 0.3;
            p.circle.active = 0.6;
          } else if (distance < 20000) {
            p.active = 0.1;
            p.circle.active = 0.3;
          } else if (distance < 40000) {
            p.active = 0.02;
            p.circle.active = 0.1;
          } else {
            p.active = 0;
            p.circle.active = 0;
          }

          drawLines(p);
          p.circle.draw();
        });
      }
      requestAnimationFrame(animate);
    };

    const shiftPoint = p => {
      TweenLite.to(p, 1 + 1 * Math.random(), {
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: () => shiftPoint(p),
      });
    };

    const drawLines = p => {
      if (!p.active) return;
      p.closest.forEach(c => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(c.x, c.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      });
    };

    function Circle(pos, rad, color) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;
      this.active = 0;

      this.draw = () => {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      };
    }

    const getDistance = (p1, p2) =>
      Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

    // Initialize
    initHeader();
    initAnimation();
    addListeners();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      id="large-header"
      ref={headerRef}
      className="large-header"
      style={{
        backgroundImage:
          "url('')",
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        background: 'radial-gradient(125% 125% at 50% 10%, #000000 40%, rgb(21, 0, 78) 100%)',
        zIndex: 0,
      }}
    >
      <canvas id="demo-canvas" ref={canvasRef}></canvas>
      
      <h1 className="main-title">
        Welcome to
        
      </h1>
      
<a href="#" class="btn-shine">AI Code Reviewer</a>
<p className='p'>Improve your code with AI-powered reviews offering instant feedback, error detection, and best-practice tips — for cleaner, faster, and bug-free development</p>
      <div>
      <button className="get-started-button" onClick={handleClick}>
        Get Started →
      </button>
      </div>
      
    </div>
  );
};

export default GetStarted;
