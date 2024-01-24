<script setup lang="ts">
import "@unocss/reset/tailwind.css";
const darkMode = ref(false);
// darkMode.value = true;

//auth
const { useAuthUser, initAuth, useAuthLoading } = useAuth();
const user = useAuthUser();
const isAuthLoading = useAuthLoading();

onBeforeMount(() => {
	initAuth();
});
</script>

<template>
	<div :class="{ dark: darkMode }">
		<div bg-white dark:bg-dim-900>
			<!-- LoadingMask -->
			<LoadingPage v-if="isAuthLoading" />

			<!-- App -->
			<div v-else-if="user" min-h-full>
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
					<div hidden xs:col-span-1 xl:col-span-2 class="md:!block">
						<div sticky top-0>
							<SidebarLeft />
						</div>
					</div>

					<!-- Main Content -->
					<main col-span-12 md:col-span-8 xl-col-span-6>
						<RouterView />
					</main>

					<!-- Right Sidebar -->
					<div hidden xl:col-span-4 md:col-span-3 class="md:!block">
						<div sticky top-0>
							<SidebarRight />
						</div>
					</div>
				</div>
			</div>

			<!-- Auth -->
			<AuthPage v-else />
		</div>
	</div>
</template>
