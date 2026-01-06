import { useState } from "react";

const JoinSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="join" className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Be Part of It
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-foreground mb-6">
          Join the waitlist
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-md mx-auto">
          Be among the first to experience a new way of creating and sharing apps.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 bg-secondary border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-foreground text-background rounded-full text-sm font-medium hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                Get Early Access
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Just updates on our journey.
            </p>
          </form>
        ) : (
          <div className="py-8">
            <div className="w-16 h-16 bg-feature-mint rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-foreground"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <p className="text-xl font-serif text-foreground mb-2">
              You're on the list
            </p>
            <p className="text-muted-foreground">
              We'll be in touch soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JoinSection;
