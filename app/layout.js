import Layout from "./components/Layout";
import "./globals.css";

export const metadata = {
  title: "Cashor App",
  description: "Cashor App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
