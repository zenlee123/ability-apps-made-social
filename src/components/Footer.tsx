const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg text-foreground">Ability</span>
          <span className="text-xs text-muted-foreground">.new</span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Discord
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          © 2026 Ability. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
