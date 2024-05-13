import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 bg-gradient-to-r from-cyan-500 to-blue-500 animate-gradient-x">
      <h1 className="text-4xl font-bold text-center mb-2 text-white drop-shadow-lg">Welcome to PortfolioSky</h1>
      <p className="text-lg text-center mt-4 mb-6 text-white drop-shadow">Portfolioskyはみなさんの創作が他者と自分自身にとって理解しやすくなるためのポートフォリオサイトです</p>
      <Link href="/login" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out">
        ログイン OR サインアップ
      </Link>
    </div>
  );
};

export default Page;
