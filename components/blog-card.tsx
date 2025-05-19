import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    category: string
    date: string
    readTime: string
    author: {
      name: string
      avatar: string
    }
    coverImage: string
    slug: string
  }
  variant?: 'default' | 'featured'
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden border-0 shadow-none group">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Link href={}>
              <Image 
                src={post.coverImage} 
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </div>
          <CardContent className="p-0 space-y-4 flex flex-col justify-center">
            <div className="space-y-2">
              <Badge variant="secondary" className="rounded-full">{post.category}</Badge>
              <h3 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
                <Link href={}>{post.title}</Link>
              </h3>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </div>
            <CardFooter className="p-0 pt-4">
              <div className="flex items-center space-x-4">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground">{post.date} · {post.readTime}</p>
                </div>
              </div>
            </CardFooter>
          </CardContent>
        </div>
      </Card>
    )
  }
  
  return (
    <Card className="overflow-hidden border-0 shadow-none h-full group flex flex-col">
      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
        <Link href={}>
          <Image 
            src={post.coverImage} 
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
      </div>
      <CardContent className="p-0 space-y-3 flex-grow">
        <Badge variant="secondary" className="rounded-full">{post.category}</Badge>
        <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors">
          <Link href={}>{post.title}</Link>
        </h3>
        <p className="text-muted-foreground text-sm">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-0 pt-4">
        <div className="flex items-center space-x-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image 
              src={post.author.avatar} 
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-medium">{post.author.name}</p>
            <p className="text-xs text-muted-foreground">{post.date} · {post.readTime}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
