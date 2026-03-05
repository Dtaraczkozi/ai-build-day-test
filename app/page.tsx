"use client";

import { useState } from "react";
import {
  Smartphone,
  Battery,
  Home,
  BarChart2,
  Brain,
  Trophy,
  Twitter,
  Youtube,
  Sparkles,
  ArrowRight,
  Timer,
  Zap,
  ChevronRight,
  Wind,
  Activity,
  Star,
  Instagram,
  Play,
  CheckCircle,
} from "lucide-react";

/* ─── helpers ─────────────────────────────────────── */
function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 h-7" style={{ background: "#0F172A" }}>
      <span className="text-xs font-semibold" style={{ color: "#E2E8F0" }}>9:41</span>
      <Battery size={14} style={{ color: "#E2E8F0" }} />
    </div>
  );
}

function BottomNav({ active }: { active: "home" | "stats" | "train" | "rewards" }) {
  const items = [
    { id: "home", icon: Home, label: "Home" },
    { id: "stats", icon: BarChart2, label: "Stats" },
    { id: "train", icon: Brain, label: "Train" },
    { id: "rewards", icon: Trophy, label: "Rewards" },
  ] as const;
  return (
    <div
      className="flex items-center justify-around px-2 shrink-0"
      style={{ background: "#1E293B", height: 58, borderTop: "1px solid #334155" }}
    >
      {items.map(({ id, icon: Icon, label }) => (
        <div key={id} className="flex flex-col items-center justify-center gap-1" style={{ width: 48, height: 44 }}>
          <Icon size={20} style={{ color: active === id ? "#7C3AED" : "#475569" }} />
          <span
            className="text-[9px]"
            style={{ color: active === id ? "#7C3AED" : "#475569", fontWeight: active === id ? 600 : 400 }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Screen 1: Home Dashboard ───────────────────── */
function HomeDashboard() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden" style={{ background: "#0F172A" }}>
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-4" style={{ height: 60 }}>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px]" style={{ color: "#94A3B8" }}>Good Morning</span>
          <span className="text-base font-bold" style={{ color: "#F1F5F9" }}>Jane Smith</span>
        </div>
        <div
          className="flex items-center justify-center rounded-full text-xs font-bold text-white"
          style={{ width: 36, height: 36, background: "#7C3AED" }}
        >
          JS
        </div>
      </div>

      {/* Usage Card */}
      <div className="mx-3 rounded-xl p-3.5 flex flex-col gap-2" style={{ background: "#1E293B" }}>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold" style={{ color: "#94A3B8" }}>Today's Screen Time</span>
          <span className="text-[9px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: "#DC2626" }}>
            Over limit
          </span>
        </div>
        <div className="flex items-center gap-2 h-12" />
        <span className="text-3xl font-bold" style={{ color: "#F1F5F9" }}>3h 42m</span>
        {/* Progress bar */}
        <div className="rounded-full h-1.5 w-full" style={{ background: "#334155" }}>
          <div className="rounded-full h-1.5" style={{ width: "74%", background: "#DC2626" }} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[9px]" style={{ color: "#64748B" }}>0h</span>
          <span className="text-[9px]" style={{ color: "#64748B" }}>Goal: 3h 00m</span>
          <span className="text-[9px]" style={{ color: "#64748B" }}>5h max</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="flex gap-2 mx-3 mt-2" style={{ height: 72 }}>
        {[
          { value: "7", label: "Day Streak", color: "#F472B6" },
          { value: "42", label: "XP Today", color: "#34D399" },
          { value: "#4", label: "Leaderboard", color: "#FBBF24" },
        ].map(({ value, label, color }) => (
          <div
            key={label}
            className="flex-1 flex flex-col items-center justify-center gap-1 rounded-xl"
            style={{ background: "#1E293B" }}
          >
            <span className="text-lg font-bold" style={{ color }}>{value}</span>
            <span className="text-[9px]" style={{ color: "#64748B" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* App Limits */}
      <div className="flex items-center justify-between px-4 mt-2" style={{ paddingTop: 8, paddingBottom: 4 }}>
        <span className="text-xs font-bold" style={{ color: "#F1F5F9" }}>App Limits</span>
        <span className="text-[11px]" style={{ color: "#7C3AED" }}>Edit</span>
      </div>

      {/* Twitter row */}
      <div className="flex items-center gap-2.5 px-4" style={{ height: 44 }}>
        <div className="flex items-center justify-center rounded-lg shrink-0" style={{ width: 28, height: 28, background: "#1D4ED8" }}>
          <Twitter size={14} className="text-white" />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-[11px] font-semibold" style={{ color: "#CBD5E1" }}>Twitter / X</span>
          <div className="rounded h-1" style={{ background: "#334155" }}>
            <div className="rounded h-1" style={{ width: "87%", background: "#F59E0B" }} />
          </div>
        </div>
        <span className="text-[11px] font-bold" style={{ color: "#F59E0B" }}>87%</span>
      </div>

      {/* YouTube row */}
      <div className="flex items-center gap-2.5 px-4" style={{ height: 44 }}>
        <div className="flex items-center justify-center rounded-lg shrink-0" style={{ width: 28, height: 28, background: "#DC2626" }}>
          <Youtube size={14} className="text-white" />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-[11px] font-semibold" style={{ color: "#CBD5E1" }}>YouTube</span>
          <div className="rounded h-1" style={{ background: "#334155" }}>
            <div className="rounded h-1 w-full" style={{ background: "#EF4444" }} />
          </div>
        </div>
        <span className="text-[11px] font-bold" style={{ color: "#EF4444" }}>BLOCKED</span>
      </div>

      {/* AI Suggestion */}
      <div
        className="mx-3 mt-2 flex items-center gap-2.5 rounded-xl p-2.5"
        style={{ background: "#1E293B", border: "1px solid #7C3AED" }}
      >
        <div className="flex items-center justify-center rounded-full shrink-0" style={{ width: 28, height: 28, background: "#7C3AED" }}>
          <Sparkles size={14} className="text-white" />
        </div>
        <div className="flex flex-col gap-0.5 flex-1">
          <span className="text-[9px] font-bold" style={{ color: "#A78BFA" }}>AI Suggestion</span>
          <span className="text-[11px] font-semibold" style={{ color: "#E2E8F0" }}>Try 10 min meditation now</span>
        </div>
        <div
          className="flex items-center justify-center rounded-full shrink-0"
          style={{ width: 32, height: 32, background: "#7C3AED" }}
        >
          <ArrowRight size={14} className="text-white" />
        </div>
      </div>

      <div className="flex-1" />
      <BottomNav active="home" />
    </div>
  );
}

/* ─── Screen 2: Usage Analytics ─────────────────── */
const barData = [
  { day: "M", height: 58, color: "#475569" },
  { day: "T", height: 72, color: "#475569" },
  { day: "W", height: 90, color: "#EF4444" },
  { day: "T", height: 65, color: "#475569" },
  { day: "F", height: 80, color: "#F59E0B" },
  { day: "S", height: 48, color: "#34D399" },
  { day: "S", height: 52, color: "#34D399" },
];

function UsageAnalytics() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden" style={{ background: "#0F172A" }}>
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-4" style={{ height: 50 }}>
        <span className="text-base font-bold" style={{ color: "#F1F5F9" }}>Usage Analytics</span>
        <div className="rounded-md px-2.5 py-1.5" style={{ background: "#1E293B" }}>
          <span className="text-[10px] font-semibold" style={{ color: "#7C3AED" }}>This Week</span>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="mx-3 rounded-xl p-3.5 flex flex-col gap-3" style={{ background: "#1E293B", height: 160 }}>
        <span className="text-[10px] font-semibold" style={{ color: "#94A3B8" }}>Daily Screen Time (hours)</span>
        <div className="flex items-end justify-between flex-1 gap-1.5">
          {barData.map(({ day, height, color }, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1 justify-end h-full">
              <div className="rounded-t w-[18px]" style={{ height, background: color }} />
              <span className="text-[8px]" style={{ color: "#64748B" }}>{day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-2 mx-3 mt-2" style={{ height: 56 }}>
        {[
          { value: "3h 42m", label: "Avg / Day", color: "#EF4444" },
          { value: "-18%", label: "vs Last Week", color: "#34D399" },
          { value: "2h 30m", label: "Goal", color: "#7C3AED" },
        ].map(({ value, label, color }) => (
          <div
            key={label}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 rounded-lg"
            style={{ background: "#1E293B" }}
          >
            <span className="text-sm font-bold" style={{ color }}>{value}</span>
            <span className="text-[9px]" style={{ color: "#64748B" }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Top Apps Header */}
      <div className="flex items-center justify-between px-3.5 mt-2" style={{ height: 38, paddingTop: 8, paddingBottom: 4 }}>
        <span className="text-xs font-bold" style={{ color: "#F1F5F9" }}>Top Apps This Week</span>
      </div>

      {/* App rows */}
      {[
        { icon: Twitter, iconBg: "#1D4ED8", name: "Twitter / X", time: "1h 22m", pct: 68 },
        { icon: Youtube, iconBg: "#DC2626", name: "YouTube", time: "58m", pct: 45 },
        { icon: Instagram, iconBg: "#7C3AED", name: "Instagram", time: "42m", pct: 33 },
      ].map(({ icon: Icon, iconBg, name, time, pct }) => (
        <div key={name} className="flex items-center gap-2.5 px-3.5" style={{ height: 44 }}>
          <div className="flex items-center justify-center rounded-md shrink-0" style={{ width: 24, height: 24, background: iconBg }}>
            <Icon size={12} className="text-white" />
          </div>
          <div className="flex flex-col gap-0.5 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold" style={{ color: "#CBD5E1" }}>{name}</span>
              <span className="text-[10px]" style={{ color: "#94A3B8" }}>{time}</span>
            </div>
            <div className="rounded h-[3px] w-full" style={{ background: "#334155" }}>
              <div className="rounded h-[3px]" style={{ width: `${pct}%`, background: "#7C3AED" }} />
            </div>
          </div>
        </div>
      ))}

      {/* Weekly Summary */}
      <div className="mx-3 mt-3 rounded-xl p-3" style={{ background: "#1E293B" }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold" style={{ color: "#F1F5F9" }}>Weekly Score</span>
          <span className="text-[9px] font-semibold" style={{ color: "#34D399" }}>+12 pts vs last week</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-full h-2" style={{ background: "#334155" }}>
            <div className="rounded-full h-2" style={{ width: "68%", background: "linear-gradient(90deg, #7C3AED, #34D399)" }} />
          </div>
          <span className="text-[10px] font-bold" style={{ color: "#7C3AED" }}>68/100</span>
        </div>
      </div>

      <div className="flex-1" />
      <BottomNav active="stats" />
    </div>
  );
}

/* ─── Screen 3: Mental Training ─────────────────── */
function MentalTraining() {
  return (
    <div className="flex flex-col flex-1 overflow-hidden" style={{ background: "#0F172A" }}>
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-4" style={{ height: 50 }}>
        <span className="text-base font-bold" style={{ color: "#F1F5F9" }}>Mental Training</span>
        <div className="flex items-center gap-1 rounded-md px-2.5 py-1.5" style={{ background: "#1E293B" }}>
          <Zap size={10} style={{ color: "#FBBF24" }} />
          <span className="text-[10px] font-semibold" style={{ color: "#FBBF24" }}>7 day streak</span>
        </div>
      </div>

      {/* Recommendation chip */}
      <div className="mx-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg" style={{ background: "#1E293B" }}>
        <Sparkles size={11} style={{ color: "#A78BFA" }} />
        <span className="text-[10px] font-medium" style={{ color: "#94A3B8" }}>
          Recommended for you
        </span>
      </div>

      {/* Featured training card */}
      <div className="mx-3 mt-2 rounded-xl p-3.5 flex flex-col gap-2.5" style={{ background: "linear-gradient(135deg, #059669 0%, #0891B2 100%)" }}>
        <div className="flex items-center gap-1.5">
          <Wind size={12} className="text-white opacity-80" />
          <span className="text-[9px] font-bold text-white opacity-80 tracking-wide uppercase">Meditation</span>
        </div>
        <span className="text-sm font-bold text-white leading-tight">Morning Clarity<br />Meditation</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Timer size={10} className="text-white opacity-70" />
            <span className="text-[10px] text-white opacity-70">10 min</span>
          </div>
          <div className="flex items-center gap-1">
            <Activity size={10} className="text-white opacity-70" />
            <span className="text-[10px] text-white opacity-70">Beginner</span>
          </div>
        </div>
        <button className="flex items-center justify-center gap-1.5 rounded-full py-2 text-[11px] font-semibold" style={{ background: "rgba(255,255,255,0.9)", color: "#059669" }}>
          <Play size={10} />
          Start Session
        </button>
      </div>

      {/* More Trainings */}
      <div className="flex items-center justify-between px-3.5 mt-2" style={{ paddingTop: 8, paddingBottom: 4 }}>
        <span className="text-xs font-bold" style={{ color: "#F1F5F9" }}>More Trainings</span>
        <span className="text-[10px]" style={{ color: "#7C3AED" }}>See all</span>
      </div>

      {/* Training chips */}
      <div className="flex gap-2 px-3.5">
        {[
          { icon: Wind, label: "Breathe", color: "#0891B2", bg: "#0E2A3A" },
          { icon: Brain, label: "Focus", color: "#7C3AED", bg: "#1E1040" },
          { icon: Star, label: "Memory", color: "#F59E0B", bg: "#2A1E00" },
        ].map(({ icon: Icon, label, color, bg }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-1 rounded-xl flex-1"
            style={{ height: 64, background: bg }}
          >
            <Icon size={18} style={{ color }} />
            <span className="text-[10px] font-semibold" style={{ color }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Score / XP progress */}
      <div className="mx-3 mt-2 rounded-xl p-3" style={{ background: "#1E293B" }}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle size={13} style={{ color: "#34D399" }} />
            <span className="text-[11px] font-semibold" style={{ color: "#F1F5F9" }}>Training Score</span>
          </div>
          <span className="text-[10px] font-bold" style={{ color: "#34D399" }}>342 / 500</span>
        </div>
        <div className="rounded-full h-2 w-full" style={{ background: "#334155" }}>
          <div className="rounded-full h-2" style={{ width: "68%", background: "linear-gradient(90deg, #059669, #34D399)" }} />
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-[9px]" style={{ color: "#64748B" }}>Current level: Bronze</span>
          <span className="text-[9px]" style={{ color: "#64748B" }}>158 XP to Silver</span>
        </div>
      </div>

      {/* Recent completions */}
      <div className="mx-3 mt-2 flex items-center gap-2">
        {[
          { label: "5-min focus", color: "#7C3AED" },
          { label: "Box breathing", color: "#0891B2" },
          { label: "Body scan", color: "#059669" },
        ].map(({ label, color }) => (
          <div
            key={label}
            className="flex items-center gap-1 rounded-full px-2 py-0.5"
            style={{ background: "#1E293B", border: `1px solid ${color}33` }}
          >
            <CheckCircle size={9} style={{ color }} />
            <span className="text-[9px]" style={{ color: "#94A3B8" }}>{label}</span>
          </div>
        ))}
      </div>

      <div className="flex-1" />
      <BottomNav active="train" />
    </div>
  );
}

/* ─── Phone Mockup ───────────────────────────────── */
function PhoneMockup({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-xs font-bold tracking-wide uppercase" style={{ color: "#7D8590" }}>{label}</span>
      <div
        className="relative rounded-[40px] overflow-hidden"
        style={{
          width: 280,
          height: 572,
          background: "#1C1C1E",
          border: "8px solid #3F3F46",
          boxShadow: "0 0 0 1px #52525b, 0 32px 64px rgba(0,0,0,0.6)",
        }}
      >
        <div
          className="flex flex-col overflow-hidden rounded-[30px]"
          style={{ width: "100%", height: "100%" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* ─── Top Bar ─────────────────────────────────────── */
function TopBar() {
  return (
    <div
      className="flex items-center gap-4 px-8 shrink-0"
      style={{
        height: 60,
        background: "#161B22",
        borderBottom: "1px solid #30363D",
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center justify-center rounded-lg shrink-0"
        style={{ width: 32, height: 32, background: "#7C3AED" }}
      >
        <Smartphone size={16} className="text-white" />
      </div>

      {/* Title */}
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-bold" style={{ color: "#E6EDF3" }}>Project Doomscrolling</span>
        <span className="text-[11px]" style={{ color: "#7D8590" }}>App UI Concept — 3 Key Screens</span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Badges */}
      <div className="flex items-center gap-2">
        <div
          className="rounded-md px-3 py-1.5 text-[11px]"
          style={{ background: "#21262D", color: "#7D8590", border: "1px solid #30363D" }}
        >
          v0.1 Concept
        </div>
        <div
          className="rounded-md px-3 py-1.5 text-[11px] font-semibold text-white"
          style={{ background: "#238636" }}
        >
          AI Build Day
        </div>
      </div>
    </div>
  );
}

/* ─── Tab Navigation ─────────────────────────────── */
type Tab = "home" | "analytics" | "training";

function TabBar({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  const tabs: { id: Tab; label: string; color: string }[] = [
    { id: "home", label: "Home Dashboard", color: "#7C3AED" },
    { id: "analytics", label: "Usage Analytics", color: "#0891B2" },
    { id: "training", label: "Mental Training", color: "#059669" },
  ];
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {tabs.map(({ id, label, color }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className="px-4 py-2 rounded-full text-xs font-semibold transition-all"
          style={
            active === id
              ? { background: color, color: "#fff" }
              : { background: "#1E293B", color: "#7D8590", border: "1px solid #30363D" }
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/* ─── Main Page ───────────────────────────────────── */
export default function Page() {
  const [activeTab, setActiveTab] = useState<Tab>("home");

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#0d1117" }}>
      <TopBar />

      {/* Desktop: all 3 phones side by side */}
      <div className="hidden lg:flex flex-1 items-start justify-center gap-10 py-12 px-8">
        <PhoneMockup label="Home Dashboard">
          <HomeDashboard />
        </PhoneMockup>
        <PhoneMockup label="Usage Analytics">
          <UsageAnalytics />
        </PhoneMockup>
        <PhoneMockup label="Mental Training">
          <MentalTraining />
        </PhoneMockup>
      </div>

      {/* Mobile / Tablet: tabbed single phone */}
      <div className="flex lg:hidden flex-col items-center px-4 pb-8">
        <TabBar active={activeTab} onChange={setActiveTab} />
        <PhoneMockup
          label={
            activeTab === "home"
              ? "Home Dashboard"
              : activeTab === "analytics"
              ? "Usage Analytics"
              : "Mental Training"
          }
        >
          {activeTab === "home" && <HomeDashboard />}
          {activeTab === "analytics" && <UsageAnalytics />}
          {activeTab === "training" && <MentalTraining />}
        </PhoneMockup>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center py-4 text-[11px]" style={{ color: "#475569" }}>
        Project Doomscrolling — Screen Time Management App Concept
      </div>
    </div>
  );
}
