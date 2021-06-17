import Image from 'next/image';

function Avatar({ url, className }) {
    return (
        <Image
            src={url}
            alt="profile pic"
            loading="lazy"
            className={`h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110 ${className}`}
            height={40}
            width={40}
        />
    );
}

export default Avatar;
