<script setup>
import "@unocss/reset/tailwind.css";
const darkMode = ref(false);
// SdarkMode.value = true;
</script>

<template>
	<div :class="{ dark: darkMode }">
		<div bg-white dark:bg-black>
			<div min-h-full>
				<div
					grid
					grid-cols-12
					mx-auto
					sm:px-6
					lg:(max-w-7xl
					px-8
					gap-5)
				>
					<!-- Left Sidebar -->
					<div hidden md:!block xs:col-span-1 xl:col-span-2>
						<div sticky top-0>
							<SidebarLeft />
						</div>
					</div>

					<!-- Main Comtent -->
					<main col-span-12 md:col-span-8 xl-col-span-6>
						<RouterView />
					</main>

					<!-- Riht Sidebar -->
					<div hidden md:!block xl:col-span-4 md:col-span-3>
						<div sticky top-0>
							<SidebarRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
