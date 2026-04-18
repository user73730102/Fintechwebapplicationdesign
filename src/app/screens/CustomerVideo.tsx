import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button, Card, CardContent } from "../components/ui/shared";
import { Mic, MicOff, Camera, MessageSquare, Send, CheckCircle2, ShieldAlert } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CustomerVideo() {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "ai", text: "Hello! I'm your AI onboarding assistant. Let's start by verifying your identity. Could you please show your ID to the camera and state your full name?" }
  ]);
  const [stage, setStage] = useState(0); // 0: init, 1: showing id, 2: processing

  const handleSend = () => {
    if (!inputText.trim()) return;
    
    setMessages([...messages, { id: Date.now(), sender: "user", text: inputText }]);
    setInputText("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        sender: "ai", 
        text: "Thank you. I've captured that. We are now analyzing your document and profile." 
      }]);
      setStage(2);
      
      // Auto-navigate to processing after a brief delay
      setTimeout(() => {
        navigate("/onboarding/processing");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6">
        <div className="flex items-center gap-2 text-white">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="font-medium">Secure Session Active</span>
        </div>
        <div className="text-slate-400 text-sm">Session ID: #8892-XT</div>
      </header>

      <main className="flex-1 p-6 flex flex-col lg:flex-row gap-6 h-[calc(100vh-4rem)]">
        {/* Left: Video Area */}
        <div className="flex-1 flex flex-col gap-4 relative">
          <div className="flex-1 bg-slate-900 rounded-2xl overflow-hidden relative border border-slate-800 flex items-center justify-center shadow-2xl">
            {/* Simulated Webcam Feed */}
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000"
              alt="User Webcam"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            
            {/* Overlay UI */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
              <div className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-sm font-medium border border-white/10 flex items-center gap-2">
                <Camera className="w-4 h-4" />
                HD Camera Active
              </div>
              {stage === 2 && (
                <div className="bg-emerald-500/20 text-emerald-400 backdrop-blur-md px-3 py-1.5 rounded-lg text-sm font-medium border border-emerald-500/20 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  ID Captured
                </div>
              )}
            </div>

        {/* AI Assistant PIP (Speech Bubble) */}
        <div className="absolute bottom-8 right-8 w-28 h-28 bg-slate-900/95 backdrop-blur-xl rounded-3xl rounded-br-sm border-2 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.4)] flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent animate-pulse rounded-3xl rounded-br-sm" />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <MessageSquare className="w-8 h-8 text-blue-400" />
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-6 left-6 flex gap-3">
              <Button 
                variant={isMuted ? "destructive" : "secondary"}
                size="icon" 
                className="rounded-full w-12 h-12 shadow-lg backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/10"
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff className="w-5 h-5 text-white" /> : <Mic className="w-5 h-5 text-white" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Transcript & Chat */}
        <div className="w-full lg:w-[400px] bg-slate-900 rounded-2xl border border-slate-800 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-900">
            <MessageSquare className="w-5 h-5 text-blue-400" />
            <h2 className="font-semibold text-white">Live Transcript</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}>
                <div className={`text-xs text-slate-500 mb-1 px-1`}>
                  {msg.sender === "user" ? "You" : "AI Assistant"}
                </div>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                  msg.sender === "user" 
                    ? "bg-blue-600 text-white rounded-br-none" 
                    : "bg-slate-800 text-slate-100 rounded-bl-none border border-slate-700"
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-slate-800 bg-slate-900/50">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Type or speak your response..."
                className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button size="icon" className="rounded-xl shrink-0 bg-blue-600 hover:bg-blue-700" onClick={handleSend}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500">
              <ShieldAlert className="w-3 h-3" />
              End-to-end encrypted session
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
