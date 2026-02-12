const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-lg text-foreground">Ability</span>

        <a
          href="mailto:admin@ability.new"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors">

          Contact
        </a>

        <p className="text-sm text-muted-foreground">© 2026 Ability. All rights reserved.   Ability AI Technologies Private Limited

        </p>
      </div>
    </footer>);

};

export default Footer;