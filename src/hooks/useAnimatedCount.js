import { useState, useEffect, useRef } from 'react';

export const useAnimatedCount = (targetValues, options = {}) => {
  const { 
    startDelay = 300, 
    staggerDelay = 300, 
    animationDuration = 1000,
    triggerThreshold = 0.1 
  } = options;

  const [counts, setCounts] = useState(targetValues.map(() => 0));
  const [animateStates, setAnimateStates] = useState(targetValues.map(() => false));
  const sectionRef = useRef(null);
  const observerRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  const animateValue = (setValue, target, duration) => {
    let startTime = null;
    let animationFrameId = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      const value = Math.floor(percentage * target);
      setValue(value);

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  };

  const startAnimations = () => {
    if (hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const timeouts = targetValues.map((target, index) => {
      return setTimeout(() => {
        setAnimateStates(prev => {
          const newStates = [...prev];
          newStates[index] = true;
          return newStates;
        });
        
        animateValue(
          value => setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = value;
            return newCounts;
          }), 
          target, 
          animationDuration
        );
      }, startDelay + (index * staggerDelay));
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimatedRef.current) {
        startAnimations();
        observerRef.current?.disconnect();
      }
    };

    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: triggerThreshold,
        rootMargin: '20px' // Small buffer to trigger slightly earlier
      });

      observerRef.current.observe(sectionRef.current);
    } else {
      // Fallback for browsers without IntersectionObserver
      startAnimations();
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [triggerThreshold]);

  const getAnimationStyle = (type, index) => {
    const transforms = {
      bottom: 'translateY(30px)',
      left: 'translateX(-500px)',
      right: 'translateX(500px)'
    };

    return {
      transform: animateStates[index] ? 'translate(0)' : transforms[type],
      opacity: animateStates[index] ? 1 : 0,
      transition: `transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.3}s, 
                   opacity 0.6s ease-in ${index * 0.3}s`
    };
  };

  const getAnimationStyleBottom = (index) => getAnimationStyle('bottom', index);
  const getAnimationStyleLeft = (index) => getAnimationStyle('left', index);
  const getAnimationStyleRight = (index) => getAnimationStyle('right', index);

  return {
    counts,
    sectionRef,
    getAnimationStyleBottom,
    getAnimationStyleLeft,
    getAnimationStyleRight,
    animateStates
  };
};