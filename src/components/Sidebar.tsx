import React, { useEffect } from 'react';
import { Users, Home, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  async function fetchTables(){
    try{
      const URL = 'https://api.treasuredata.co.jp/v3/table/list/honda_reporting';
      const options = {
      }
      let response = await fetch(URL);
    }
    catch(err){
      console.log(err)
    }
    useEffect(()=>{
      fetchTables()
    },[])
  }
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '#' },
    { icon: Users, label: 'Users', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
    { icon: HelpCircle, label: 'Help', href: '#' },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Users className="h-8 w-8" />
        <span className="text-xl font-bold">Admin Panel</span>
      </div>
      <nav>
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 px-2 py-3 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;