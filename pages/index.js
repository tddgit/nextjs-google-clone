import Head from 'next/head';
import Image from 'next/image';

import Avatar from '../components/Avatar';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;
        router.push(`/search?term=${term}`);
    };
    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <Head>
                <title>Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className="flex justify-between w-full p-5 text-sm text-gray-700">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>
                    {/* Icon */}
                    <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

                    {/* Avatar */}
                    <Avatar url="https://coaching.papareact.com/ai9" />
                </div>
            </header>

            {/* Body */}

            <form className="flex flex-col items-center w-4/5 ">
                {/* Google Logo */}
                <Image
                    className=""
                    src="https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    height={100}
                    width={300}
                    alt="Google Logo"
                />
                {/* Search Input */}
                <div className="flex items-center justify-between w-full max-w-md px-5 py-3 mt-5 border border-gray-200 hover:shadow-lg focus-within:shadow-lg founded-full lg:max-w-2xl sm:max-w-xl ">
                    <SearchIcon className="h-5 text-gray-500" />
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="focus:outline-none"
                    />
                    <MicrophoneIcon className="h-5" />
                </div>

                <div className="flex flex-col justify-center w-1/2 mt-8 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row">
                    <button onClick={search} className="button">
                        Google Search
                    </button>
                    <button onClick={search} className="button">
                        I&apos;m Feeling Lucky ;
                    </button>
                </div>
            </form>

            {/* Footer */}
            <Footer />
        </div>
    );
}
