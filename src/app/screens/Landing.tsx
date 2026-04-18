import React from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/shared";
import { ShieldCheck, Video, FileText, ChevronRight } from "lucide-react";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="w-full bg-white border-b border-slate-200 py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">FinTrust</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Products</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Solutions</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Support</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">Log in</Button>
          <Button onClick={() => navigate("/agent")}>Agent Portal</Button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New: AI-Powered Onboarding
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Open your account in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">minutes</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experience our next-generation secure onboarding. Verify your identity and get tailored financial products instantly using our advanced AI assistant.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-lg shadow-blue-600/20" onClick={() => navigate("/onboarding/info")}>
              <Video className="w-5 h-5 mr-2" />
              Start Secure Onboarding
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Live Verification</h3>
              <p className="text-sm text-slate-500">Secure video check to confirm your identity instantly.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Bank-Grade Security</h3>
              <p className="text-sm text-slate-500">Your data is encrypted and protected with industry-leading standards.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <ChevronRight className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Instant Decisions</h3>
              <p className="text-sm text-slate-500">Get customized offers and account details in real-time.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
