import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef();
    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`);
    };
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex items-center w-full p-6">
                <Image
                    src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                    alt="Google Logo"
                />

                <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-1 border border-gray-200 rounded-full shadow-lg">
                    <input
                        ref={searchInputRef}
                        type="text"
                        className="flex-grow w-full focus:outline-none"
                    />
                    <XIcon
                        className="text-gray-500 transition duration-100 transform cursor-pointer hover:scale-125 h-7 sm:mr-3 "
                        onClick={() => (searchInputRef.current.value = '')}
                    />
                    <MicrophoneIcon className="hidden h-6 pl-2 mr-3 text-blue-500 border-l-2 sm:inline-flex" />
                    <SearchIcon className="hidden h-6 pl-2 mr-3 text-blue-500 border-l-2 sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>
                <Avatar url="https://coaching.papareact.com/ai9" />
            </div>
            {/* HeaderOptions */}
            <HeaderOptions />
        </header>
    );
}

export default Header;
