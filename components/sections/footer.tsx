import { Shield, Phone, Mail, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

const services = [
  'Storm Damage Repair',
  'Insurance Claims',
  'Roof Replacement',
  'Emergency Tarping',
]

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">Shield Peak</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Professional roofing services with 100% insurance claim success
              rate. Protecting homes and maximizing settlements since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">Contact Us</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <a
                  href="tel:+15551234567"
                  className="text-sm text-white/70 hover:text-white"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href="mailto:info@shieldpeak.com"
                  className="text-sm text-white/70 hover:text-white"
                >
                  info@shieldpeak.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span className="text-sm text-white/70">
                  123 Roofing Way
                  <br />
                  Denver, CO 80202
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} Shield Peak Roofing. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sm text-white/70 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-white/70 hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
