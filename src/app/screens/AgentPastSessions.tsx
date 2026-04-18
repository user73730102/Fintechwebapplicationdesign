import React from "react";
import { Card, CardHeader, CardTitle, CardContent, Badge, Button } from "../components/ui/shared";
import { Download, Search, Filter, Calendar } from "lucide-react";

export function AgentPastSessions() {
  const pastSessions = [
    { id: "1092-ZX", name: "Alice Johnson", date: "Oct 24, 2023", duration: "14m 20s", status: "Approved", risk: "Low" },
    { id: "1091-QA", name: "Robert Smith", date: "Oct 24, 2023", duration: "08m 15s", status: "Rejected", risk: "High" },
    { id: "1090-PL", name: "Maria Garcia", date: "Oct 23, 2023", duration: "11m 45s", status: "Manual Review", risk: "Medium" },
    { id: "1089-MN", name: "James Wilson", date: "Oct 23, 2023", duration: "09m 30s", status: "Approved", risk: "Low" },
    { id: "1088-KJ", name: "Patricia Brown", date: "Oct 22, 2023", duration: "15m 10s", status: "Approved", risk: "Low" },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Past Sessions</h1>
          <p className="text-slate-500 mt-1">Review historical onboarding data and outcomes.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      <Card>
        <div className="p-4 border-b border-slate-100 flex gap-4 bg-slate-50/50">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or ID..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" className="gap-2"><Filter className="w-4 h-4" /> Filter</Button>
          <Button variant="outline" className="gap-2"><Calendar className="w-4 h-4" /> Date Range</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-100">
              <tr>
                <th className="px-6 py-4">Session ID</th>
                <th className="px-6 py-4">Customer Name</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Risk Score</th>
                <th className="px-6 py-4">Outcome</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pastSessions.map((session) => (
                <tr key={session.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-blue-600">#{session.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{session.name}</td>
                  <td className="px-6 py-4 text-slate-500">{session.date}</td>
                  <td className="px-6 py-4 text-slate-500">{session.duration}</td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 ${
                      session.risk === 'High' ? 'text-amber-600' : session.risk === 'Medium' ? 'text-blue-600' : 'text-emerald-600'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        session.risk === 'High' ? 'bg-amber-500' : session.risk === 'Medium' ? 'bg-blue-500' : 'bg-emerald-500'
                      }`} />
                      {session.risk}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={
                      session.status === 'Approved' ? 'success' : 
                      session.status === 'Rejected' ? 'destructive' : 'warning'
                    }>
                      {session.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
