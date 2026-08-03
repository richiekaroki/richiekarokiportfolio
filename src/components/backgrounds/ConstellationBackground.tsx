"use client";

const stars = Array.from({ length: 40 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 2 + Math.random() * 3,
  delay: Math.random() * 6,
  duration: 4 + Math.random() * 6,
}));

export default function ConstellationBackground() {

  return (
    <div className="absolute inset-0 z-0 opacity-40 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Subtle connecting lines via radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59,130,246,0.08) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(59,130,246,0.06) 0%, transparent 40%),
            radial-gradient(circle at 40% 80%, rgba(217,119,6,0.06) 0%, transparent 45%)
          `,
        }}
      />
      {/* Star dots */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-amber-500/70"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `starTwinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}
