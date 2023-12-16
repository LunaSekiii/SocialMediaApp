import {
	HomeIcon,
	HashtagIcon,
	BellIcon,
	InboxIcon,
	BookmarkIcon,
	DocumentTextIcon,
	UserIcon,
	DotsCircleHorizontalIcon,
} from "heroicons-vue3/solid";

type TabList = {
	title: string;
	path: string;
	icon: unknown;
}[];

export default (): TabList => {
	return [
		{
			title: "Home",
			path: "/",
			icon: HomeIcon,
		},
	];
};
