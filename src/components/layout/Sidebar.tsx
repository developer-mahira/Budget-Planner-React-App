import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  DollarSign, 
  FileText, 
  Calculator, 
  StickyNote, 
  BarChart3,
  Settings,
  TrendingUp
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/budget', icon: DollarSign, label: 'Budget Planner' },
    { path: '/expenses', icon: FileText, label: 'Expenses' },
    { path: '/calculator', icon: Calculator, label: 'Calculator' },
    { path: '/notes', icon: StickyNote, label: 'Notes' },
    { path: '/reports', icon: BarChart3, label: 'Reports' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">BudgetPro</h1>
            <p className="text-sm text-gray-500">Smart Budget Planner</p>
          </div>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-gray-900">Monthly Budget</h3>
            <p className="text-2xl font-bold text-primary mt-1">$2,450</p>
            <p className="text-sm text-gray-500">Remaining: $850</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;