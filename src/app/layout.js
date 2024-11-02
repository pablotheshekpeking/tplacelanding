// app/layout.js
import { Providers } from './providers'
import { Poppins } from '@next/font/google';

// Initialize the font
const poppins = Poppins({
  weight: ['400', '500', '700'], // Specify the weights you need
  subsets: ['latin'],            // Specify the character sets you need
  display: 'swap',               // Optional: Specify the font display behavior
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
