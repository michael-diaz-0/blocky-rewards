"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Gift } from "lucide-react";
import Link from "next/link";

export default function RewardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 via-pink-400 to-yellow-400">
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Blocky Rewards
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 px-4 py-2 rounded-full">
              <span className="font-bold">🎮 850 R$</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-purple-600">Daily Tasks</h2>
                <Trophy className="text-yellow-500 w-8 h-8" />
              </div>
              <div className="space-y-4">
                <TaskItem
                  title="Play Any Game"
                  reward={50}
                  progress={80}
                />
                <TaskItem
                  title="Complete Survey"
                  reward={100}
                  progress={0}
                />
                <TaskItem
                  title="Watch Videos"
                  reward={75}
                  progress={30}
                />
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-pink-600">Special Offers</h2>
                <Star className="text-yellow-500 w-8 h-8" />
              </div>
              <div className="space-y-4">
                <OfferItem
                  title="Share ideas"
                  description="Brainstorm and let us know your favorite new ideas"
                  reward={200}
                />
                <OfferItem
                  title="Premium Survey"
                  description="Share your gaming preferences"
                  reward={150}
                />
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg h-fit">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-purple-600">Rewards History</h2>
              <Gift className="text-green-500 w-8 h-8" />
            </div>
            <div className="space-y-4">
              <HistoryItem
                title="Completed Survey"
                date="Today"
                reward={100}
              />
              <HistoryItem
                title="Played Blocky Runner"
                date="Yesterday"
                reward={50}
              />
              <HistoryItem
                title="Daily Login Bonus"
                date="Yesterday"
                reward={25}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function TaskItem({ title, reward, progress }: { title: string; reward: number; progress: number }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{title}</span>
        <span className="text-green-600 font-bold">{reward} R$</span>
      </div>
      <Progress value={progress} className="h-2" />
      <div className="mt-2 text-right text-sm text-gray-600">{progress}% completed</div>
    </div>
  );
}

function OfferItem({ title, description, reward }: { title: string; description: string; reward: number }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="text-right">
          <div className="text-green-600 font-bold">{reward} R$</div>
          <Button size="sm" variant="outline" className="mt-2">
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}

function HistoryItem({ title, date, reward }: { title: string; date: string; reward: number }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
      <span className="text-green-600 font-bold">+{reward} R$</span>
    </div>
  );
}