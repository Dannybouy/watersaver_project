import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Waves } from "lucide-react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Waves className="h-6 w-6 text-blue-600" />
          <Link href="/" className="text-xl font-semibold">
            Watersaver
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-lg hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/calculators" className="text-lg hover:text-blue-600 transition-colors">
                Calculators
              </Link>
              <Link href="/resources" className="text-lg hover:text-blue-600 transition-colors">
                Resources
              </Link>
              <Link href="/about" className="text-lg hover:text-blue-600 transition-colors">
                About
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/calculators" className="text-sm hover:text-blue-600 transition-colors">
            Calculators
          </Link>
          <Link href="/resources" className="text-sm hover:text-blue-600 transition-colors">
            Resources
          </Link>
          <Link href="/about" className="text-sm hover:text-blue-600 transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex hover:text-blue-600">
            Sign in
          </Button>
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
            Register
          </Button>
        </div>
      </nav>
    </header>
  )
}

