const Footer = () => (
  <footer className="border-t-2 border-foreground mt-12 py-6 px-6">
    <div className="max-w-4xl mx-auto text-sm text-muted-foreground" style={{ fontFamily: "Arial, sans-serif" }}>
      <p className="text-left">© {new Date().getFullYear()} Benjamin Greene</p>
    </div>
  </footer>
);

export default Footer;
