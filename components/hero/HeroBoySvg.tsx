'use client'

export default function HeroBoySvg() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 500 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain drop-shadow-md"
      >
        {/* Cushion */}
        <path
          d="M 50 450 C 30 450, 10 400, 30 350 C 60 280, 150 250, 250 260 C 350 270, 420 300, 460 360 C 480 390, 470 460, 420 480 C 320 520, 150 510, 50 450 Z"
          fill="#E8E4DF"
          stroke="black"
          strokeWidth="3"
        />

        {/* Legs / Lower Body */}
        <path
          d="M 120 440 C 100 460, 180 490, 240 480 C 300 470, 380 450, 360 410 C 340 380, 240 370, 180 390 C 130 410, 140 420, 120 440 Z"
          fill="white"
          stroke="black"
          strokeWidth="3"
        />

        {/* Blazer Body */}
        <path
          d="M 150 350 C 140 250, 180 180, 220 160 C 260 140, 330 150, 350 220 C 370 290, 360 370, 300 400 C 220 430, 160 400, 150 350 Z"
          fill="black"
          stroke="black"
          strokeWidth="3"
        />

        {/* White shirt collar */}
        <path
          d="M 230 160 L 250 190 L 270 160 L 260 150 L 240 150 Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
        />

        {/* Blazer White Line Decorations */}
        <path d="M 170 220 C 200 240, 240 250, 280 230" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M 160 260 C 210 280, 270 280, 320 250" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M 155 300 C 220 330, 290 320, 345 280" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M 158 340 C 220 370, 290 360, 350 320" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M 175 380 C 220 400, 270 390, 320 360" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M 195 408 C 230 420, 260 410, 290 395" stroke="white" strokeWidth="2" strokeLinecap="round" />

        {/* Neck / Face Skin */}
        <path
          d="M 240 150 L 260 150 L 260 140 L 240 140 Z"
          fill="#FADCB8"
        />
        <path
          d="M 210 110 C 210 70, 240 50, 270 50 C 300 50, 310 80, 305 110 C 300 130, 270 140, 250 140 C 220 140, 210 130, 210 110 Z"
          fill="#FADCB8"
          stroke="black"
          strokeWidth="3"
        />
        
        {/* Ear */}
        <path
          d="M 300 95 C 315 95, 315 115, 300 115"
          fill="#FADCB8"
          stroke="black"
          strokeWidth="2"
        />

        {/* Hair */}
        <path
          d="M 200 80 C 190 30, 240 10, 280 20 C 320 30, 330 70, 315 90 C 310 100, 280 80, 260 70 C 240 60, 220 70, 200 80 Z"
          fill="black"
        />
        
        {/* Face Features */}
        <circle cx="240" cy="90" r="3" fill="black" />
        <path d="M 235 80 C 240 75, 245 75, 250 80" stroke="black" strokeWidth="2" fill="none" />
        
        <circle cx="270" cy="90" r="3" fill="black" />
        <path d="M 265 80 C 270 75, 275 75, 280 80" stroke="black" strokeWidth="2" fill="none" />
        
        {/* Nose */}
        <path d="M 255 90 C 255 100, 250 105, 245 105" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Smile */}
        <path d="M 240 120 C 250 125, 260 125, 270 115" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Arms and Hands */}
        {/* Left Arm */}
        <path d="M 160 200 C 140 250, 160 300, 210 300 L 220 300" stroke="black" strokeWidth="3" fill="none" />
        {/* Right Arm */}
        <path d="M 340 200 C 360 250, 340 300, 280 300 L 270 300" stroke="black" strokeWidth="3" fill="none" />

        {/* Hands */}
        <path d="M 210 290 C 220 280, 230 290, 220 300 C 230 310, 220 320, 210 310 Z" fill="#FADCB8" stroke="black" strokeWidth="2" />
        <path d="M 280 290 C 270 280, 260 290, 270 300 C 260 310, 270 320, 280 310 Z" fill="#FADCB8" stroke="black" strokeWidth="2" />

        {/* Laptop */}
        <path d="M 190 310 L 150 240 L 180 230 L 220 300 Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
        {/* Laptop Screen Highlight */}
        <path d="M 160 245 L 180 238 L 210 295 L 190 302 Z" fill="#333" />
        {/* Laptop Base */}
        <path d="M 190 310 L 290 310 L 310 330 L 210 330 Z" fill="#E8E4DF" stroke="black" strokeWidth="3" strokeLinejoin="round" />
        {/* Keyboard area */}
        <path d="M 205 315 L 285 315 L 295 325 L 215 325 Z" fill="#ccc" />
      </svg>
    </div>
  )
}
