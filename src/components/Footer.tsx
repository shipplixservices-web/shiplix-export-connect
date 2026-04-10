const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container text-center">
        <h3 className="text-2xl font-black text-background mb-2">Shipplix</h3>
        <p className="text-background/60 mb-6 max-w-md mx-auto">
          Export from Nigeria to the UK, US & Canada. Safe, fast, and fully handled.
        </p>
        <div className="flex justify-center gap-6 mb-6 text-background/40 text-sm">
          <span>📍 Lagos, Nigeria</span>
          <span>📞 +234 800 000 0000</span>
          <span>✉️ hello@shipplix.com</span>
        </div>
        <p className="text-background/30 text-sm">
          © {new Date().getFullYear()} Shipplix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
