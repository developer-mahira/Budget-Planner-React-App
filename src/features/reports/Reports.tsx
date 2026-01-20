import React, { useMemo } from 'react';
import { Download, Filter, Calendar } from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

const Reports: React.FC = () => {
  // Sample data for reports
  const monthlyData = useMemo(() => [
    { month: 'Jan', income: 4200, expenses: 2800, savings: 1400 },
    { month: 'Feb', income: 3800, expenses: 2500, savings: 1300 },
    { month: 'Mar', income: 4500, expenses: 3200, savings: 1300 },
    { month: 'Apr', income: 4100, expenses: 2900, savings: 1200 },
    { month: 'May', income: 4700, expenses: 3500, savings: 1200 },
    { month: 'Jun', income: 4300, expenses: 3100, savings: 1200 },
  ], []);

  const categoryData = useMemo(() => [
    { name: 'Food', value: 1200 },
    { name: 'Transport', value: 800 },
    { name: 'Housing', value: 1500 },
    { name: 'Utilities', value: 500 },
    { name: 'Entertainment', value: 300 },
    { name: 'Shopping', value: 700 },
  ], []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-gray-600">Detailed insights into your financial performance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" icon={<Filter className="w-4 h-4" />}>
            Filter
          </Button>
          <Button variant="ghost" icon={<Calendar className="w-4 h-4" />}>
            Jan 2024 - Jun 2024
          </Button>
          <Button icon={<Download className="w-4 h-4" />}>
            Export Report
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Income</p>
            <p className="text-2xl font-bold text-primary">$25,500</p>
            <p className="text-sm text-green-600">+12% from last period</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Expenses</p>
            <p className="text-2xl font-bold text-secondary">$18,000</p>
            <p className="text-sm text-red-600">+8% from last period</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Savings</p>
            <p className="text-2xl font-bold text-green-600">$7,500</p>
            <p className="text-sm text-green-600">+15% from last period</p>
          </div>
        </Card>
        <Card>
          <div className="text-center">
            <p className="text-sm text-gray-500">Savings Rate</p>
            <p className="text-2xl font-bold text-accent">29.4%</p>
            <p className="text-sm text-gray-600">of total income</p>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Income vs Expenses" padding="lg">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#4CAF50" name="Income" />
                <Bar dataKey="expenses" fill="#FF5722" name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Spending by Category" padding="lg">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent ? percent * 100 : 0).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Trend Analysis */}
      <Card title="Savings Trend" padding="lg">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#2196F3"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Detailed Table */}
      <Card title="Monthly Breakdown">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Month</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Income</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Expenses</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Savings</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Savings Rate</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((month) => (
                <tr key={month.month} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{month.month}</td>
                  <td className="py-3 px-4 text-green-600">${month.income.toLocaleString()}</td>
                  <td className="py-3 px-4 text-red-600">${month.expenses.toLocaleString()}</td>
                  <td className="py-3 px-4 text-blue-600">${month.savings.toLocaleString()}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                      {((month.savings / month.income) * 100).toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Reports;