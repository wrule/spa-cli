import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AI() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentIcons, setCurrentIcons] = useState<string[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const meteorContainerRef = useRef<HTMLDivElement | null>(null);

  const emojiPool = useMemo(() => ([
    '💎', '⚡️', '🌟', '✨', '🔮', '🎆', '🌈', '⭐️', '🎇', '🪙', 
    '🚀', '💫', '🌙', '⚔️', '🛡️', '🎮', '🎲', '🎨', '🎭', '🎪',
    '🌍', '🌎', '🌏', '🔥', '❄️', '🌊', '🍀', '🎵', '🎶', '🎸',
    '🎹', '🎺', '🪄', '🎩', '🎪', '🎡', '🎢', '🎯', '🏆', '👑'
  ]), []);

  const getRandomIcons = useCallback((count: number) => {
    const shuffled = [...emojiPool].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }, [emojiPool]);

  const handleHoverStart = useCallback(() => {
    setCurrentIcons(getRandomIcons(10));
    setIsHovered(true);
  }, [getRandomIcons]);

  useEffect(() => {
    if (!buttonRef.current) return;

    if (meteorContainerRef.current) {
      meteorContainerRef.current.remove();
    }

    const container = document.createElement('div');
    container.style.cssText = `
      position: absolute;
      inset: 0;
      overflow: hidden;
      border-radius: 0.75rem;
      pointer-events: none;
      transform: translateZ(0);
      will-change: transform;
      transform-style: preserve-3d;
      backface-visibility: hidden;
    `;
    buttonRef.current.appendChild(container);
    meteorContainerRef.current = container;

    const createMeteorShower = () => {
      if (!buttonRef.current || !meteorContainerRef.current) return;
      
      const meteorCount = 15 + Math.floor(Math.random() * 16);
      const rect = buttonRef.current.getBoundingClientRect();

      Array.from({ length: meteorCount }).forEach((_, i) => {
        const emoji = emojiPool[Math.floor(Math.random() * emojiPool.length)];
        const meteor = document.createElement('div');
        
        meteor.textContent = emoji;
        meteor.style.cssText = `
          position: absolute;
          font-size: 20px;
          opacity: 0;
          transform-origin: center;
          pointer-events: none;
          z-index: 0;
          transform: translateZ(0);
          will-change: transform, opacity;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        `;
        meteorContainerRef.current?.appendChild(meteor);

        const startX = rect.width + Math.random() * 30;
        const startY = -30 + Math.random() * -30;
        const endX = -30 - Math.random() * 30;
        const endY = rect.height + 30 + Math.random() * 30;
        
        const randomOffsetX = Math.random() * 50;
        const randomOffsetY = Math.random() * 50;
        const delay = i * (50 + Math.random() * 50);

        const animation = meteor.animate([
          { 
            transform: `translate3d(${startX + randomOffsetX}px, ${startY - randomOffsetY}px, 0) rotate(-45deg) scale(0)`,
            opacity: 0
          },
          { 
            transform: `translate3d(${startX + randomOffsetX - 20}px, ${startY - randomOffsetY + 20}px, 0) rotate(-45deg) scale(1)`,
            opacity: 0.3,
            offset: 0.1
          },
          { 
            transform: `translate3d(${endX - randomOffsetX}px, ${endY + randomOffsetY}px, 0) rotate(-45deg) scale(0.5)`,
            opacity: 0
          }
        ], {
          duration: 1000 + Math.random() * 500,
          delay: delay,
          easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
          fill: 'forwards'
        });

        animation.onfinish = () => {
          meteor.remove();
        };
      });
    };

    const meteorInterval = setInterval(createMeteorShower, 1000);

    return () => {
      clearInterval(meteorInterval);
      meteorContainerRef.current?.remove();
      meteorContainerRef.current = null;
    };
  }, [emojiPool]);

  const gradientVariants = {
    initial: {
      background: 'linear-gradient(45deg, #6366f1, #a855f7, #ec4899)',
    },
    animate: {
      background: [
        'linear-gradient(45deg, #6366f1, #a855f7, #ec4899)',
        'linear-gradient(90deg, #ec4899, #6366f1, #a855f7)',
        'linear-gradient(135deg, #a855f7, #ec4899, #6366f1)',
        'linear-gradient(180deg, #6366f1, #a855f7, #ec4899)',
        'linear-gradient(225deg, #ec4899, #6366f1, #a855f7)',
        'linear-gradient(270deg, #a855f7, #ec4899, #6366f1)',
        'linear-gradient(315deg, #6366f1, #a855f7, #ec4899)',
        'linear-gradient(360deg, #ec4899, #6366f1, #a855f7)',
        'linear-gradient(45deg, #6366f1, #a855f7, #ec4899)',
      ],
    }
  };

  const buttonVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }
  };

  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: (index: number) => {
      const angle = (index * 360) / currentIcons.length;
      const radius = 60;
      const x = Math.cos(angle * Math.PI / 180) * radius;
      const y = Math.sin(angle * Math.PI / 180) * radius;
      
      return {
        opacity: [0, 1, 0.8],
        scale: [0, 1.2, 1],
        x: [0, x, x],
        y: [0, y, y],
        transition: {
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeOut",
          delay: index * 0.1,
        },
      };
    },
    exit: {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="relative">
        {/* 光环效果 */}
        <div className="absolute inset-0 -m-4">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full"
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          >
            <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2">
              <div className="absolute w-full h-full rounded-full bg-purple-500/30 animate-ping" />
              <div className="absolute w-full h-full rounded-full bg-purple-500/50 blur-sm" />
            </div>
          </motion.div>
        </div>

        {/* 按钮主体 */}
        <motion.button
          ref={buttonRef}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          onHoverStart={handleHoverStart}
          onHoverEnd={() => setIsHovered(false)}
          className="
            relative
            px-8 py-4
            text-white font-bold text-lg
            rounded-xl
            transition-all
            overflow-hidden
            hover:shadow-lg hover:shadow-purple-500/50
            z-10
          "
          style={{
            WebkitBackfaceVisibility: 'hidden',
            WebkitPerspective: '1000',
            WebkitTransform: 'translateZ(0)',
            willChange: 'transform',
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            className="absolute inset-0"
            variants={gradientVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          />
          <motion.div
            className="absolute inset-0 opacity-50"
            variants={gradientVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 5,
            }}
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          />
          <span className="relative z-10 flex items-center gap-2">
            <span>👛</span>
            连接钱包
          </span>
        </motion.button>

        {/* Hover时的图标动画 */}
        <AnimatePresence mode="wait">
          {isHovered && currentIcons.length > 0 && (
            <div 
              className="absolute top-1/2 left-1/2 pointer-events-none"
              style={{
                transform: 'translate(-50%, -50%) translateZ(0)',
                willChange: 'transform',
              }}
            >
              {currentIcons.map((icon, index) => (
                <motion.div
                  key={`${icon}-${index}`}
                  custom={index}
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute text-2xl filter drop-shadow-lg"
                  style={{
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}