'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { DASHBOARD_MENU } from '@/constants/dashboard-menu'
import { cn } from '@/utils/cn'

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950 px-4 py-6 lg:block">
      <Link className="mb-8 block text-2xl font-bold lowercase" href="/dashboard">
        <span className="text-white">fite</span>
        <span className="text-green-400">match</span>
      </Link>

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
  )
}
