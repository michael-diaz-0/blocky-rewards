"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { GiftIcon, GamepadIcon, ClipboardListIcon, CoinsIcon, LogInIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-400 to-red-400">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <GiftIcon className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-2xl font-bold text-purple-600">Blocky Rewards</span>
            </div>
            <Button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2"
            >
              <LogInIcon className="h-4 w-4" />
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4 animate-bounce">
            Get FREE ROBUX
          </h1>
          <p className="text-2xl text-white mb-8">
            By completing simple & free tasks!
          </p>
          <p className="text-xl text-white mb-12">
            Play games, fill in surveys & more!
          </p>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black text-xl p-6 rounded-full animate-pulse">
                Start Earning Now! 🎮
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center mb-4">
                  Your Robux Earnings
                </DialogTitle>
              </DialogHeader>
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <CoinsIcon className="h-8 w-8 text-yellow-500" />
                    <span className="text-2xl font-bold">Current Balance:</span>
                  </div>
                  <span className="text-3xl font-bold text-green-500">0 R$</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <GamepadIcon className="h-6 w-6 text-purple-500" />
                      <span>Play Games</span>
                    </div>
                    <span className="text-green-500">+10 R$</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ClipboardListIcon className="h-6 w-6 text-blue-500" />
                      <span>Complete Survey</span>
                    </div>
                    <span className="text-green-500">+25 R$</span>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <GamepadIcon className="h-12 w-12 mx-auto text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Play Games</h3>
            <p className="text-gray-600">Earn while having fun playing awesome games!</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <ClipboardListIcon className="h-12 w-12 mx-auto text-blue-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Quick Surveys</h3>
            <p className="text-gray-600">Share your opinion and get rewarded!</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <CoinsIcon className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Instant Rewards</h3>
            <p className="text-gray-600">Get your Robux right after completing tasks!</p>
          </div>
        </div>
      </main>

      {/* Login Modal */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">
              Login to Blocky Rewards
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Username</label>
              <Input placeholder="Enter your Roblox username" />
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <Input type="password" placeholder="Enter your password" />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Login
            </Button>
            <p className="text-center text-sm text-gray-500">
              Don't have an account? <a href="#" className="text-purple-600 hover:underline">Sign up</a>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}