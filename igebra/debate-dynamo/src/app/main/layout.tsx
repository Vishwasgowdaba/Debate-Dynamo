import './../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <script src="/assets/scripts/responsivevoice.js" async />
        <main className="max-w-4xl mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}