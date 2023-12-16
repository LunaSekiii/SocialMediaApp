<script setup>
import "@unocss/reset/tailwind.css";
const darkMode = ref(false);
// darkMode.value = true;
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
					<div md:block xs:col-span-1 xl:col-span-2>
						<div sticky top-0>
							<SidebarLeft />
						</div>
					</div>

					<!-- Main Comtent -->
					<main>2</main>

					<!-- Riht Sidebar -->
					<div>3</div>
				</div>
			</div>
		</div>
	</div>
</template>
