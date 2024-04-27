import CMSNavbar from "../components/CMSNavbar";
import { Provider } from "../utils/Provider";
import "./globals.css";

export const metadata = {
  title: "Cloud51 CMS",
  description: "Cloud51 Store CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <CMSNavbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
