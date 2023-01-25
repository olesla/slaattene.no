<script>
	import Products from '../../components/Products.svelte';

	async function fetchData() {
		const res = await fetch('/api/kister');
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
		<h1 class="title text-white">Valg av kiste</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2>Våre utvalgte kister</h2>
		<p class="mb-5">
			Kistene som vises , er et utvalg av de kistene vi tilbyr . Noen av modellene kan også leveres
			etter andre mål og farger. Ønskes mer informasjon om kistene og muligheter, ta kontakt med
			oss.
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
