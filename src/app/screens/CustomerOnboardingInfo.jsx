import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/shared";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { ArrowRight, User, Briefcase, Info, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
export function CustomerOnboardingInfo() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  return <div className="min-h-screen bg-[#050A15] text-white flex flex-col">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <header className="relative z-10 w-full border-b border-white/5 py-4 px-6 md:px-12 flex items-center justify-between backdrop-blur-md bg-black/20">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-white tracking-tight">FinTrust</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-xs text-slate-400 font-medium px-3 py-1 bg-white/5 rounded-full border border-white/10">
            Step {step} of 2
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-6 sm:p-12">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="max-w-xl w-full">
          <div className="mb-8 text-center sm:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-2">
              Personalize your <span className="text-blue-500">experience</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Help us set up your account profile before we start the brief video verification.
            </p>
          </div>

          <Card className="bg-slate-900/40 border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
            <CardHeader className="border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/20">
                  {step === 1 ? <User className="w-5 h-5 text-blue-400" /> : <Briefcase className="w-5 h-5 text-blue-400" />}
                </div>
                <div>
                  <CardTitle className="text-lg text-white">
                    {step === 1 ? "Identity Basics" : "Financial Profile"}
                  </CardTitle>
                  <CardDescription className="text-slate-500">
                    {step === 1 ? "Let's start with who you are" : "Your current employment and goals"}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 space-y-6">
              {step === 1 && <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                      <Input id="firstName" placeholder="Arjun" className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                      <Input id="lastName" placeholder="Mehta" className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 h-11" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-300">Email Address</Label>
                    <Input id="email" type="email" placeholder="arjun@example.in" className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-300">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 h-11" />
                  </div>
                </motion.div>}

              {step === 2 && <motion.div initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Employment Status</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-11">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/10 text-white">
                        <SelectItem value="full-time">Full-Time Employed</SelectItem>
                        <SelectItem value="part-time">Part-Time Employed</SelectItem>
                        <SelectItem value="self-employed">Self-Employed</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="retired">Retired</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="income" className="text-slate-300">Approx. Annual Income</Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">₹</span>
                      <Input id="income" type="number" placeholder="12,00,000" className="bg-white/5 border-white/10 text-white placeholder:text-slate-600 h-11 pl-8" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Account Purpose</Label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-11">
                        <SelectValue placeholder="Select purpose" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/10 text-white">
                        <SelectItem value="savings">Personal Savings</SelectItem>
                        <SelectItem value="spending">Daily Spending</SelectItem>
                        <SelectItem value="investing">Investing</SelectItem>
                        <SelectItem value="business">Business Operations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </motion.div>}
            </CardContent>

            <CardFooter className="p-6 sm:p-8 pt-0 flex justify-between gap-4">
              {step > 1 ? <Button variant="ghost" onClick={() => setStep(step - 1)} className="text-slate-400 hover:text-white hover:bg-white/5">
                  Back
                </Button> : <div />}

              {step < 2 ? <Button onClick={() => setStep(step + 1)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 gap-2 h-11">
                  Continue <ArrowRight className="w-4 h-4" />
                </Button> : <Button onClick={() => navigate("/onboarding/video")} className="bg-blue-600 hover:bg-blue-700 text-white px-8 gap-2 h-11 shadow-lg shadow-blue-600/20">
                  Start Video Verification <ArrowRight className="w-4 h-4" />
                </Button>}
            </CardFooter>
          </Card>

          <div className="mt-8 flex items-center justify-center gap-6 opacity-40">
            <div className="flex items-center gap-2 text-xs font-medium">
              <ShieldCheck className="w-4 h-4" />
              AES-256 Encryption
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <Info className="w-4 h-4" />
              GDPR Compliant
            </div>
          </div>
        </motion.div>
      </main>
    </div>;
}