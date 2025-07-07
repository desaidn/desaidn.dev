import { memo } from 'react';

const AppLayout = memo(({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-primary font-mono flex flex-col">
      <main className="flex-1 p-6">{children}</main>
      <footer className="p-6 text-center">
        <p className="text-sm font-thin text-muted">
          © 2025 Dhairya Desai. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
});

export default AppLayout;
