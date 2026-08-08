"use client"
import { cn } from "@/lib/utils";

import {
  HomeIcon,
  Mail,
  User,
  FolderGit2,
  Pen,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';
import ThemeToggle from './ThemeToggle';
import RKLogo from '@/components/ui/RKLogo';

import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  {
    title: 'Home',
    icon: <HomeIcon className='h-full w-full' />,
    href: '/',
  },
  {
    title: 'About',
    icon: <User className='h-full w-full' />,
    href: '/about',
  },
  {
    title: 'Projects',
    icon: <FolderGit2 className='h-full w-full' />,
    href: '/projects',
  },
  {
    title: 'Blog',
    icon: <Pen className='h-full w-full' />,
    href: '/blog',
  },
  {
    title: 'Contact',
    icon: <Mail className='h-full w-full' />,
    href: '/contact',
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: top dock + theme toggle */}
      <nav
        className="fixed top-5 right-0 left-0 px-3 sm:px-5 m-auto w-full sm:w-fit hidden lg:flex items-center justify-between z-50"
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="Home" className="flex items-center">
          <RKLogo size="sm" />
        </Link>
        <Dock className='items-end pb-3 rounded-full'>
          {data.map((item, idx) => (
              <Link href={item.href} key={idx} aria-label={item.title} aria-current={pathname === item.href ? "page" : undefined}>
              <DockItem
                className={cn(
                  "aspect-square rounded-full bg-secondary",
                  pathname === item.href && "bg-accent border border-primary-sky"
                )}
              >
                <DockLabel>{item.title}</DockLabel>
                <DockIcon className={cn(pathname === item.href && "text-primary-sky")}>
                  {item.icon}
                </DockIcon>
              </DockItem>
            </Link>
          ))}
        </Dock>
        <ThemeToggle />
      </nav>

      {/* Mobile: fixed bottom tab bar */}
      <nav
        className="fixed bottom-0 left-0 right-0 lg:hidden z-50 bg-background/80 backdrop-blur-md border-t border-border/50 safe-area-bottom"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-around h-14 px-2">
          <Link href="/" aria-label="Home" className="flex items-center justify-center min-w-[44px] min-h-[44px]">
            <RKLogo size="sm" />
          </Link>
          {data.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.title}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 min-w-[44px] min-h-[44px] rounded-lg px-3 py-1.5 transition-colors",
                  isActive
                    ? "text-primary-sky"
                    : "text-muted-foreground active:text-primary"
                )}
              >
                <span className="w-5 h-5">{item.icon}</span>
                <span className="text-xs font-medium leading-none">{item.title}</span>
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
