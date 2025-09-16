'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const navItems = [
    { name: 'About KredPay', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Features', href: '/features' },
    { name: 'Help Center', href: '/help' },
  ]

  return (
    <header className="w-full flex justify-center pt-6  absolute z-50">
      <div className="flex items-center justify-between w-[90%] max-w-7xl bg-gray-100 rounded-full px-8 py-3 shadow">
        
        {/* Left - Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/load.jpg"      // ← apna logo path daal dena
            alt="KredPay Logo"
            width={120}
            height={40}
          />
        </div>

        {/* Center - Nav Links */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-gray-600 hover:text-gray-900 transition text-sm 
                ${pathname === item.href ? 'font-semibold text-gray-900' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right - Button */}
        <div>
          <Link
            href="/get"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow"
          >
            Get KredPay
          </Link>
        </div>
      </div>
    </header>
  )
}
