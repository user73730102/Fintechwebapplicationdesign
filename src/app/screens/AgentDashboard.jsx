import React from "react";
import { useNavigate } from "react-router";
import { Card, Badge, Button } from "../components/ui/shared";
import { Search, Filter, Eye, AlertTriangle, Clock } from "lucide-react";
export function AgentDashboard() {
  const navigate = useNavigate();
  const sessions = [{
    id: "8892-XT",
    name: "Arjun Mehta",
    type: "Personal Loan",
    status: "active",
    risk: "low",
    time: "04:12"
  }, {
    id: "4421-AB",
    name: "Vikram Iyer",
    type: "Business Credit",
    status: "active",
    risk: "high",
    time: "12:45"
  }, {
    id: "9910-KL",
    name: "Priya Sharma",
    type: "Home Loan",
    status: "waiting",
    risk: "medium",
    time: "00:00"
  }, {
    id: "2204-ZX",
    name: "Rajat Gupta",
    type: "Two Wheeler Loan",
    status: "active",
    risk: "low",
    time: "08:30"
  }];
  return <div className="p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search sessions or customers..." className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="px-3 py-1">All (12)</Badge>
          <Badge variant="default" className="px-3 py-1">Active (3)</Badge>
          <Badge variant="destructive" className="px-3 py-1 bg-amber-100 text-amber-700 hover:bg-amber-100">Action Needed (1)</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sessions.map(session => <Card key={session.id} className="hover:shadow-md transition-shadow cursor-pointer border-slate-200 relative overflow-hidden flex flex-col" onClick={() => navigate(`/agent/session/${session.id}`)}>
            {session.risk === "high" && <div className="absolute top-0 left-0 w-full h-1 bg-amber-500" />}
            {session.status === "active" && session.risk !== "high" && <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />}
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{session.name}</h3>
                  <p className="text-xs text-slate-500">{session.type}</p>
                </div>
                <Badge variant={session.status === "active" ? "success" : "secondary"}>
                  {session.status === "active" ? "Live" : "Waiting"}
                </Badge>
              </div>

              <div className="flex-1" />

              <div className="space-y-3 mt-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Duration
                  </span>
                  <span className="font-medium text-slate-700">{session.time}</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 flex items-center gap-1">
                    <AlertTriangle className="w-4 h-4" /> Risk Score
                  </span>
                  <span className={`font-medium capitalize ${session.risk === "high" ? "text-amber-600" : session.risk === "medium" ? "text-blue-600" : "text-emerald-600"}`}>
                    {session.risk}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Button className="w-full" variant={session.risk === "high" ? "default" : "secondary"}>
                  <Eye className="w-4 h-4 mr-2" />
                  Monitor Session
                </Button>
              </div>
            </div>
          </Card>)}
      </div>
    </div>;
}