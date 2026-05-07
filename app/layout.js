import NavBar from '../components/navBar'
import Footer from '../components/footer'
import '../app/globals.css'
import { Changa } from "next/font/google";

/*
font loader function
- creates the css for changa for only english
- saves it in the changa var 
- now I can reference it in any opening tag as the className
*/
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
      </body>
    </html>
  );
}
