<script>
	import { page } from '$app/stores';
	console.log($page.url.pathname);
</script>

<div class="is-flex is-justify-content-center is-flex-direction-column mb-5">
	<a href="tel:+4792610747" class="button is-medium is-main mb-5">
		<i class="fa-solid fa-phone pr-2" />Vakttelefon 24t: 92 61 07 47
	</a>
	<img class="mt-2" src="/virke-gravferd.jpg" alt="" />
</div>

<div class="sidebar-link-container mt-5">
	<a href="/seremoni" class="button mb-2" class:is-main={$page.url.pathname === '/seremoni'}>
		Seremoni
	</a>
	<a
		href="/forbered-begravelse"
		class="button mb-2"
		class:is-main={$page.url.pathname === '/forbered-begravelse'}
	>
		Forbered begravelse
	</a>
	<a
		href="/hjelp-ved-dødsfall"
		class="button mb-2"
		class:is-main={$page.url.pathname.includes('hjelp')}
	>
		Hjelp ved dødsfall
	</a>
</div>

<style scoped>
	.sidebar-link-container {
		display: flex;
		flex-direction: column;
	}
</style>
