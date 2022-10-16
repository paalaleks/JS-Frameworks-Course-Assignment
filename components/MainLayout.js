const MainLayout = ({ children }) => {
  return (
    <main className="py-2 px-6 max-w-4xl flex justify-center flex-wrap mx-auto">
      {children}
    </main>
  );
};

export default MainLayout;
