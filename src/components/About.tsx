import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices and modern architectures."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-text-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            B.Tech Computer Science and Engineering 
            graduate with expertise in Java backend development and 
            full stack application building, passionate about creating scalable and reliable software solutions for real-world business problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              B.Tech Computer Science and Engineering student at
              Malla Reddy University (2026) with hands-on experience building
              full stack web applications. Proficient in Java, Spring Boot, React.js, and MySQL, delivering projects across backend development, REST APIs, and frontend interfaces. Applying scalable software solutions to solve real-world business problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond coding, I enjoy cooking and cricket. I'm passionate about creating sustainable, 
              data-driven solutions that make a meaningful impact in dynamic organizations.
            </p>
          </div>
          
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 bg-card-gradient border-border hover:shadow-card transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}