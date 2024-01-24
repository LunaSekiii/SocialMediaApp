<script setup></script>

<template>
	<div flex h-screen>
		<div relative flex-1 w0 hidden class="lg:!block">
			<img
				src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
				alt="bg image"
				absolute
				inset-0
				object-cover
				w-full
				h-full
			/>
		</div>
		<div
			flex="~ col 1"
			justify-center
			px4
			py12
			sm:px6
			lg:(flex-node
			pxs20)
			xl:px24
		>
			<div flex items-center w-full h-full max-w-sm mx-auto lg:w96>
				<AuthForm />
			</div>
		</div>
	</div>
</template>
