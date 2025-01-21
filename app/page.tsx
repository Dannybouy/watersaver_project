import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, LightbulbIcon, Users, HomeIcon } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center"
        style={{
          backgroundImage:
            'url("./bg_img.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculate & Save Water Resources</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Track your water usage, get personalized recommendations, and contribute to environmental sustainability.
          </p>
          <Link href="/calculator">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Start Calculating
            </Button>
          </Link>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Water Usage Calculators</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5" />
                  Household Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Calculate daily household water consumption</p>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">Calculate</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HomeIcon className="h-5 w-5" />
                  Personal Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Track individual water consumption habits</p>
                <Button className="w-full bg-gray-600 hover:bg-gray-700">Calculate</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <LineChart className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Usage Tracking</h3>
              <p className="text-gray-600">Monitor your progress over time</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <LightbulbIcon className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Tips</h3>
              <p className="text-gray-600">Get personalized recommendations</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Share and compare with others</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Saving Water?</h2>
          <p className="text-lg mb-8">Join thousands of users making a difference</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Create Free Account
          </Button>
        </div>
      </section>
    </div>
  )
}

