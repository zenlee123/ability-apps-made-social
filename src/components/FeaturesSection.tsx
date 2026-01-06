const features = [
  {
    title: "Build",
    description: "Create mini apps with simple, intuitive tools. No coding required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
    color: "bg-feature-rose",
  },
  {
    title: "Share",
    description: "Publish to a global community. Inspire others with your creations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
    color: "bg-feature-mint",
  },
  {
    title: "Use",
    description: "Discover and remix apps built by creators around the world.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    color: "bg-feature-lavender",
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
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center md:text-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 group-hover:scale-105 transition-transform`}
              >
                <span className="text-foreground/70">{feature.icon}</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
