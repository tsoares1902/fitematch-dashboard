import {
  FiBriefcase,
  FiCheckSquare,
  FiFileText,
  FiHome,
  FiSettings,
  FiUser,
  FiUsers,
  FiMail
} from 'react-icons/fi'
import {
  FaBuilding,
} from 'react-icons/fa'
import { IconType } from 'react-icons'

import { ROUTES } from './routes'

export type MenuItem = {
  label: string
  href: string
  icon: IconType
  children?: {
    label: string
    href: string
    icon: IconType
  }[]
}

export const DASHBOARD_MENU: MenuItem[] = [
  {
    label: 'Dashboard',
    href: ROUTES.dashboard.home,
    icon: FiHome,
  },
  {
    label: 'Users',
    href: ROUTES.dashboard.users,
    icon: FiUsers,
  },
  {
    label: 'Companies',
    href: ROUTES.dashboard.companies,
    icon: FaBuilding,
    children: [
      {
        label: 'Company approvals',
        href: ROUTES.dashboard.approvals.companies,
        icon: FiCheckSquare,
      },
    ],
  },
  {
    label: 'Jobs',
    href: ROUTES.dashboard.jobs,
    icon: FiBriefcase,
    children: [
      {
        label: 'Job approvals',
        href: ROUTES.dashboard.approvals.jobs,
        icon: FiCheckSquare,
      },
    ],
  },
  {
    label: 'Applications',
    href: ROUTES.dashboard.applications,
    icon: FiFileText,
  },
  {
    label: 'Profile',
    href: ROUTES.dashboard.profile,
    icon: FiUser,
  },
  {
    label: 'Settings',
    href: ROUTES.dashboard.settings,
    icon: FiSettings,
    children: [
      {
        label: 'Email templates',
        href: ROUTES.dashboard.emailTemplates,
        icon: FiMail,
      },
    ],
  },
]