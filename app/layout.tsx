import { Provider } from "react-redux";
import Nav from "./components/nav/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>pinterest clone</title>
      </head>

      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
