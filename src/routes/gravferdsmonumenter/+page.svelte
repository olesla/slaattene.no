<script>
	import Products from '../../components/Products.svelte';

	async function fetchData() {
		const res = await fetch('/api/gravferdsmonumenter');
		const data = await res.json();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	}
</script>

<section class="hero is-main">
	<div class="hero-body is-flex is-justify-content-center">
		<h1 class="title text-white">Gravferdsmonumenter</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2>Våre utvalgte gravferdsmonumenter</h2>
		<p class="mb-5">
			Gravsteinene som vises , er et lite utvalg av de steinene vi tilbyr fra <a
				href="http://www.fevikstein.no/gravstein/list?showList=1"
				target="_blank"
				rel="noreferrer">Fevik Steinindustri</a
			>. Ønskes mer informasjon om gravsteinene og muligheter, ta kontakt med oss.
		</p>

		{#await fetchData()}
			<p>Laster..</p>
		{:then items}
			<Products class="mt-5" products={items} />
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>
</section>
