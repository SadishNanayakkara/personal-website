import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Modern UI/UX",
    description:
      "Crafting sleek, glossy, and highly responsive designs that prioritize user experience.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Leveraging the MERN stack and Next.js to build robust, scalable applications.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "AI Integration",
    description:
      "Integrating artificial intelligence into web applications to enhance user experience and functionality.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm a Full-Stack Developer and an undergraduate student with a
                deep passion for building high-performance web applications. My
                journey is driven by a "builder’s mindset"—combining analytical
                thinking with modern technology to solve real-world problems
                through code.
              </p>
              <p>
                I specialize in the MERN stack (MongoDB, Express, React,
                Node.js) and Next.js, focusing on creating "glossy," highly
                responsive user interfaces with seamless animations. Whether
                it's an AI-driven web solution or a complex functional platform,
                I strive for technical excellence in every line of code.
              </p>
              <p>
                Outside of development, I’m heavily involved in tech
                volunteering and student leadership, always looking for ways to
                bridge the gap between innovative ideas and impactful execution.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create digital experiences that are not just
                functional, but truly delightful — products that users love to
                use and developers love to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(0,0,0,0.6)]"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
