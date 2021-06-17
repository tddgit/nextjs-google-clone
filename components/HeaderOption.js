function HeaderOption({ Icon, title, selected }) {
    return (
        <div
            className={`flex h-4 items-center space-x-4 border-b-4 border-transparent hover:text-blue-500 cursor:pointer hover:border-blue-500 pb-5 ${
                selected ? 'text-blue-500 border-blue-500' : 'text-gray-700'
            }`}
        >
            <Icon className={'h-4'} />
            <p className="hidden sm:inline-flex">{title}</p>
        </div>
    );
}

export default HeaderOption;
