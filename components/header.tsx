'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Shield } from 'lucide-react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  onOpenModal: () => void
}

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Our Work' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
]

export function Header({ onOpenModal }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary">
            Shield Peak
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            onClick={onOpenModal}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Get Free Inspection
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'overflow-hidden border-b border-border bg-background transition-all duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'max-h-80' : 'max-h-0 border-b-0'
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => {
              setIsMobileMenuOpen(false)
              onOpenModal()
            }}
            className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Get Free Inspection
          </Button>
        </nav>
      </div>
    </header>
  )
}
