function MainLayout({ children }) {
  return (
    <div className="bg-slate-950 min-h-screen overflow-x-hidden">
      {children}
    </div>
  );
}

export default MainLayout;