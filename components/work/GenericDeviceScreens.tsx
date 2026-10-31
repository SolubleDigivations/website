"use client";

import React from "react";

export function GenericWebsiteScreen() {
  return (
    <div className="relative h-full w-full select-none overflow-hidden bg-white text-[#202124] font-sans">
      <div className="flex h-6 items-center justify-between border-b border-[#edf0f5] bg-white px-3 sm:h-7 sm:px-4">
        <div className="flex items-center gap-1.5">
          <div className="flex h-3 w-3 items-center justify-center rounded-[3px] bg-[#6f8fff] text-[7px] font-bold text-white sm:h-3.5 sm:w-3.5">
            S
          </div>
          <span className="text-[6.5px] font-bold tracking-tight text-[#3d4350] sm:text-[8px]">
            Soluble
          </span>
        </div>
        <div className="hidden items-center gap-3 text-[6px] font-medium text-[#7d8490] sm:flex sm:text-[7px]">
          <span className="font-semibold text-[#252a35]">Product</span>
          <span>Solutions</span>
          <span>Pricing</span>
          <span>Resources</span>
        </div>
        <div className="rounded-full bg-[#181a1f] px-2 py-0.5 text-[5.5px] font-semibold text-white sm:text-[6.5px]">
          Sign in
        </div>
      </div>

      <div className="relative h-[calc(100%-24px)] overflow-hidden bg-[#fbfcff] p-3 sm:h-[calc(100%-28px)] sm:p-4">
        <div className="absolute -right-8 -top-10 h-24 w-24 rounded-full bg-[#e9edff] blur-xl sm:h-32 sm:w-32" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <div className="flex items-start justify-between gap-2">
            <div className="max-w-[48%]">
              <div className="mb-1 inline-flex items-center gap-1 rounded-full bg-[#edf1ff] px-1.5 py-0.5 text-[5.5px] font-semibold text-[#6b7ed2] sm:text-[6.5px]">
                <span className="h-1 w-1 rounded-full bg-[#6f8fff]" />
                Dashboard
              </div>
              <div className="text-[13px] font-extrabold leading-[0.95] tracking-[-0.06em] text-[#20232b] sm:text-[17px] lg:text-[19px]">
                Build
                <br />
                what&apos;s next.
              </div>
              <div className="mt-1.5 text-[5.5px] leading-[1.25] text-[#8a909b] sm:text-[6.5px]">
                All your tools, in one place to
                <br />
                work smarter and move faster.
              </div>
              <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-[#20232b] px-2 py-1 text-[5.5px] font-semibold text-white sm:text-[6.5px]">
                Get started <span className="text-[8px] leading-none">→</span>
              </div>
            </div>

            <div className="relative mt-2 h-24 w-[47%] rounded-lg border border-[#f0f2f8] bg-white p-2 shadow-[0_6px_18px_rgba(80,94,140,0.08)] sm:h-28 sm:p-3">
              <div className="flex items-center justify-between text-[5px] text-[#a0a6b0] sm:text-[6px]">
                <span>Overview</span>
                <span className="rounded bg-[#f1f3f8] px-1 py-0.5">This week</span>
              </div>
              <div className="absolute inset-x-2 bottom-3 top-8 sm:inset-x-3 sm:top-9">
                <div className="absolute inset-x-0 top-1/4 border-t border-dashed border-[#edf0f5]" />
                <div className="absolute inset-x-0 top-2/4 border-t border-dashed border-[#edf0f5]" />
                <div className="absolute inset-x-0 top-3/4 border-t border-dashed border-[#edf0f5]" />
                <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 120 62" preserveAspectRatio="none" fill="none">
                  <path d="M0 50 C12 43 14 48 24 40 C34 31 37 43 47 33 C58 23 62 35 71 27 C80 19 82 25 91 14 C100 4 106 15 120 2" stroke="#718eff" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  <path d="M0 50 C12 43 14 48 24 40 C34 31 37 43 47 33 C58 23 62 35 71 27 C80 19 82 25 91 14 C100 4 106 15 120 2 V62 H0 Z" fill="url(#chartFill)" opacity="0.22" />
                  <defs>
                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                      <stop stopColor="#718eff" />
                      <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute right-0 top-0 h-2 w-2 rounded-full border-2 border-white bg-[#718eff] shadow-[0_1px_4px_#718eff]" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5">
            <div className="rounded-md border border-[#edf0f5] bg-white p-1.5 shadow-sm sm:p-2">
              <div className="mb-1 flex h-4 w-4 items-center justify-center rounded bg-[#dff8ef] text-[8px] text-[#1fc49a]">↗</div>
              <div className="h-1 w-12 rounded-full bg-[#d9dde7] sm:w-16" />
              <div className="mt-1 h-1 w-8 rounded-full bg-[#eef0f4]" />
            </div>
            <div className="rounded-md border border-[#edf0f5] bg-white p-1.5 shadow-sm sm:p-2">
              <div className="mb-1 flex h-4 w-4 items-center justify-center rounded bg-[#eee8ff] text-[8px] text-[#9278f3]">▥</div>
              <div className="h-1 w-10 rounded-full bg-[#d9dde7] sm:w-14" />
              <div className="mt-1 h-1 w-7 rounded-full bg-[#eef0f4]" />
            </div>
            <div className="rounded-md border border-[#edf0f5] bg-white p-1.5 shadow-sm sm:p-2">
              <div className="mb-1 flex h-4 w-4 items-center justify-center rounded bg-[#fff3d3] text-[8px] text-[#e7b638]">◐</div>
              <div className="h-1 w-11 rounded-full bg-[#d9dde7] sm:w-15" />
              <div className="mt-1 h-1 w-8 rounded-full bg-[#eef0f4]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GenericMobileAppScreen() {
  return (
    <div className="relative h-full w-full select-none overflow-hidden bg-white text-[#20232b] font-sans">
      <div className="px-3.5 pt-7 sm:px-4 sm:pt-8">
        <div className="flex items-center justify-between">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#6f8fff] text-[9px] font-bold text-white sm:h-6 sm:w-6">
            S
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#edf0f5] text-[9px] text-[#777e8d] sm:h-6 sm:w-6">⌕</div>
            <div className="h-5 w-5 rounded-full bg-gradient-to-br from-[#ffd9bf] to-[#e9a1a7] ring-2 ring-[#f2f4f8] sm:h-6 sm:w-6" />
          </div>
        </div>
        <div className="mt-3">
          <div className="text-[7px] text-[#9198a5] sm:text-[8px]">Good morning,</div>
          <div className="text-[14px] font-extrabold tracking-[-0.05em] text-[#222631] sm:text-[16px]">Let&apos;s build.</div>
        </div>
        <div className="mt-2 flex h-6 items-center rounded-md bg-[#f6f7fa] px-2 text-[6px] text-[#a2a8b3] sm:h-7 sm:text-[7px]">
          Search anything...
        </div>
      </div>

      <div className="px-3.5 pt-3 sm:px-4 sm:pt-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-[#edf1ff] p-2.5 sm:p-3">
            <div className="mb-2 flex h-5 w-5 items-center justify-center rounded-md bg-[#718eff] text-[8px] text-white">▣</div>
            <div className="text-[8px] font-bold sm:text-[9px]">Projects</div>
            <div className="mt-0.5 text-[6px] text-[#8a92a4]">12 active</div>
          </div>
          <div className="rounded-lg bg-[#ffe8f2] p-2.5 sm:p-3">
            <div className="mb-2 flex h-5 w-5 items-center justify-center rounded-md bg-[#ee78ad] text-[8px] text-white">≡</div>
            <div className="text-[8px] font-bold sm:text-[9px]">Tasks</div>
            <div className="mt-0.5 text-[6px] text-[#a38a96]">8 pending</div>
          </div>
          <div className="col-span-2 rounded-lg bg-[#fff3d6] p-2.5 sm:p-3">
            <div className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#f1bc3c] text-[8px] text-white">♟</div>
              <div>
                <div className="text-[8px] font-bold sm:text-[9px]">Team</div>
                <div className="text-[6px] text-[#aa9c78]">4 members</div>
              </div>
              <span className="ml-auto text-[11px] text-[#b8a879]">›</span>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between">
            <div className="text-[8px] font-bold sm:text-[9px]">Recent activity</div>
            <div className="text-[6px] font-semibold text-[#718eff] sm:text-[7px]">View all</div>
          </div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[#dff8ef]" />
              <div className="flex-1">
                <div className="h-1.5 w-3/4 rounded-full bg-[#e3e6ec]" />
                <div className="mt-1 h-1 w-1/2 rounded-full bg-[#f0f1f4]" />
              </div>
              <span className="text-[5px] text-[#a7adb7]">2h ago</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[#eee8ff]" />
              <div className="flex-1">
                <div className="h-1.5 w-2/3 rounded-full bg-[#e3e6ec]" />
                <div className="mt-1 h-1 w-2/5 rounded-full bg-[#f0f1f4]" />
              </div>
              <span className="text-[5px] text-[#a7adb7]">1d ago</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex h-8 items-center justify-around border-t border-[#edf0f5] bg-white px-4 sm:h-9">
        <div className="h-1.5 w-1.5 rounded-full bg-[#718eff]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#d9dde5]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#d9dde5]" />
        <div className="h-1.5 w-1.5 rounded-full bg-[#d9dde5]" />
      </div>
    </div>
  );
}
