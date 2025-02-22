# Video Section with Play/Pause & Circular Progress

## Overview

This feature adds a **full-width video section** with:

- **Smooth animations using Framer Motion**
- **A circular progress bar**
- **Play/Pause functionality**

## Steps to Implement

### Add Video Component

```tsx
<motion.div
  variants={fadeIn("up", 0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.7 }}
  className="absolute bottom-48 right-0"
>
  <button
    onClick={togglePlay}
    className="relative w-16 h-16 flex items-center justify-center"
  >
    {/* SVG Circular Progress Bar */}
    <svg width="64" height="64" viewBox="0 0 100 100">
      {/* Circle Background */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="gray"
        strokeWidth="6"
        fill="none"
      />
      {/* Progress Bar */}
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="white"
        strokeWidth="6"
        fill="none"
        strokeDasharray="251.2"
        strokeDashoffset={251.2 - (251.2 * videoProgress) / 100}
        strokeLinecap="round"
      />
    </svg>

    {/* Play/Pause Icon */}
    <span className="absolute text-white text-2xl">
      {isPlaying ? "❚❚" : "▶"}
    </span>
  </button>
</motion.div>
```
