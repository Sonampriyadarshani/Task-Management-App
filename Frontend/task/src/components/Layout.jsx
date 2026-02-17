const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Task Manager
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
