'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CheckCircle2, Loader2 } from 'lucide-react'

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset after showing success
    setTimeout(() => {
      setIsSuccess(false)
      onOpenChange(false)
    }, 2500)
  }

  const handleOpenChange = (newOpen: boolean) => {
    if (!isSubmitting) {
      onOpenChange(newOpen)
      if (!newOpen) {
        setIsSuccess(false)
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 rounded-full bg-green-100 p-3">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-primary">
              Thank You!
            </h3>
            <p className="text-muted-foreground">
              We&apos;ll contact you within 24 hours to schedule your free
              inspection.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Get Your Free Inspection
              </DialogTitle>
              <DialogDescription>
                Fill out the form below and our team will contact you within 24
                hours.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="address">Property Address</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 Main St, City, State"
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Additional Notes</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your roofing needs..."
                  rows={3}
                  disabled={isSubmitting}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Schedule Free Inspection'
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting, you agree to be contacted about our services.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
