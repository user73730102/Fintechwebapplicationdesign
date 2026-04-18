import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/shared";
import { ArrowRight, Briefcase, FileText, CheckCircle2 } from "lucide-react";

export function StandardApplication() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="w-full bg-white border-b border-slate-200 py-4 px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">FinTrust</span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto p-6 md:p-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
            Standard Application
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's get started
          </h1>
          <p className="text-slate-500 mt-2 text-lg">
            Please fill out your details to apply. If you'd like to skip the paperwork, <a href="#" onClick={() => navigate("/onboarding/video")} className="text-blue-600 underline">try our AI Video Onboarding</a>.
          </p>
        </div>

        <Card className="shadow-lg border-slate-200/60">
          <CardHeader className="bg-slate-50 border-b border-slate-100">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Personal Information</CardTitle>
              <div className="text-sm font-medium text-slate-400">Step {step} of 3</div>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full mt-4">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} />
            </div>
          </CardHeader>
          
          <CardContent className="p-6 md:p-8 space-y-6">
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input type="email" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input type="tel" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="(555) 000-0000" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Home Address</label>
                  <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="123 Main St" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-2">
                    <label className="text-sm font-medium text-slate-700">City</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="Springfield" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">ZIP</label>
                    <input type="text" className="w-full border border-slate-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="12345" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4 animate-in fade-in">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900">Employment Details</h4>
                    <p className="text-sm text-blue-700 mt-1">Help us tailor the best financial products for you.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Employment Status</label>
                  <select className="w-full border border-slate-300 rounded-lg px-4 py-2.5 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow">
                    <option>Full-Time Employed</option>
                    <option>Part-Time Employed</option>
                    <option>Self-Employed</option>
                    <option>Student</option>
                    <option>Retired</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Annual Income</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">$</span>
                    <input type="number" className="w-full border border-slate-300 rounded-lg pl-8 pr-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" placeholder="75000" />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 flex justify-between">
            {step > 1 ? (
              <Button variant="outline" onClick={() => setStep(s => s - 1)}>Back</Button>
            ) : (
              <div /> // Spacer
            )}
            
            {step < 3 ? (
              <Button className="px-8 gap-2 shadow-sm" onClick={() => setStep(s => s + 1)}>
                Continue <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button className="px-8 gap-2 bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 text-white" onClick={() => navigate("/onboarding/processing")}>
                Submit Application <CheckCircle2 className="w-4 h-4" />
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
