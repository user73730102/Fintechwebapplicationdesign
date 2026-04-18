import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Fingerprint, Database, LineChart, FileCheck2 } from "lucide-react";

export function CustomerProcessing() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 1, icon: Fingerprint, label: "Verifying Identity", detail: "Cross-referencing global databases" },
    { id: 2, icon: Database, label: "Analyzing Financial Profile", detail: "Aggregating credit bureaus" },
    { id: 3, icon: LineChart, label: "Assessing Risk Profile", detail: "Running AI fraud detection models" },
    { id: 4, icon: FileCheck2, label: "Generating Tailored Offers", detail: "Finalizing loan options" }
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(1), 2000);
    const timer2 = setTimeout(() => setCurrentStep(2), 4000);
    const timer3 = setTimeout(() => setCurrentStep(3), 6000);
    const timer4 = setTimeout(() => navigate("/onboarding/results"), 8500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white">
      <div className="w-full max-w-lg space-y-12">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-900/30 border border-blue-500/30 mb-4 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-blue-500"
            />
            <Fingerprint className="w-8 h-8 text-blue-400" />
          </motion.div>
          <h1 className="text-3xl font-bold tracking-tight">Processing Application</h1>
          <p className="text-slate-400 text-lg">Our AI is analyzing your data in real-time.</p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center gap-6">
              {/* Connecting line */}
              {index !== steps.length - 1 && (
                <div 
                  className={`absolute left-6 top-14 w-0.5 h-12 -ml-px ${
                    currentStep > index ? "bg-blue-500" : "bg-slate-800"
                  }`} 
                />
              )}
              
              <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-xl border ${
                currentStep > index 
                  ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                  : currentStep === index 
                    ? "bg-slate-800 border-blue-500 text-blue-400" 
                    : "bg-slate-900 border-slate-800 text-slate-600"
              } transition-all duration-500`}>
                <step.icon className="w-5 h-5" />
                
                {/* Ping animation for active step */}
                {currentStep === index && (
                  <span className="absolute flex h-full w-full">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-xl bg-blue-400 opacity-20"></span>
                  </span>
                )}
              </div>

              <div className="flex-1">
                <h3 className={`font-semibold ${currentStep >= index ? "text-slate-200" : "text-slate-600"} transition-colors duration-500`}>
                  {step.label}
                </h3>
                <motion.p 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: currentStep === index ? "auto" : 0, 
                    opacity: currentStep === index ? 1 : 0 
                  }}
                  className="text-sm text-slate-400 overflow-hidden"
                >
                  {step.detail}
                </motion.p>
              </div>

              {currentStep > index && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-blue-500"
                >
                  <FileCheck2 className="w-6 h-6" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
