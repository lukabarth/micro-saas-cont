import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`} data-theme="forest"
      >
        <h1>Tudo que for colocado aqui, será renderizado em todas as páginas da aplicação</h1>

        {children}
      </body>
    </html>
  );
}
