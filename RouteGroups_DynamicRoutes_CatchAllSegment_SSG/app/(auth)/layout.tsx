export default function RootLayout({
  children
}: any) {
  return (
    <html lang="en">
      <body>
      <div>Header</div>
        {children}
      <div>Footer</div>
      </body>
    </html>
  );
}
