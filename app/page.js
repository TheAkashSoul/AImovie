
import Category from '@/components/Category'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-purple-600 to-blue-500'>
      <Hero />
      <Category />
    </main>
  )
}
