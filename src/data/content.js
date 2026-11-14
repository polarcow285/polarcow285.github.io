import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export const name = "Natalie Leung";

export const photos = {
  hero: "/media/landing-photo.jpg",
  headshot: "/media/headshot.jpg",
};

export const navLinks = [
  { label: "Projects", to: "/projects" },
  { label: "Fencing", to: "/fencing" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "#contact" },
];

export const about =
  "I'm a **senior at Cornell University** majoring in **Computer Science** and minoring in **Business**. " +
  "Outside of the classroom, I'm a **co-captain** of Cornell's Division I Varsity Women's Fencing Team.";

const projectDetails = [
  "**Overview.** A few sentences on the problem and why it matters.",
  "**What I built.** Your role on the team, the tools you used, and how it works.",
  { image: null, caption: "Figure 1: Replace with a diagram, result, or photo." },
  "**Results.** What you achieved and what you learned.",
];
export const projects = [
  { title: "A Minimalist Retargeting-Guided Reinforcement Learning Recipe for Dexterous Manipulation", video: "/media/project-1.mp4",
    dates: "December 2025 – November 2026",
    tags: ["Research", "Dexterous Manipulation", "Motion Retargeting", "Reinforcement Learning", "Sim-to-Real", "CoRL 2026"],
    details: [
      { quote: "Research Assistant under Professor Preston Culbertson" },
      { heading: "The Problem" },
      "Teaching a robot hand to use a tool, like cutting with scissors or turning a screwdriver, is challenging because it involves lots of contact between the fingers and the tool, and the robot has to control its forces carefully.",
      "For humanoid robots, a simple recipe has worked well: copy a person's motion onto the robot (retargeting), then use reinforcement learning (RL) to train the robot to follow that motion. Our question was whether this same recipe works for dexterous manipulation.",
      "We built **REGRIND**, a pipeline that learns a tool-use skill from a single human demonstration. It retargets the person's hand and tool motion onto the robot hand, trains an RL policy in simulation to follow it, and then transfers that policy directly to the real robot. We tested it on two different multi-fingered robot hands using scissors and a screwdriver.",
      { heading: "Highlights" },
      { list: [
        "Led the baseline experiments, adapting large robotics codebases for REGRIND by configuring URDF/MJCF models for new robot hands and tasks.",
        "Benchmarked REGRIND against physics-based, kinematic, and differential IK retargeting methods in simulation.",
        "Co-authored the paper, which was accepted to the 10th Conference on Robot Learning (CoRL 2026).",
        "Gained hands-on experience with robot simulation (**NVIDIA Isaac Lab, Mujoco**), robot description files (URDF/MJCF), and how retargeting choices affect a robot's ability to learn dexterous skills.",
      ] },
      { link: "https://yunhaifeng.com/REGRIND", label: "Project website" },
      { pdf: "/media/regrind-paper.pdf" },
      
    ] },
  { title: "Robotics Office Hours: Agent Skills for Isaac Sim and Isaac Lab", image: "/media/project-2.webp",
    dates: "August 2026",
    tags: ["Livestream"],
    details: [
      "THIS SECTION OF THE SITE IS UNDER CONSTRUCTION"
    ] },
  { title: "Building and Programming a Scaled 3 Dof Fencing Robot Arm", image: "/media/project-3-title-slide.png",
    dates: "January 2023 – May 2023",
    tags: ["Oral Presentation", "Robotics", "Python"],
    details: [
      { quote: "Independent Study Course at Flintridge Preparatory School" },
    "*Shing!* My fencing sword slid along the dummy’s blade. It was great to practice against a stationary fencing dummy. However, I thought to myself, “it would be so much more helpful if it could move!” Thus, my “fencing robot” idea was born. This fencing robot would be an interactive dummy to help fencers train by themselves.",
    "Fencers move their arms in different directions to parry (defend) and attack. For this independent study, I modeled a fencer’s arm using robotics. I hope to gain a deeper understanding of robotics in order to build and program the movements of a fencer’s arm.",
    { heading: "Highlights" },
    { list: [
      "Built and programmed a three degree-of-freedom scaled robotic arm that models the movements of a fencer’s arm, culminating in a presentation to ~25 students, faculty, and parents about the design process and a live demonstration of the robotic arm",
      "Utilized mechanical tools including laser cutter, drill, and caliper to construct robot arm, learning the importance of careful planning",
      "Implemented inverse kinematics to generate trajectories for robot arm in Python, coded and optimized an algorithm that determines the closest coordinate the robot arm should reach when given an unreachable one, improving the arm’s precision and efficiency in movement.",
    ] },
    { heading: "Media" },
    { images: ["/media/project-3-drill.jpg", "/media/project-3-arm.jpg"], caption: "Building the arm in the makerspace" },
    { heading: "Oral Presentation" },
    { embed: "https://www.youtube.com/embed/ujZPBW6D7Yo?rel=0" },
    { heading: "Slides" },
    { embed: "https://docs.google.com/presentation/d/1_akFpzvaNhZRN6voOUTHtvEw9bFtXt0tNsqoZA3dFKg/embed" },
    { heading: "GitHub" },
    { link: "https://github.com/polarcow285/Robot-Arm-Independent-Study", label: "polarcow285/Robot-Arm-Independent-Study" },
  ] },
];

export const experiences = [
  { company: "NVIDIA", role: "Technical Marketing Engineer Intern, Robotics", dates: "May 2026 – August 2026", logo: "/media/nvidia_logo.jpeg" },
  { company: "AVEVA", role: "R&D Software Developer Intern", dates: "May 2025 – August 2025", logo: "/media/aveva_logo.jpeg" },
];

export const contacts = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/natalieleung8/", Icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/polarcow285", Icon: GitHubIcon },
  { label: "Email", href: "mailto:nl455@cornell.edu", Icon: EmailIcon },
];
