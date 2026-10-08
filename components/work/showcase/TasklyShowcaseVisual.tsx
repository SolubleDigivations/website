"use client";

import { motion } from "motion/react";
import { LayoutDashboard, FolderGit2, CheckSquare, Users, Calendar, BarChart3, Settings, Search } from "lucide-react";

export default function TasklyShowcaseVisual() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[480px] rounded-2xl overflow-hidden bg-[#F4F3F8] flex items-center justify-center p-4 sm:p-7 select-none">
      
      {/* Soft Blue/Purple Pastel Glow Backdrop */}
      <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-[#6C8CFF]/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-[#B18CFF]/25 blur-3xl pointer-events-none" />

      {/* Desktop Dashboard Card */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[540px] rounded-2xl bg-white p-3.5 sm:p-5 shadow-[0_20px_45px_rgba(108,140,255,0.12)] border border-[#E6E8F2]"
      >
        <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[110px_1fr] gap-3 sm:gap-4">
          
          {/* =========================================================
              SIDEBAR
              ========================================================= */}
          <div className="border-r border-gray-100 pr-2 sm:pr-3 flex flex-col justify-between py-1">
            <div className="space-y-4">
              {/* Brand Logo */}
              <div className="flex items-center gap-1.5 px-1">
                <div className="h-4 w-4 rounded-md bg-[#6C8CFF] flex items-center justify-center text-[9px] font-black text-white">
                  T
                </div>
                <span className="font-extrabold text-[10px] sm:text-[11px] text-[#111111] tracking-tight">
                  Taskly
                </span>
              </div>

              {/* Navigation Items */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 rounded-lg bg-[#6C8CFF]/15 px-2 py-1 text-[7.5px] sm:text-[8.5px] font-bold text-[#4266E8]">
                  <LayoutDashboard className="h-3 w-3" />
                  <span>Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 text-[7.5px] sm:text-[8.5px] font-medium text-gray-500 hover:text-gray-900">
                  <FolderGit2 className="h-3 w-3" />
                  <span>Projects</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 text-[7.5px] sm:text-[8.5px] font-medium text-gray-500 hover:text-gray-900">
                  <CheckSquare className="h-3 w-3" />
                  <span>Tasks</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 text-[7.5px] sm:text-[8.5px] font-medium text-gray-500 hover:text-gray-900">
                  <Users className="h-3 w-3" />
                  <span>Team</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 text-[7.5px] sm:text-[8.5px] font-medium text-gray-500 hover:text-gray-900">
                  <Calendar className="h-3 w-3" />
                  <span>Calendar</span>
                </div>
              </div>
            </div>

            {/* Bottom Settings */}
            <div className="flex items-center gap-1.5 px-2 py-1 text-[7.5px] sm:text-[8.5px] font-medium text-gray-400">
              <Settings className="h-3 w-3" />
              <span>Settings</span>
            </div>
          </div>

          {/* =========================================================
              MAIN DASHBOARD CONTENT
              ========================================================= */}
          <div className="space-y-3 sm:space-y-4">
            
            {/* Top Search & Profile Bar */}
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-gray-100">
              <div className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1 text-[7.5px] sm:text-[8.5px] text-gray-400 border border-gray-100 flex-1 max-w-[200px]">
                <Search className="h-2.5 w-2.5 text-gray-400" />
                <span>Search anything...</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-[#6C8CFF] to-[#B18CFF] text-[8px] font-bold text-white flex items-center justify-center">
                  A
                </div>
              </div>
            </div>

            {/* Greeting Header */}
            <div>
              <h4 className="text-[12px] sm:text-[14px] font-extrabold text-[#111111] tracking-tight">
                Good morning, Alex
              </h4>
              <p className="text-[7.5px] sm:text-[8.5px] text-gray-400">
                Here&apos;s what&apos;s happening today.
              </p>
            </div>

            {/* Stat Cards Row */}
            <div className="grid grid-cols-3 gap-2">
              {/* Stat 1 */}
              <div className="rounded-xl bg-[#F8F9FD] p-2 sm:p-2.5 border border-[#E9ECF7]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] sm:text-[15px] font-black text-[#111111]">12</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#52D9AD]" />
                </div>
                <span className="text-[6.5px] sm:text-[7.5px] font-semibold text-gray-500">Active Projects</span>
              </div>

              {/* Stat 2 */}
              <div className="rounded-xl bg-[#F8F9FD] p-2 sm:p-2.5 border border-[#E9ECF7]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] sm:text-[15px] font-black text-[#111111]">28</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6C8CFF]" />
                </div>
                <span className="text-[6.5px] sm:text-[7.5px] font-semibold text-gray-500">Tasks Completed</span>
              </div>

              {/* Stat 3 */}
              <div className="rounded-xl bg-[#F8F9FD] p-2 sm:p-2.5 border border-[#E9ECF7]">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] sm:text-[15px] font-black text-[#111111]">4</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B18CFF]" />
                </div>
                <span className="text-[6.5px] sm:text-[7.5px] font-semibold text-gray-500">Team Members</span>
              </div>
            </div>

            {/* Recent Tasks List */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-center justify-between text-[8px] sm:text-[9px] font-bold text-[#111111]">
                <span>Recent Tasks</span>
                <span className="text-[7px] sm:text-[8px] text-gray-400 font-normal">Assignment</span>
              </div>

              {/* Task 1 */}
              <div className="flex items-center justify-between rounded-lg bg-[#FAFAFC] p-2 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-md bg-[#FF91D4]/20 flex items-center justify-center text-[8px] font-bold text-[#E84598]">
                    D
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[9px] font-bold text-[#222222]">Design landing page</div>
                    <div className="text-[6.5px] text-[#E84598] font-semibold">High • Due today</div>
                  </div>
                </div>
                <div className="flex -space-x-1">
                  <div className="h-4 w-4 rounded-full bg-[#6C8CFF] ring-1 ring-white text-[6px] text-white flex items-center justify-center">JD</div>
                  <div className="h-4 w-4 rounded-full bg-[#FFD65A] ring-1 ring-white text-[6px] text-[#111] flex items-center justify-center">AK</div>
                </div>
              </div>

              {/* Task 2 */}
              <div className="flex items-center justify-between rounded-lg bg-[#FAFAFC] p-2 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-md bg-[#6C8CFF]/20 flex items-center justify-center text-[8px] font-bold text-[#4266E8]">
                    A
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[9px] font-bold text-[#222222]">API integration</div>
                    <div className="text-[6.5px] text-[#4266E8] font-semibold">Medium • Tomorrow</div>
                  </div>
                </div>
                <div className="flex -space-x-1">
                  <div className="h-4 w-4 rounded-full bg-[#52D9AD] ring-1 ring-white text-[6px] text-white flex items-center justify-center">MK</div>
                </div>
              </div>

              {/* Task 3 */}
              <div className="flex items-center justify-between rounded-lg bg-[#FAFAFC] p-2 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-md bg-[#52D9AD]/20 flex items-center justify-center text-[8px] font-bold text-[#0D8C61]">
                    T
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-[9px] font-bold text-[#222222]">Testing & bug fixes</div>
                    <div className="text-[6.5px] text-[#0D8C61] font-semibold">Low • 15 Dec</div>
                  </div>
                </div>
                <div className="flex -space-x-1">
                  <div className="h-4 w-4 rounded-full bg-[#B18CFF] ring-1 ring-white text-[6px] text-white flex items-center justify-center">SR</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </motion.div>

    </div>
  );
}
