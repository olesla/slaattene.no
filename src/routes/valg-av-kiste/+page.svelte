<script>
	import Products from "../../components/Products.svelte";
	
	const coffins = [
		{
			name: 'T8 Hvit kiste',
			img: 't8-hvitkiste-edit.jpg',
			price: 6800,
			description: 'Tillegg for valgfri farge: 1.500,-'
		},
		{
			name: 'T4 Hvit kiste - Standard',
			img: 't4-hvitkiste-edit.jpg',
			price: 8400,
			description: null
		},
		{
			name: 'T43 Bjørk',
			img: 'bjerk-edit.jpg',
			price: 19800,
			description: null
		},
		{
			name: 'T66 Furu',
			img: 'furu-edit.jpg',
			price: 8600,
			description: null
		},
		{
			name: 'Nordica 65',
			img: 'nordica-edit.jpg',
			price: 6990,
			description: null
		},
		{
			name: 'Prisme',
			img: 'prisme-edit.jpg',
			price: 3860,
			description: null
		},
		{
			name: 'Lilje 67',
			img: 'lilje-edit.jpg',
			price: 9900,
			description: null
		},
		{
			name: 'Ocean',
			img: 'ocean-edit.jpg',
			price: 19800,
			description: null
		},
		{
			name: 'Skandinavia 62',
			img: 'skandinavia-edit.jpg',
			price: 9825,
			description: null
		},
		{
			name: 'Diamant',
			img: 'diamant-edit.jpg',
			price: 48200,
			description: null
		}
	];
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
        <Products class="mt-5" products={coffins}></Products>
	</div>
</section>
