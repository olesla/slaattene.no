<script>
	import Products from "../../components/Products.svelte";
	
	const monuments = [
        {
            name: 'Gravferdsmonument 01',
			img: 'gravstein-01.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 02',
			img: 'gravstein-02.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 03',
			img: 'gravstein-03.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 04',
			img: 'gravstein-04.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 05',
			img: 'gravstein-05.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 06',
			img: 'gravstein-06.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 07',
			img: 'gravstein-07.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 08',
			img: 'gravstein-08.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 09',
			img: 'gravstein-09.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 10',
			img: 'gravstein-10.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 11',
			img: 'gravstein-11.jpg',
			price: null,
			description: null,
        },
        {
            name: 'Gravferdsmonument 12',
			img: 'gravstein-12.jpg',
			price: null,
			description: null,
        },
	];
</script>

<section class="hero is-main">
	<div class="hero-body is-flex is-justify-content-center">
		<h1 class="title text-white">Gravferdsmonumenter</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2>Våre utvalgte gravferdsmonumenter
        </h2>
		<p class="mb-5">
            Gravsteinene som vises , er et lite utvalg av de steinene vi tilbyr fra <a href="http://www.fevikstein.no/gravstein/list?showList=1" target="_blank" rel="norefferer">Fevik Steinindustri</a>. Ønskes mer informasjon om gravsteinene og muligheter, ta kontakt med oss.


		</p>
        <Products class="mt-5" products={monuments}></Products>
	</div>
</section>
