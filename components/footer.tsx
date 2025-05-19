import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-muted/40 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Thoughtscape</h3>
            <p className="text-muted-foreground text-sm">Exploring ideas that shape our world through thoughtful perspectives and engaging stories.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Categories</h4>
            <ul className="space-y-2">
              <li><Link href="/category/technology" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technology</Link></li>
              <li><Link href="/category/culture" className="text-sm text-muted-foreground hover:text-primary transition-colors">Culture</Link></li>
              <li><Link href="/category/science" className="text-sm text-muted-foreground hover:text-primary transition-colors">Science</Link></li>
              <li><Link href="/category/lifestyle" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lifestyle</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/newsletter" className="text-sm text-muted-foreground hover:text-primary transition-colors">Newsletter</Link></li>
              <li><Link href="https://twitter.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">Twitter</Link></li>
              <li><Link href="https://instagram.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">Instagram</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">© {currentYear} Thoughtscape. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
