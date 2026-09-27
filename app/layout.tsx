import './globals.css';
export const metadata = { title: 'Discount Store', description: 'DevResolve intentionally buggy demo app' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
