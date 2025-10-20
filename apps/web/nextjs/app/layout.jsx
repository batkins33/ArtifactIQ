import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "ArtifactIQ",
  description: "Minimal scaffold for web app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header>
            <h1 className="title">ArtifactIQ</h1>
            <p className="muted">Demo scaffold with 4 screens</p>
            <Nav />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

