import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">1 Step Ahead</h2>
          <p className="text-sm opacity-90">
            Financial education with purpose - improving lives through interactive workshops.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Learn More</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#values" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Our Values
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#workshops" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                  Custom Programs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="mailto:hello@1stepahead.au"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://instagram.com/1stepahead.au"
                className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
            <p className="text-xs text-primary-foreground/80">
              Based in VIC
              <br />
              Available Australia-wide online
            </p>
          </div>
        </div>
      </div>
      <div className="container border-t border-primary-foreground/20 py-6">
        <p className="text-center text-sm text-primary-foreground/80">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> 1 Step Ahead. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
