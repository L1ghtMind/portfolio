/*
 * Project configuration used by both the home-page listing and project.html.
 *
 * status:
 *   public - card and allowed links are active
 *   nda    - card is visible, but detail and GitHub actions are disabled
 *   hidden - project is not rendered anywhere
 *
 * media.type supports: image, gif, video.
 * layout supports: standard, wide.
 * order controls the display position in the listing and filters (lower values appear first).
 * summary is optional compact card copy; description is used on the project detail page.
 * developedBy and period are displayed in the project metadata.
 * For NDA projects, developedBy is always rendered as "NDA" automatically.
 * personal adds a "Personal Project" badge to public work.
 * commercial labels production work as a "Commercial Project" case study.
 * links.github is optional: use a URL to show the button or null to hide it.
 * links.store is optional and accepts a public Google Play URL.
 * Never add confidential NDA text or media to this file or repository.
 */
window.PROJECTS_CONFIG = {
  pageSize: 4
};

window.PROJECTS = [
  {
    slug: "questbound",
    title: "Questbound",
    status: "public",
    order: 2,
    featured: true,
    commercial: true,
    layout: "standard",
    media: {
      type: "image",
      src: "https://play-lh.googleusercontent.com/F09c28fmkl5rP2l2ILrZq2xKv4PeNj92EASjml11RNmM3d8JQDFRvfGaC6SA3Sh73BnL2i_08FIYbKbS0wGm=w1024-h576",
      poster: "",
      alt: "Questbound gameplay preview",
      position: "center"
    },
    stack: ["Unity", "C#", "Mobile", "Live Events"],
    description: "A live mobile game project focused on in-game events, new features and scalable gameplay systems.",
    role: "Unity C# Developer",
    developedBy: "Zagrava Games",
    period: "Sep 2025 – Mar 2026",
    contributions: [
      "Collaborated with technical designers and artists to implement in-game events, features and gameplay systems.",
      "Integrated art and design assets and developed reliable event logic across builds.",
      "Prototyped features and improved development workflows for faster content implementation."
    ],
    technical: [
      {
        title: "Events & Features",
        text: "Implemented event logic and gameplay features in Unity with consistent behaviour across production builds."
      },
      {
        title: "Content Workflow",
        text: "Streamlined the integration of design and art assets to make content delivery faster and more reliable."
      }
    ],
    links: {
      details: true,
      github: null,
      store: "https://play.google.com/store/apps/details?id=com.mg0.perfect_heroes&hl=en"
    }
  },
  {
    slug: "fishdom",
    title: "Fishdom",
    status: "public",
    order: 3,
    featured: false,
    commercial: true,
    layout: "standard",
    media: {
      type: "image",
      src: "https://play-lh.googleusercontent.com/1MYhWqXNm0Fj6B8cLzB7aVAgRVHMXt7_YmDxnY_nvcgEP7jlilyYiqLKiPTWYOJbliGBHLudj02l2bxvREwT=w1024-h576",
      poster: "",
      alt: "Fishdom gameplay preview",
      position: "center"
    },
    stack: ["C++", "Mobile", "Localization", "Cross-platform"],
    description: "A commercial mobile project where I worked on localization, Ukrainian language support and core subsystem improvements.",
    role: "C++ Developer",
    developedBy: "Zagrava Games",
    period: "Apr 2024 – Sep 2024",
    contributions: [
      "Implemented and maintained localization and Ukrainian language support systems.",
      "Refactored core gameplay and UI subsystems for better maintainability and scalability.",
      "Optimized existing code to improve performance and cross-platform stability."
    ],
    technical: [
      {
        title: "Localization",
        text: "Integrated multilingual content and maintained Ukrainian language support across gameplay and UI systems."
      },
      {
        title: "Core Refactoring",
        text: "Improved existing C++ subsystems with a focus on maintainability, performance and cross-platform stability."
      }
    ],
    links: {
      details: true,
      github: null,
      store: "https://play.google.com/store/apps/details?id=com.playrix.fishdomdd.gplay&hl=en"
    }
  },
  {
    slug: "austins-odyssey",
    title: "Austin’s Odyssey",
    status: "public",
    order: 4,
    featured: false,
    commercial: true,
    layout: "standard",
    media: {
      type: "image",
      src: "https://play-lh.googleusercontent.com/tbMAJUY_WPaIT9TyPBmnPYBJihces-Q_b21pskXnZaRWglYhdyY0WYeC8qnf3nE7J5bXIVGeD7y3qIENaZ3G=w1024-h576",
      poster: "",
      alt: "Austin’s Odyssey gameplay preview",
      position: "center"
    },
    stack: ["C++", "Mobile", "Gameplay Systems", "Match-3"],
    description: "A mobile puzzle adventure combining location exploration, story-driven quests and match-3 gameplay.",
    role: "C++ Developer",
    developedBy: "Zagrava Games",
    period: "Feb 2024 – Apr 2024",
    contributions: [
      "Contributed to core gameplay systems and feature development as part of a multidisciplinary team.",
      "Optimized performance and implemented gameplay logic.",
      "Integrated art and animation assets and debugged issues under tight production deadlines."
    ],
    technical: [
      {
        title: "Gameplay & Integration",
        text: "Developed gameplay logic and integrated art and animation assets into stable production features."
      },
      {
        title: "Performance & Stability",
        text: "Profiled, debugged and optimized systems to deliver stable and polished builds under tight deadlines."
      }
    ],
    links: {
      details: true,
      github: null,
      store: "https://play.google.com/store/apps/details?id=com.mg0.ao&hl=uk"
    }
  },
  {
    slug: "aqua-match",
    title: "Aqua Match",
    status: "public",
    order: 5,
    featured: false,
    commercial: true,
    layout: "standard",
    media: {
      type: "image",
      src: "https://play-lh.googleusercontent.com/gyRu_p3mpSGpHGO17BsdCCUDreLYho7V6dvhj0aR-rH6QW2mPhkuFO9YCX8MQPltGKwQKJeXc11NHv4TnduVxCY=w1024-h576",
      poster: "",
      alt: "Aqua Match gameplay preview",
      position: "center"
    },
    stack: ["C++", "Mobile", "Gameplay Systems", "Automation"],
    description: "A commercial mobile game developed in C++ with an emphasis on new gameplay features, performance and production efficiency.",
    role: "C++ Developer",
    developedBy: "Zagrava Games",
    period: "Mar 2022 – Jan 2024",
    contributions: [
      "Prototyped and implemented new gameplay features and mechanics in C++.",
      "Collaborated with designers, sound engineers and animators to deliver a cohesive gameplay experience.",
      "Developed internal tools and automation scripts that improved team productivity and workflow efficiency."
    ],
    technical: [
      {
        title: "Feature Development",
        text: "Prototyped and shipped gameplay mechanics with a strong focus on runtime performance and stability."
      },
      {
        title: "Tools & Automation",
        text: "Built internal tools and scripts to automate routine work and accelerate content production."
      }
    ],
    links: {
      details: true,
      github: null,
      store: "https://play.google.com/store/apps/details?id=com.mg0.pf&hl=en"
    }
  },
  {
    slug: "unannounced-vr-survival-game",
    title: "Unannounced VR Survival Game",
    status: "nda",
    order: 6,
    featured: false,
    layout: "standard",
    media: {
      type: "image",
      src: "images/portfolio-6.jpg",
      poster: "",
      alt: "Unannounced VR survival game project preview",
      position: "center"
    },
    stack: ["C++", "Unreal Engine 5", "VR", "Chaos Physics"],
    description: "An unannounced VR survival project focused on responsive world interaction, physics-driven destruction and scalable gameplay architecture.",
    role: "Independent Game Developer",
    developedBy: "",
    period: "Feb 2023 – Dec 2023",
    contributions: [
      "Developed responsive foliage interaction and VR-focused gameplay systems in Unreal Engine.",
      "Implemented physics-based destruction and Chaos damage simulation.",
      "Engineered modular C++ gameplay architecture with Blueprint integration for faster iteration."
    ],
    technical: [],
    links: {
      details: false,
      github: null,
      store: null
    }
  },
  {
    slug: "unannounced-stealth-shooter",
    title: "Unannounced Stealth Shooter",
    status: "nda",
    order: 7,
    featured: false,
    layout: "standard",
    media: {
      type: "image",
      src: "images/portfolio-7.jpg",
      poster: "",
      alt: "Unannounced stealth shooter project preview",
      position: "center"
    },
    stack: ["C++", "Unreal Engine 5", "AI Perception", "Animation"],
    description: "An unannounced stealth shooter centered on perception-driven enemy behavior, responsive movement and smooth stealth-to-combat gameplay.",
    role: "Independent Game Developer",
    developedBy: "",
    period: "Apr 2022 – Nov 2022",
    contributions: [
      "Implemented AI perception, enemy awareness and sound propagation systems.",
      "Developed cover-based combat behavior and transitions from stealth to active combat.",
      "Optimized character movement and animation blending for responsive gameplay."
    ],
    technical: [],
    links: {
      details: false,
      github: null,
      store: null
    }
  },
  {
    slug: "obstacle-avoidance",
    title: "Obstacle Avoidance",
    status: "public",
    order: 1,
    featured: false,
    personal: true,
    layout: "standard",
    media: {
      type: "video",
      src: "video/obstacle_avoidance.mp4",
      poster: "",
      alt: "Obstacle Avoidance gameplay demonstration",
      position: "center"
    },
    stack: ["C++", "Unreal Engine 5", "Actor Components", "Sphere Traces", "Animation Blueprints", "Blueprint API"],
    summary: "A reusable UE5 C++ plugin that turns nearby obstacle detection into smooth movement and animation avoidance.",
    description: "A reusable Unreal Engine 5 C++ gameplay plugin that detects nearby obstacles and produces a smooth, signed avoidance response for character movement and animation. The system separates sensing, decision-making and presentation, allowing designers to tune behavior in Project Settings and extend detection with new C++ or Blueprint sensor strategies without modifying the core component.",
    role: "Gameplay Programmer / Unreal Engine C++ Developer",
    developedBy: "Dmytro Holombik",
    period: "2026",
    contributions: [
      "Designed and implemented the reusable UE5 C++ plugin architecture around a Blueprint-spawnable actor component and an extensible sensor interface.",
      "Built a configurable bilateral sphere-sweep sensor with movement-input prediction, collision filtering, distance-based response strength and debug visualization.",
      "Created the sensor evaluation pipeline that checks both sides, retains the strongest result from each configured sensor and combines them into a signed steering value.",
      "Integrated avoidance with raw movement input through a configurable axis and response scale, including normalization, interpolation, dead-zone handling and smooth reset behavior.",
      "Exposed animation-ready avoidance data through a custom AnimInstance that refreshes its component reference when the owning actor or linked animation layer changes.",
      "Centralized gameplay tuning in Unreal Developer Settings and exposed Blueprint-callable functions, state data and update events for designer-friendly integration."
    ],
    technical: [
      {
        title: "Modular Sensor Architecture",
        text: "The core actor component is sensor-agnostic. Detection strategies implement a BlueprintNativeEvent interface and are loaded from configurable soft class references, so new C++ or Blueprint sensors can be added without changing the avoidance state machine."
      },
      {
        title: "Predictive Sphere Sweeps",
        text: "Left and right sphere sweeps originate from a configurable transform with forward, vertical and input-prediction offsets. Collision channel, trace complexity, owner filtering, radius and debug drawing are all adjustable in Project Settings."
      },
      {
        title: "Distance-Based Response",
        text: "Hit distance is mapped between near and far thresholds into a normalized strength value. Each side produces signed steering, while the component keeps the strongest sensor result and preserves the dominant hit for downstream gameplay logic."
      },
      {
        title: "Movement Integration",
        text: "The component accepts raw 2D movement input, applies avoidance on the configured lateral axis and normalizes the result. Input prediction and reset behavior use interpolation to prevent abrupt changes when a wall appears or clears."
      },
      {
        title: "Animation Integration",
        text: "A custom AnimInstance exposes AvoidanceAlphaSigned as animation-ready data for a BlendSpace or linked animation layer, keeping movement decisions and visual body response synchronized without coupling the AnimGraph to sensor logic."
      },
      {
        title: "Designer-Facing Configuration",
        text: "Global Developer Settings expose sensor classes, trace parameters, response speeds, dead zone, input scaling and optional capsule-radius adaptation. Blueprint functions and a multicast update event support both direct input processing and event-driven integration."
      }
    ],
    links: {
      details: true,
      github: "https://github.com/L1ghtMind/ObstacleAvoidance",
      store: null
    }
  }
];
