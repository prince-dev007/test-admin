import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UsersTable from './components/UsersTable';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <UsersTable />
        </main>
      </div>
    </div>
  );
}

export default App;