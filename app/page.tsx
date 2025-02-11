"use client";

import { Button } from "@/components/ui/button";
import { TowerControl as GameController, Gift, ScrollText, UserCircle2, Gamepad2, Coins } from "lucide-react";
import Link from "next/link";
import { LoginModal } from "@/components/login-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-400 to-yellow-400 flex flex-col">
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Blocky Rewards
          </h1>
          <LoginModal />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-16 flex-grow">
        <div className="text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Get FREE ROBUX
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium px-4">
            By completing simple & free tasks!
          </p>
          <p className="text-lg md:text-xl text-white px-4">
            Play games, fill in surveys & more!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
              <GameController className="w-10 h-10 md:w-12 md:h-12 text-purple-500 mx-auto" />
              <h3 className="text-lg md:text-xl font-bold mt-3 md:mt-4">Play Games</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Earn rewards by playing fun games!
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
              <ScrollText className="w-10 h-10 md:w-12 md:h-12 text-pink-500 mx-auto" />
              <h3 className="text-lg md:text-xl font-bold mt-3 md:mt-4">Complete Surveys</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Share your opinion and get rewarded!
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg">
              <Gift className="w-10 h-10 md:w-12 md:h-12 text-yellow-500 mx-auto" />
              <h3 className="text-lg md:text-xl font-bold mt-3 md:mt-4">Daily Rewards</h3>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Log in daily for bonus rewards!
              </p>
            </div>
          </div>

          <div className="mt-12 md:mt-20 mb-12 md:mb-16 flex justify-center px-4">
            <Link href="/rewards" className="w-full md:w-auto">
              <Button size="lg" className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 rounded-full shadow-lg transform transition hover:scale-105">
                Start Earning Now! 🎮
              </Button>
            </Link>
          </div>

          {/* How It Works Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-8 md:mb-12">
              How to Get Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <UserCircle2 className="w-10 h-10 md:w-12 md:h-12 text-purple-500" />
                </div>
                <div className="absolute top-10 md:top-12 right-0 hidden md:block">
                  <div className="w-full h-4 flex items-center justify-center">
                    <div className="h-1 w-full bg-purple-300 relative">
                      <div className="absolute -right-4 -top-1.5 w-4 h-4 bg-purple-300 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-purple-600 mb-2 md:mb-4">Step 1</h3>
                <p className="text-gray-600 text-sm md:text-base">Create your free account or log in with your Roblox username</p>
              </div>

              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Gamepad2 className="w-10 h-10 md:w-12 md:h-12 text-pink-500" />
                </div>
                <div className="absolute top-10 md:top-12 right-0 hidden md:block">
                  <div className="w-full h-4 flex items-center justify-center">
                    <div className="h-1 w-full bg-pink-300 relative">
                      <div className="absolute -right-4 -top-1.5 w-4 h-4 bg-pink-300 transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-pink-600 mb-2 md:mb-4">Step 2</h3>
                <p className="text-gray-600 text-sm md:text-base">Complete fun tasks, play games, and participate in surveys</p>
              </div>

              <div>
                <div className="w-20 h-20 md:w-24 md:h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Coins className="w-10 h-10 md:w-12 md:h-12 text-yellow-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-yellow-600 mb-2 md:mb-4">Step 3</h3>
                <p className="text-gray-600 text-sm md:text-base">Collect your Robux rewards instantly!</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white/95 backdrop-blur-sm py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-purple-600">About Us</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                What is Blocky Rewards? Blocky Rewards is a website focused on awarding free currency, here at Blocky Rewards we pay out the highest rates compared to all of our competitors. Blocky Rewards is completely free and safe to use.
              </p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-purple-600">HOW DOES IT WORK?</h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                At Blocky Rewards, we do not ask for or require any personal information. You complete offers on the website and earn currency in which you can withdraw to your account. For every offer completed, our partners pay us, and in turn, we invest a portion of that money back into currency for payouts to give back to you, creating a fair and win-win situation for both parties.
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 text-center text-gray-500 text-sm md:text-base">
            <p>© 2025 Blocky Rewards. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}