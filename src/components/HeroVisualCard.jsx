export default function HeroVisualCard() {
  return (
    <div className="w-full flex items-center justify-center lg:justify-end">
      <div className="relative w-full" style={{ padding: "10px" }}>

        {/* Orbit ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%",
            left: "50%",
            width: "calc(100% - 140px)",
            height: "calc(100% - 140px)",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            animation: "orbit-cw 9s linear infinite",
            borderRadius: "50%",
          }}
        >
          {/* 🟠 Orange — top */}
          <div className="absolute rounded-full" style={{
            width: "26px", height: "26px",
            top: "-13px", left: "calc(50% - 13px)",
            background: "radial-gradient(circle at 35% 30%, #ffb347, #F55C11)",
            boxShadow: "0 0 18px 7px rgba(245,92,17,0.9)",
          }} />
          {/* 🟢 Green — right */}
          <div className="absolute rounded-full" style={{
            width: "22px", height: "22px",
            top: "calc(50% - 11px)", right: "-11px",
            background: "radial-gradient(circle at 35% 30%, #c8f54a, #2C884B)",
            boxShadow: "0 0 16px 6px rgba(157,217,31,0.9)",
          }} />
          {/* 🩷 Pink — bottom */}
          <div className="absolute rounded-full" style={{
            width: "24px", height: "24px",
            bottom: "-12px", left: "calc(50% - 12px)",
            background: "radial-gradient(circle at 35% 30%, #ff80c8, #C2136F)",
            boxShadow: "0 0 17px 7px rgba(194,19,111,0.9)",
          }} />
          {/* 🟣 Violet — left */}
          <div className="absolute rounded-full" style={{
            width: "20px", height: "20px",
            top: "calc(50% - 10px)", left: "-10px",
            background: "radial-gradient(circle at 35% 30%, #c4b5fd, #6A1BFF)",
            boxShadow: "0 0 15px 6px rgba(106,27,255,0.9)",
          }} />
        </div>

        {/* Hero image */}
        <img
          src="/hero/hero image.png"
          alt="Hero"
          draggable={false}
          style={{ zIndex: 1, position: "relative", display: "block" }}
          className="w-full lg:h-[750px] xl:h-[820px] 2xl:h-[900px] h-auto object-contain drop-shadow-2xl"
        />

        <style>{`
          @keyframes orbit-cw {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to   { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
}
