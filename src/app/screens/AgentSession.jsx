import React, { useState } from "react";
import { useParams } from "react-router";
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from "../components/ui/shared";
import { Mic, ShieldAlert, Cpu, Database, Send, AlertCircle, FileText, MessageSquare } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
export function AgentSession() {
  const {
    id
  } = useParams();
  const [agentInput, setAgentInput] = useState("");
  const [activeTab, setActiveTab] = useState("data");
  return <div className="flex h-full bg-slate-100 p-6 gap-6">
      {/* Left Column: Video & Live Transcript (60%) */}
      <div className="flex-[0.6] flex flex-col gap-6 h-[calc(100vh-8rem)] min-w-0">
        {/* Customer Video Feed */}
        <Card className="shrink-0 overflow-hidden bg-slate-900 border-slate-800 relative aspect-video flex items-center justify-center shadow-lg">
          <ImageWithFallback src="https://www.shutterstock.com/shutterstock/videos/3783125411/thumb/11.jpg?ip=x480" alt="User Webcam" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          {/* Live Badge */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-bold tracking-wider border border-white/10 flex items-center gap-2 z-10">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            LIVE SESSION
          </div>
          {/* AI Overlay Bubble */}
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-slate-900/95 backdrop-blur-md rounded-2xl rounded-br-sm border-2 border-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] z-10">
            <MessageSquare className="w-6 h-6 text-blue-400" />
            <div className="absolute inset-0 bg-blue-500/20 animate-ping rounded-2xl" />
          </div>
        </Card>

        {/* Live Transcript */}
        <Card className="flex-1 flex flex-col min-h-0 border-slate-200">
          <CardHeader className="py-4 border-b border-slate-100 bg-white shrink-0">
            <CardTitle className="text-base flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mic className="w-5 h-5 text-blue-500 animate-pulse" />
                Live Transcript
              </div>
              <Badge variant="outline" className="bg-slate-50 text-slate-500">
                ID: #{id}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            <div className="flex flex-col gap-1.5 max-w-[85%]">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider ml-1">
                AI Agent
              </span>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 shadow-sm leading-relaxed">
                Hello Arjun. Could you verify your current
                address?
              </div>
            </div>

            <div className="flex flex-col gap-1.5 items-end ml-auto max-w-[85%]">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                Customer (Arjun)
              </span>
              <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none text-sm shadow-sm leading-relaxed">
                Yes, it's Sector 5, Baner, Pune.
              </div>
            </div>

            <div className="flex flex-col gap-1.5 max-w-[85%]">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider ml-1">
                AI Agent
              </span>
              <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none text-sm text-slate-700 shadow-sm leading-relaxed">
                Got it. I see you're applying for a ₹10,00,000
                personal loan. What is the primary purpose of
                this loan?
              </div>
            </div>

            <div className="flex flex-col gap-1.5 items-end ml-auto max-w-[85%]">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                Customer (Arjun)
              </span>
              <div className="bg-slate-200 animate-pulse w-24 h-10 rounded-2xl rounded-tr-none" />
            </div>
          </CardContent>

          {/* Manual Override Input */}
          <div className="p-4 border-t border-slate-100 bg-white shrink-0">
            <label className="text-xs font-bold text-slate-500 block mb-2 uppercase tracking-wider">
              Direct AI Intervention
            </label>
            <div className="flex gap-3">
              <input type="text" placeholder="E.g., Prompt the AI to ask about employment history..." className="flex-1 text-sm border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-transparent transition-shadow" value={agentInput} onChange={e => setAgentInput(e.target.value)} />
              <Button className="shrink-0 h-auto px-6 gap-2 rounded-xl shadow-sm bg-blue-600 hover:bg-blue-700">
                Send <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Right Column: AI Analysis & Data Tabs (40%) */}
      <Card className="flex-[0.4] flex flex-col h-[calc(100vh-8rem)] border-slate-200">
        {/* Tabs Header */}
        <div className="flex p-2 bg-slate-50/80 border-b border-slate-100 gap-1 shrink-0">
          <button onClick={() => setActiveTab("data")} className={`flex-1 border border-primary flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${activeTab === "data" ? "bg-white text-slate-900 shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"} text-[#3369bd]`}>
            <Database className="w-4 h-4" /> Extracted
          </button>
          <button onClick={() => setActiveTab("reasoning")} className={`flex-1 border border-primary flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${activeTab === "reasoning" ? "bg-white text-indigo-700 shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`}>
            <Cpu className="w-4 h-4" /> AI Reasoning
          </button>
          <button onClick={() => setActiveTab("risk")} className={`flex-1 border border-primary flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${activeTab === "risk" ? "bg-white text-amber-700 shadow-sm border border-slate-200/50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-100"}`}>
            <ShieldAlert className="w-4 h-4" /> Risk
            <span className="w-4 h-4 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center ml-1">
              1
            </span>
          </button>
        </div>

        {/* Tab Content Area */}
        <CardContent className="flex-1 overflow-y-auto p-6 bg-slate-50/30">
          {/* Data Tab */}
          {activeTab === "data" && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-500" />{" "}
                  Customer Profile
                </h3>
                <Badge variant="success">95% Complete</Badge>
              </div>
              <div className="grid grid-cols-1 gap-4 text-sm">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Full Name
                  </span>
                  <span className="font-medium text-slate-900 text-base">
                    Arjun Mehta
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between">
                    Identity Check
                    <span className="text-emerald-600 flex items-center gap-1">
                      <FileText className="w-3 h-3" /> Confirmed
                    </span>
                  </span>
                  <span className="font-medium text-slate-900 text-base">
                    Aadhaar Card verified
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Address
                  </span>
                  <span className="font-medium text-slate-900 text-base">
                    Sector 5, Baner, Pune
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Est. Income
                  </span>
                  <span className="font-medium text-slate-900 text-base">
                    ₹18,00,000/yr
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex flex-col gap-1 border-blue-200 ring-1 ring-blue-500/10">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    Loan Purpose (Extracting)
                  </span>
                  <span className="font-medium text-slate-900 text-base">
                    Home Renovation
                  </span>
                </div>
              </div>
            </div>}

          {/* Reasoning Tab */}
          {activeTab === "reasoning" && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-indigo-500" /> Live
                AI Engine
              </h3>

              <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:left-[11px] before:w-px before:bg-slate-200">
                <div className="relative">
                  <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  </div>
                  <h4 className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                    Intent Classification
                  </h4>
                  <p className="text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    Identified goal: Personal Loan (₹10,00,000) for
                    "Home Renovation". Next required data point:
                    Income Verification.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-emerald-100 border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
                    Sentiment Analysis
                  </h4>
                  <p className="text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    Customer sentiment is positive and
                    cooperative. Voice stress levels are normal.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] w-5 h-5 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                  <h4 className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                    Context Aggregation
                  </h4>
                  <p className="text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-sm">
                    Querying internal CBS. Customer has a
                    savings account opened in 2018 with average
                    balance of ₹1,25,000.
                  </p>
                </div>
              </div>
            </div>}

          {/* Risk Tab */}
          {activeTab === "risk" && <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-4">
                <ShieldAlert className="w-5 h-5 text-amber-500" />{" "}
                Compliance Checks
              </h3>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-2 rounded-full shrink-0 text-amber-600 mt-1">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-amber-900 mb-1">
                      Device Geolocation Mismatch
                    </h4>
                    <p className="text-sm text-amber-700 leading-relaxed mb-4">
                      The user's IP address indicates they are
                      150 km away from their stated home
                      address in Pune.
                    </p>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 bg-white text-sm border-amber-200 text-amber-900 hover:bg-amber-100">
                        Dismiss Flag
                      </Button>
                      <Button variant="secondary" className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-sm border-transparent">
                        Require Proof
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-full shrink-0 text-slate-500 mt-1">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-1">
                      KYC Watchlist Scan
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />{" "}
                      Clear. No matches found on OFAC or PEP
                      lists.
                    </p>
                  </div>
                </div>
              </div>
            </div>}
        </CardContent>

        {/* Global Agent Action Controls */}
        <div className="p-5 border-t border-slate-200 bg-white shrink-0">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <span className="w-full h-px bg-slate-200 flex-1"></span>
            Session Controls
            <span className="w-full h-px bg-slate-200 flex-1"></span>
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-11 text-slate-700 border-slate-300 hover:bg-slate-50 font-semibold shadow-sm">
              Escalate to Human
            </Button>
            <Button className="h-11 bg-emerald-600 hover:bg-emerald-700 font-semibold shadow-md shadow-emerald-600/20 text-white gap-2">
              Approve App <FileText className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>;
}