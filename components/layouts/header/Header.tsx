'use client'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CircleUserRound,  GithubIcon } from 'lucide-react';
import { createClient } from '@/utils/supabase/client';

const Header = () => {
    const [User_Name, setUserName] = useState('User_Name'); // 初期値は 'User_Name'

    useEffect(() => {
        const supabase = createClient();
        const fetchUserData = async () => {
          const { data, error } = await supabase.auth.getUser();
          if (error) {
            console.error('Error fetching user data:', error);
            return;
          }
          // メールアドレスが存在しなければ 'No email' を使用
          const userEmail = data.user?.email ?? 'No email';
          setUserName(userEmail);
        };
    
        fetchUserData();
    }, []);

  return (
    <div className="bg-neutral-100 flex py-4 space-x-10">
      <Button variant="outline" size="icon">
        <CircleUserRound className="h-5 w-5" />
      </Button>
      <Link href="/login">
        <Button>{User_Name}</Button>
      </Link>
      <Button>-POST-</Button>
      <GithubIcon size={40} />
    </div>
  );
}

export default Header;
