import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from "../components/ui/shared";
import { 
  Download, FileCheck, ShieldAlert, TrendingUp, AlertTriangle, 
  ChevronDown, MessageSquare, Briefcase, FileText 
} from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

const MOCK_DATA = [
  { term: 12, rate: 5.5, payment: 850 },
  { term: 24, rate: 6.2, payment: 450 },
  { term: 36, rate: 6.8, payment: 320 },
  { term: 48, rate: 7.1, payment: 260 },
  { term: 60, rate: 7.5, payment: 220 },
];

export function CustomerResults() {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Application Results</h1>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-500" />
              Verified & Approved via Aadhaar e-KYC
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column: Profile & Insights */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-4 border-b border-slate-100">
                <CardTitle className="text-base flex items-center justify-between">
                  Customer Profile
                  <Badge variant="success">Approved</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">
                    AM
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Arjun Mehta</h3>
                    <p className="text-sm text-slate-500">Aadhaar: XXXX-XXXX-1234</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-slate-500 block mb-1">Income</span>
                    <span className="font-medium">₹18,00,000/yr</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block mb-1">Employment</span>
                    <span className="font-medium">Full-Time</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4 border-b border-slate-100">
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  AI Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-5">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">Risk Profile</span>
                    <Badge variant="success">Low</Badge>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">AI Confidence</span>
                    <span className="text-sm font-bold text-blue-600">98%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Persona Classification</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Prime Borrower</Badge>
                    <Badge variant="secondary">Tech Savvy</Badge>
                    <Badge variant="secondary">Homeowner</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-base flex items-center gap-2 text-amber-900">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  Fraud Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700">Face match confirmed against UIDAI database.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-slate-700">No synthetic identity markers detected.</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-amber-800 font-medium">Device location differs from home address (Pune) by 150 km. (Flagged for agent review)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Loan Offer & Sim */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
                <Badge variant="default" className="bg-white/20 hover:bg-white/30 text-white mb-4 border-none backdrop-blur-md">
                  Pre-Approved Offer
                </Badge>
                <h2 className="text-4xl font-extrabold mb-2">Up to ₹10,00,000</h2>
                <p className="text-blue-100 text-lg">Personal Loan at 10.5% APR</p>
              </div>
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-end mb-4">
                      <h3 className="font-semibold text-slate-900 text-lg">Smart Offer Simulator</h3>
                      <span className="text-2xl font-bold text-blue-600">₹{loanAmount.toLocaleString('en-IN')}</span>
                    </div>
                    
                    <input 
                      type="range" 
                      min="50000" 
                      max="1000000" 
                      step="10000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>₹50,000</span>
                      <span>₹10,00,000</span>
                    </div>
                  </div>

                  <div className="h-64 w-full mt-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={MOCK_DATA.map(d => ({ ...d, payment: (loanAmount / d.term) * (1 + d.rate / 100) }))}>
                        <defs>
                          <linearGradient id="colorPayment" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="term" tickFormatter={(v) => `${v}mo`} axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(v) => `₹${(v/1000).toFixed(0)}k`} />
                        <Tooltip 
                          formatter={(value: number) => [`₹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`, "Monthly Payment"]}
                          labelFormatter={(label) => `${label} Months`}
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        />
                        <Area type="monotone" dataKey="payment" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorPayment)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="flex justify-end gap-4 border-t border-slate-100 pt-6">
                    <Button variant="outline" size="lg">Modify Terms</Button>
                    <Button size="lg">Accept Offer</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader 
                className="cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setShowTranscript(!showTranscript)}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-slate-500" />
                    Session Transcript
                  </CardTitle>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${showTranscript ? "rotate-180" : ""}`} />
                </div>
              </CardHeader>
              {showTranscript && (
                <CardContent className="border-t border-slate-100 pt-6 bg-slate-50/50">
                  <div className="space-y-4">
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-semibold text-blue-600 mb-1">AI Agent</span>
                      <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-slate-700 shadow-sm">
                        Hello! Let's start by verifying your identity. Could you please show your Aadhaar card to the camera?
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-semibold text-slate-500 mb-1">Customer</span>
                      <div className="bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-2 text-sm shadow-sm">
                        Sure, here is my Aadhaar card.
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-semibold text-blue-600 mb-1">AI Agent</span>
                      <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-slate-700 shadow-sm">
                        Thank you. I've captured that. Your Aadhaar e-KYC is verified.
                      </div>
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckCircleIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
