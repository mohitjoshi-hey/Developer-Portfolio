'use client'

export default function AboutBoySvg() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 360 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain drop-shadow-md"
      >
        {/* Blazer Body */}
        <path
          d="M 60 420 C 50 350, 70 200, 130 180 C 180 160, 240 160, 280 190 C 330 220, 310 350, 300 420 Z"
          fill="black"
          stroke="black"
          strokeWidth="3"
        />

        {/* White shirt collar */}
        <path
          d="M 150 175 L 180 215 L 210 175 L 200 165 L 160 165 Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />

        {/* Blazer White Line Decorations */}
        <path d="M 85 240 C 130 260, 230 260, 285 230" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M 75 290 C 130 315, 240 315, 305 280" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M 70 340 C 130 370, 240 370, 308 330" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M 65 390 C 130 425, 240 425, 302 380" stroke="white" strokeWidth="2" strokeLinecap="round" />

        {/* Crossed Arms */}
        {/* Left Arm folded over */}
        <path
          d="M 70 260 C 100 320, 150 360, 260 310 C 270 300, 280 290, 285 270 C 285 260, 250 280, 220 290 C 150 310, 100 280, 85 240 Z"
          fill="black"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Right Arm folded under */}
        <path
          d="M 290 270 C 270 320, 220 340, 160 320 C 150 310, 140 300, 140 285"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Hands peeking out */}
        {/* Left hand under right bicep */}
        <path d="M 260 310 C 275 325, 285 315, 275 300" fill="#FADCB8" stroke="black" strokeWidth="2" />
        {/* Right hand under left arm */}
        <path d="M 160 320 C 145 330, 135 315, 145 300" fill="#FADCB8" stroke="black" strokeWidth="2" />

        {/* Neck / Face Skin */}
        <path
          d="M 160 165 L 200 165 L 200 150 L 160 150 Z"
          fill="#FADCB8"
        />
        <path
          d="M 120 110 C 120 50, 160 20, 200 20 C 240 20, 250 60, 245 110 C 240 140, 200 150, 180 150 C 140 150, 120 140, 120 110 Z"
          fill="#FADCB8"
          stroke="black"
          strokeWidth="3"
        />
        
        {/* Ear */}
        <path
          d="M 235 90 C 255 90, 255 120, 235 120"
          fill="#FADCB8"
          stroke="black"
          strokeWidth="2"
        />

        {/* Hair */}
        <path
          d="M 105 70 C 95 10, 160 -20, 215 -5 C 270 10, 280 60, 260 85 C 255 95, 215 70, 190 60 C 160 50, 135 60, 105 70 Z"
          fill="black"
        />
        
        {/* Face Features */}
        <circle cx="160" cy="85" r="4" fill="black" />
        <path d="M 150 75 C 160 65, 170 65, 175 75" stroke="black" strokeWidth="2" fill="none" />
        
        <circle cx="205" cy="85" r="4" fill="black" />
        <path d="M 195 75 C 205 65, 215 65, 220 75" stroke="black" strokeWidth="2" fill="none" />
        
        {/* Nose */}
        <path d="M 185 85 C 185 100, 175 105, 165 105" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Smile */}
        <path d="M 160 125 C 175 135, 195 135, 210 120" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />

      </svg>
    </div>
  )
}
