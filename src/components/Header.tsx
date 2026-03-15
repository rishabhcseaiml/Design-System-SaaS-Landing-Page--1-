import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import logo from "../assets/WhatsApp Image 2026-03-15 at 9.09.23 PM (1).jpeg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Mint Water Logo" className="h-10 w-10 object-contain" />
            <span className="font-semibold text-xl tracking-tight text-gray-900">MINT WATER</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              About
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Presence
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden md:inline-flex border-cyan-500 text-cyan-600 hover:bg-cyan-50">
            Enquire Now
          </Button>
          <Button className="bg-cyan-500 hover:bg-cyan-600">Get Minted</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}