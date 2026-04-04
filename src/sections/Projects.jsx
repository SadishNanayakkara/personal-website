import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "LUMINA | Smart Table Lamp",
    description:
      "A Lumina is a cutting-edge, intelligent workspace companion designed to redefine human-machine interaction through advanced HCI principles. Built on the ESP32 module, it transcends the functionality of a traditional lamp by integrating sophisticated hand-tracking capabilities that allow it to physically respond and adjust to user movements. Beyond its spatial awareness, Lumina features an integrated Live Chat system, enabling seamless conversational interaction between the user and the device. By harmonizing Computer Vision, IoT, and intuitive design, Lumina creates a highly responsive and personalized environment tailored to modern productivity needs. This project was developed under the expert supervision of Dr. Ravindra De Silva, whose invaluable guidance was instrumental in implementing its complex interactive architecture. financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: ["Python", "MediaPipe", "OpenCV"],
    link: "#",
    github: "#",
  },
  {
    title: "Capital Generators | E-Commerce Platform",
    description:
      "Capital Generator Co. is a specialized web platform designed for a premier power solutions provider, focusing on generator rentals, expert repairs, and 24/7 maintenance support. The application bridges the gap between high-end industrial equipment and users needing reliable power solutions for events and industrial projects. Featuring a sleek, conversion-optimized interface, it allows clients to browse equipment, request fast quotes, and access emergency services effortlessly. The project highlights the integration of robust service categories with a modern, user-centric design to ensure maximum engagement and operational efficiency.",
    image: "/projects/project2.png",
    tags: ["Next.js", "React", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "TOMATO | Food Delivery App",
    description:
      "Tomato is a fully functional, high-performance food delivery web application designed to offer a delightful culinary experience to users. Featuring a sleek and modern UI, it allows users to explore a diverse menu, filter by categories, and seamlessly place orders for their favorite dishes. The platform focuses on high responsiveness and intuitive navigation, ensuring a smooth transition from browsing to checkout. Built with a focus on visual appeal and performance, Tomato stands as a professional-grade solution for modern digital food services.",
    image: "/projects/project3.png",
    tags: ["React", "MongoDB", "Express", "Node.js"],
    link: "#",
    github: "https://github.com/SadishNanayakkara/Food-Delivery",
  },
  {
    title: "DocuTrace | Document Tracking System",
    description:
      "DocuTrace is an advanced digital ecosystem designed to ensure absolute transparency and security in document management. It provides a robust framework for real-time tracking and instant verification, allowing users to monitor the complete lifecycle of any document while ensuring its authenticity. Built with a core focus on data integrity, DocuTrace eliminates the risks of document tampering and manual tracking errors through its streamlined, automated architecture. By bridging the gap between high-level security and intuitive user experience, it offers an efficient solution for organizations to manage, trace, and verify critical digital assets with precision and reliability.",
    image: "/projects/project4.mp4",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github:
      "https://github.com/SadishNanayakkara/Customizable-Document-Tracking-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 transition-transform duration-500 hover:-translate-y-3 hover:shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image / Video */}
              <div className="relative overflow-hidden aspect-video">
                {project.image.endsWith(".mp4") ? (
                  <video
                    src={project.image}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
