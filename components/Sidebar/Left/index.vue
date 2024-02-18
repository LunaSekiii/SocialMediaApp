<script setup lang="ts">
import { HomeIcon } from "heroicons-vue3/solid";
import {
	HashtagIcon,
	BellIcon,
	InboxIcon,
	BookmarkIcon,
	DocumentTextIcon,
	UserIcon,
	DotsCircleHorizontalIcon,
} from "heroicons-vue3/outline";
const { defaultTransition } = useUnoConfig();
</script>

<template>
	<div flex flex-col h-screen>
		<div
			p2
			my2
			rounded-full
			hover:bg-blue-50
			w-min
			dark="hover:(bg-white/20)"
			:class="defaultTransition"
		>
			<NuxtLink to="/">
				<div w-8 h-8>
					<LogoTwitter />
				</div>
			</NuxtLink>
		</div>

		<div mt2 space-y-3>
			<SidebarLeftTab title="Home" active>
				<HomeIcon />
			</SidebarLeftTab>
			<SidebarLeftTab title="Explore">
				<HashtagIcon />
			</SidebarLeftTab>
			<SidebarLeftTab title="Notifications">
				<BellIcon />
			</SidebarLeftTab>
			<SidebarLeftTab title="Message">
				<InboxIcon />
			</SidebarLeftTab>
			<SidebarLeftTab title="Bookmarks">
				<BookmarkIcon />
			</SidebarLeftTab>
			<SidebarLeftTab title="Lists">
				<DocumentTextIcon />
			</SidebarLeftTab>
			<SidebarLeftTab title="Profile">
				<UserIcon />
			</SidebarLeftTab>
			<SidebarLeftTab title="More">
				<DotsCircleHorizontalIcon />
			</SidebarLeftTab>
			<div>
				<UIButton liquid size="lg">
					<span font-bold>Tweet</span></UIButton
				>
			</div>
		</div>
	</div>
</template>
