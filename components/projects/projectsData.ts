export interface Project {
  id: number;
  title: string;
  status: string;
  badgeType: "progress" | "complete" | "award";
  description: string;
  terminalTitle: string;
  terminal: string[];
  tech: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CalcForge",
    status: "Active Project",
    badgeType: "progress",
    description:
      "A high-performance mathematical calculator built in C++ utilizing STL and Stack data structures to parse, validate, and evaluate complex arithmetic and parenthesized expressions.",
    terminalTitle: "calcforge.cpp",
    terminal: [
      "$ g++ -O3 calcforge.cpp -o calcforge",
      "$ ./calcforge",
      "> Expression: ((15 * 3) + 200) / 2",
      "> Parsing Infix to Postfix with Stack...",
      "✓ Computed Result = 122.50 [0.002ms]",
    ],
    tech: ["C++", "STL", "Stack", "DSA", "Algorithms"],
    github: "https://github.com/mohitjoshi-hey/Smart-Calculator-CPP",
  },
  {
    id: 2,
    title: "GoServe",
    status: "In Progress",
    badgeType: "progress",
    description:
      "A lightweight, scalable backend REST API service crafted in Go (Golang) exploring high-concurrency Goroutines, JSON serialization, routing, and low-latency microservice architecture.",
    terminalTitle: "server.go",
    terminal: [
      "$ go run cmd/server/main.go",
      "> Initializing GoServe REST engine...",
      "> Handlers registered: [/api/v1/health, /api/v1/users]",
      "> Server listening on :8080 (Goroutines active: 12)",
      "✓ Status 200 OK — Ready for incoming requests",
    ],
    tech: ["Go (Golang)", "REST API", "Goroutines", "HTTP Server", "JSON"],
    github: "https://github.com/mohitjoshi-hey",
  },
  {
    id: 3,
    title: "Robo-Soccer Arduino RC Bot",
    status: "🏆 1st Prize Winner",
    badgeType: "award",
    description:
      "Custom-designed remote-controlled omni-directional soccer vehicle built for the TechTatva 2k24 robotics competition. Engineered with dual H-Bridge drivers, high-RPM DC motors, and RF wireless transmitter.",
    terminalTitle: "robot_control.ino",
    terminal: [
      "$ arduino-cli compile --fqbn arduino:avr:uno robot_control.ino",
      "> Initializing RF Transceiver module...",
      "> Calibrating H-Bridge PWM Motor Drivers...",
      "> Signal locked: 2.4GHz RF Link Established",
      "✓ 1st Prize Awarded — TechTatva 2k24",
    ],
    tech: ["Arduino", "Embedded C", "H-Bridge Drivers", "Hardware", "Robotics"],
    github: "https://github.com/mohitjoshi-hey",
  },
];