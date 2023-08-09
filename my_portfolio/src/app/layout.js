import './globals.css'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'


export const metadata = {
  title: 'StartNow',
  description: 'Startup',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='container'>
          <Navbar />
          {children}
          <Footer />
        </div>
        
      </body>
    </html>
  )
}

/*Layout it is a parent component that is used by other pages, so whatever we write here it is going to apply for all pages */
 
/****We can create differente layout for different routes */