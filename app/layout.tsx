import type { Metadata, Viewport } from 'next';
import './globals.css';
import { profile } from '@/content/site';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  title: {default:'Ajay Talvatkar — AI & Software Engineer',template:'%s | Ajay Talvatkar'},
  description:'Ajay Talvatkar is a Python Developer and AI Systems Engineer building enterprise automation, backend systems and intelligent software.',
  keywords:['Ajay Talvatkar','Python Developer','AI Engineer','FastAPI','Next.js','Enterprise AI','Mumbai','Backend Engineer'],
  robots:{index:true,follow:true},
  openGraph:{title:'Ajay Talvatkar — AI & Software Engineer',description:profile.headline,type:'website',locale:'en_US'},
  twitter:{card:'summary_large_image',title:'Ajay Talvatkar — AI & Software Engineer',description:profile.headline},
};
export const viewport: Viewport = {themeColor:'#080b13',width:'device-width',initialScale:1};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
