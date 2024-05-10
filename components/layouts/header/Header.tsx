import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleUserRound, Github, GithubIcon } from 'lucide-react';


const Header = () => {
  return (
    <div className="bg-neutral-100 flex py-4 space-x-10">
      <Button variant="outline" size="icon">
      <CircleUserRound className="h-5 w-5" />
      </Button>
      <Link href="/">
        <Button>User_Name</Button>
      </Link>
      <Button>-POST-</Button>
      <GithubIcon size={40} />
    </div>
  )
}

export default Header