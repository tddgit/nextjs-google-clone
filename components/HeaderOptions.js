import HeaderOption from './HeaderOption';
import {
    SearchIcon,
    PhotographIcon,
    PlayIcon,
    MapIcon,
    DotsVerticalIcon,
} from '@heroicons/react/outline';

function HeaderOptions() {
    return (
        <div className="flex w-full text-sm text-gray-700 border-b-[1px] justify-evenly lg:text-base lg:justify-start lg:space-x-36 lg:pl-53">
            {/* Left */}
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images" />
                <HeaderOption Icon={PlayIcon} title="News" />
                <HeaderOption Icon={MapIcon} title="Maps" />
                <HeaderOption Icon={DotsVerticalIcon} title="Maps" />
            </div>

            {/* Right */}
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    );
}

export default HeaderOptions;
