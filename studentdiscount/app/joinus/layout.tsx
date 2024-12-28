import LoginNavbar from "../components/LoginNavbar";

export default function JoinUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        
      <body className="max-h-screen bg-gray-100">
        <LoginNavbar />
        {children}
      </body>
    </html>
  );
}
