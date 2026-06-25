function MainLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      {children}
    </div>
  );
}

export default MainLayout;
