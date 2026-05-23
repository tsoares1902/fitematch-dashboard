'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiX } from 'react-icons/fi'

import { DASHBOARD_MENU } from '@/constants/dashboard-menu'
import { cn } from '@/utils/cn'

type MobileSidebarProps = {
  isOpen: boolean
  onClose: () => void
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const pathname = usePathname()

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        aria-label="Close menu backdrop"
        className="absolute inset-0 bg-slate-950/80"
        onClick={onClose}
        type="button"
      />

      <aside className="relative h-full w-80 max-w-[85vw] border-r border-slate-800 bg-slate-950 px-4 py-6 shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <Link
            className="text-2xl font-bold lowercase"
            href="/dashboard"
            onClick={onClose}
          >
            <span className="text-white">fite</span>
            <span className="text-green-400">match</span>
          </Link>

          <button
            aria-label="Close menu"
            className="rounded-xl p-2 text-slate-300 hover:bg-slate-900"
            onClick={onClose}
            type="button"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-1">
          {DASHBOARD_MENU.map((item) => {
            const Icon = item.icon
            const isActive =
              pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(`${item.href}/`))

            return (
              <div key={item.href} className="space-y-1">
                <Link
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-slate-900 hover:text-slate-100',
                    isActive && 'bg-slate-900 text-green-300',
                  )}
                  href={item.href}
                  onClick={onClose}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>

                {item.children && (
                  <div className="ml-4 space-y-1 border-l border-slate-800 pl-4">
                    {item.children.map((child) => {
                      const ChildIcon = child.icon
                      const isChildActive = pathname === child.href

                      return (
                        <Link
                          className={cn(
                            'flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-medium text-slate-500 transition hover:text-slate-100',
                            isChildActive && 'text-green-300',
                          )}
                          href={child.href}
                          key={child.href}
                          onClick={onClose}
                        >
                          <ChildIcon className="h-3.5 w-3.5" />
                          {child.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </div>
  )
}