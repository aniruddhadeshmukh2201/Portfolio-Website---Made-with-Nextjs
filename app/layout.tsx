import "./globals.css";
import FooterComponent from "../components/Footer/FooterComponent";
import HeaderComponent from "../components/Header/HeaderComponent";
import Head from "next/head";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Aniruddha Deshmukh</title>
        <link rel="icon" href={"/favicon.ico"} sizes="any"/>
      </Head>
      <body className={`flex flex-col min-h-screen`}>
        <HeaderComponent />
        <div className="flex-grow flex justify-center">{children}</div>
        <FooterComponent />
      </body>
    </html>
  );
}
