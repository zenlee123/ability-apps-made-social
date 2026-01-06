const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-background to-background pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-feature-rose/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-feature-mint/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tagline */}
        <p className="animate-fade-in text-sm tracking-[0.25em] uppercase text-muted-foreground mb-8">
          A New Way to Create
        </p>
        
        {/* Main headline */}
        <h1 className="animate-fade-in-delay-1 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight text-foreground mb-6">
          Personal Apps,
          <br />
          <span className="italic text-muted-foreground">Made Social</span>
        </h1>
        
        {/* Subtitle */}
        <p className="animate-fade-in-delay-2 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          A global platform where anyone can build, share, and use mini apps.
        </p>
        
        {/* CTA */}
        <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#join"
            className="px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Join the Waitlist
          </a>
          <a
            href="#vision"
            className="px-8 py-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Learn more →
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delay-3">
        <div className="w-px h-12 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
