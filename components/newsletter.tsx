'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      })
      setEmail('')
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="bg-muted/50 rounded-xl p-8 md:p-10">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Stay updated with our latest stories</h2>
        <p className="mt-4 text-muted-foreground">Get notified when we publish new content. We'll never spam you.</p>
        
        <form onSubmit={handleSubmit} className="mt-6 sm:flex sm:max-w-md mx-auto">
          <div className="min-w-0 flex-1">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full"
            />
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
        </form>
        
        <p className="mt-3 text-xs text-muted-foreground">
          By subscribing, you agree to our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.
        </p>
      </div>
    </div>
  )
}
