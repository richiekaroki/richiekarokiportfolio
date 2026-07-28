"use client"
import { cn } from "@/lib/utils";


import {
  Briefcase,
  BookOpen,
  FolderGit2,
  GraduationCap,
  HomeIcon,
  LightbulbIcon,
  Mail,
  User,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/animation/DockAnimation';
import ThemeToggle from './ThemeToggle';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const data = [
    {
      title: 'Home',
      icon: (
        <HomeIcon className='h-full w-full ' />
      ),
      href: '/',
    },
    {
      title: 'About',
      icon: (
        <User className='h-full w-full ' />
      ),
      href: '/about',
    },
    {
      title: 'Consulting',
      icon: (
        <Briefcase className='h-full w-full ' />
      ),
      href: '/consulting',
    },
    {
      title: 'Tutoring',
      icon: (
        <BookOpen className='h-full w-full ' />
      ),
      href: '/tutoring',
    },
    {
      title: 'Projects',
      icon: (
        <FolderGit2 className='h-full w-full ' />
      ),
      href: '/projects',
    },
    {
      title: 'Contact',
      icon: (
        <Mail className='h-full w-full ' />
      ),
      href: '/contact',
    },
  ];
  const pathname = usePathname()

  return (

    <div className="fixed top-5 right-0 left-0 px-3 sm:px-5 m-auto w-full sm:w-fit flex items-center justify-between bg-transparent z-50">
    <Dock className='items-end pb-3 rounded-full'>
      {data.map((item, idx) => (
        <Link href={item.href} key={idx}>

        <DockItem
          className={cn("aspect-square rounded-full bg-secondary",pathname === item.href && " bg-accent border border-primary-sky")}
          aria-label={item.title}
          >
          <DockLabel >{item.title}</DockLabel>
          <DockIcon className={cn(pathname === item.href && "text-primary-sky")}>{item.icon}</DockIcon>
        </DockItem>
          </Link>
      ))}
    </Dock>
    <ThemeToggle />
    </div>
  );
};

export default Navbar;
