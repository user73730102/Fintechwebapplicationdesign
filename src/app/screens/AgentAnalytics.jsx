import React from "react";
import { Card, CardHeader, CardTitle, CardContent, Badge } from "../components/ui/shared";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { TrendingUp, Users, Clock, ShieldCheck } from "lucide-react";
export function AgentAnalytics() {
  const data = [{
    name: "Mon",
    sessions: 45,
    success: 92,
    risk: 12
  }, {
    name: "Tue",
    sessions: 52,
    success: 94,
    risk: 8
  }, {
    name: "Wed",
    sessions: 38,
    success: 90,
    risk: 15
  }, {
    name: "Thu",
    sessions: 65,
    success: 95,
    risk: 6
  }, {
    name: "Fri",
    sessions: 48,
    success: 91,
    risk: 10
  }, {
    name: "Sat",
    sessions: 25,
    success: 88,
    risk: 18
  }, {
    name: "Sun",
    sessions: 20,
    success: 85,
    risk: 20
  }];
  return <div className="p-8 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Performance Analytics</h1>
          <p className="text-slate-500 mt-1">Key metrics for onboarding volume and AI accuracy.</p>
        </div>
        <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Last 7 Days</option>
          <option>This Month</option>
          <option>This Quarter</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Users className="w-5 h-5" /></div>
              <Badge variant="success" className="text-[10px]">+14%</Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Sessions</p>
              <h2 className="text-3xl font-bold text-slate-900">293</h2>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><ShieldCheck className="w-5 h-5" /></div>
              <Badge variant="success" className="text-[10px]">+2.1%</Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Auto-Approval Rate</p>
              <h2 className="text-3xl font-bold text-slate-900">92.4%</h2>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><TrendingUp className="w-5 h-5" /></div>
              <Badge variant="destructive" className="text-[10px]">+5.3%</Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Manual Review Req.</p>
              <h2 className="text-3xl font-bold text-slate-900">7.6%</h2>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Clock className="w-5 h-5" /></div>
              <Badge variant="success" className="text-[10px]">-1m 20s</Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Avg. Handle Time</p>
              <h2 className="text-3xl font-bold text-slate-900">04:12</h2>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="col-span-1">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle>Session Volume</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{
                  fill: '#64748b',
                  fontSize: 12
                }} />
                  <YAxis axisLine={false} tickLine={false} tick={{
                  fill: '#64748b',
                  fontSize: 12
                }} />
                  <Tooltip contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} />
                  <Area type="monotone" dataKey="sessions" stroke="#3b82f6" strokeWidth={3} fill="url(#colorSessions)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="border-b border-slate-100 pb-4">
            <CardTitle>Risk vs Auto-Approval</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{
                  fill: '#64748b',
                  fontSize: 12
                }} />
                  <YAxis axisLine={false} tickLine={false} tick={{
                  fill: '#64748b',
                  fontSize: 12
                }} />
                  <Tooltip cursor={{
                  fill: '#f1f5f9'
                }} contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} />
                  <Bar dataKey="success" stackId="a" fill="#10b981" radius={[0, 0, 4, 4]} />
                  <Bar dataKey="risk" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
}