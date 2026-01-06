const VisionSection = () => {
  return (
    <section id="vision" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Vision statement */}
        <div className="text-center mb-24">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Our Vision
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium leading-[1.2] text-foreground max-w-3xl mx-auto">
            To expand human potential by giving everyone the{" "}
            <span className="italic">Ability</span> to create anything,
            <br className="hidden md:block" /> to do everything.
          </h2>
        </div>

        {/* Manifesto-style paragraphs */}
        <div className="space-y-16 max-w-2xl mx-auto">
          <div className="group">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              For years, software has been built for the masses. One-size-fits-all 
              solutions made by a handful of companies, forcing everyone into the 
              same mold.
            </p>
          </div>

          <div className="group">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              But what if software could be{" "}
              <span className="text-foreground font-medium">personal</span>? 
              What if anyone could create the exact tool they need, and share it 
              with the world?
            </p>
          </div>

          <div className="group">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              That's why we built Ability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
