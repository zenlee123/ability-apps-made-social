import { Plus, Share2, Layers } from "lucide-react";

const features = [
  {
    title: "Build",
    description: "Create mini apps with simple, intuitive tools. No coding required.",
    icon: Plus,
  },
  {
    title: "Share",
    description: "Publish to a global community. Inspire others with your creations.",
    icon: Share2,
  },
  {
    title: "Use",
    description: "Discover and remix apps built by creators around the world.",
    icon: Layers,
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-foreground">
            Three simple steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center md:text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 group-hover:scale-105 transition-transform">
                  <IconComponent className="text-background" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
