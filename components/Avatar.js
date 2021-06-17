function Avatar({ url }) {
    return (
        <img
            src={url}
            alt="profile pic"
            loading="lazy"
            className="h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110"
        />
    );
}

export default Avatar;
