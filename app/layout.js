import NavBar from '../components/navBar'
import Footer from '../components/footer'
import { Changa } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

/*
font loader function
- creates the css for changa for only english
- saves it in the changa var 
- now I can reference it in any opening tag as the className
*/
import '../app/globals.css'
const changa = Changa({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={changa.className}>
        <NavBar/>
        <main className="text-left mx-auto px-10 py-5">
          {children}
        </main>
        <Footer/>
        <Analytics />
      </body>
    </html>
  );
}
