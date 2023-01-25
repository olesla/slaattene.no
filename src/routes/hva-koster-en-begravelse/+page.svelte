<script>
	//import {formatNumber} from "./../helpers.js"
	import {formatNumber} from './../../helpers'
	const packages = [
		{
			title: 'Priseksempel 1',
			description: 'Gravferd i Arendal kapell',
			items: [
				{
					name: 'Basis med utstyr',
					price: 3860
				},
				{
					name: 'Administrasjonskostnader',
					price: 1800
				},
				{
					name: 'Bårebil med mannskap, 10 km',
					price: 1980
				},
				{
					name: 'Nedlegging i kiste',
					price: 850
				},
				{
					name: 'Honorar',
					price: 1800
				}
			]
		},
		{
			title: 'Priseksempel 2',
			description: 'Seremoni i Arendal kapell',
			items: [
				{
					name: 'Hvit kiste',
					price: 6800
				},
				{
					name: 'Pynting, lys, utstyr i kirken',
					price: 900
				},
				{
					name: 'Sanghefter, 50 stk (+10,- pr. ekstra sangark)',
					price: 1400
				},
				{
					name: 'Administrasjonskostnader',
					price: 1800
				},
				{
					name: 'Bårebil med mannskap, 10 km',
					price: 1980
				},
				{
					name: 'Assistanse ved seremonien',
					price: 1500
				},
				{
					name: 'Nedlegging i kiste',
					price: 850
				},
				{
					name: 'Honorar',
					price: 1800
				}
			]
		},
		{
			title: 'Priseksempel 3',
			description: 'Seremoni i kirker, Arendal',
			items: [
				{
					name: 'Hvit kiste',
					price: 6800
				},
				{
					name: 'Pynting, lys, utstyr i kirken',
					price: 900
				},
				{
					name: 'Sanghefter, 50 stk (+10,- pr. ekstra sangark)',
					price: 1400
				},
				{
					name: 'Administrasjonskostnader',
					price: 1800
				},
				{
					name: 'Bårebil med mannskap, 10 km',
					price: 1980
				},
				{
					name: 'Bårebil med mannskap, 10 km',
					price: 1980
				},
				{
					name: 'Assistanse ved seremonien',
					price: 2000
				},
				{
					name: 'Nedlegging i kiste',
					price: 850
				},
				{
					name: 'Honorar',
					price: 1800
				}
			]
		}
	];

	const totalPrice = (items) => {
		let total = 0;
		items.forEach((x) => (total += x.price));
		return formatNumber(total);
	};
</script>

<section class="hero is-main">
	<div class="hero-body is-flex is-justify-content-center">
		<h1 class="title text-white">Hva koster en begravelse</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns">
			{#each packages as pack}
				<div class="column">
					<h2>{pack.title}</h2>
					<span>{pack.description}</span>
					<div class="pricing-container">
						<table class="table mt-5 is-narrow is-striped">
							<tbody>
								{#each pack.items as item}
									<tr>
										<td>{item.name}</td>
										<td class="has-text-right">{formatNumber(item.price)}</td>
									</tr>
								{/each}
							</tbody>
						</table>
						<div>
							Totalpris inkl mva: {totalPrice(pack.items)},-
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style scoped>
	h2 {
		padding-top: 0.6rem;
	}
	p {
		padding: 0.6rem 0rem;
	}
	img {
		width: 300px !important;
		height: 98 !important;
	}
	td {
		border: none;
	}
	.pricing-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}
</style>
