export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0", fontFamily: "Arial, sans-serif" }}>
        <header style={{ background: "#0070f3", color: "white", padding: "10px" }}>
          <nav>
            <a href="/" style={{ marginRight: "10px", color: "white", textDecoration: "none" }}>
              Home
            </a>
            <a href="/about" style={{ color: "white", textDecoration: "none" }}>
              About
            </a>
          </nav>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
        <footer style={{ textAlign: "center", marginTop: "20px", padding: "10px", background: "#f1f1f1" }}>
          <p>© 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
