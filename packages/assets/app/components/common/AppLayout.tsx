export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-black font-mono p-6">
      {children}
    </main>
  );
}
