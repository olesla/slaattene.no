<script>
	import { onMount } from 'svelte';
	import { formatNumber } from './../../helpers';

	let currentPackage = null;
	let packages = [];

	const totalPrice = (items) => {
		let total = 0;
		items.forEach((x) => (total += x.price));
		return formatNumber(total);
	};

	async function fetchCoffins() {
		const res = await fetch('/api/kister');
		const data = await res.json();

		if (res.ok) {
			return data;
		} else {
			throw new Error(data);
		}
	}

	async function fetchExamples() {
		const res = await fetch('/api/priseksempler');
		const data = await res.json();

		if (res.ok) {
			packages = data;
			return data;
		} else {
			throw new Error(data);
		}
	}

	function closeModal() {
		const modal = document.querySelector('#modal');
		modal.classList.remove('is-active');
	}

	function selectCoffin(coffin) {
		packages[currentPackage].items[0].name = coffin.name;
		packages[currentPackage].items[0].img = coffin.img;
		packages[currentPackage].items[0].price = coffin.price;
		packages[currentPackage].items[0].description = coffin.description;
		closeModal();
	}

	function showModal(i) {
		const modal = document.querySelector('#modal');
		modal.classList.add('is-active');
		currentPackage = i;
	}

	onMount(() => {
		const modal = document.querySelector('#modal');
		const closeModalElements = document.querySelectorAll('.close-modal');

		closeModalElements.forEach((x) => {
			x.addEventListener('click', () => {
				modal.classList.remove('is-active');
			});
		});
	});
</script>

<section class="hero is-main">
	<div class="hero-body is-flex is-justify-content-center">
		<h1 class="title text-white">Hva koster en begravelse</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns">
			{#await fetchExamples()}
				<p>Laster..</p>
			{:then _}
				{#each packages as pack, i}
					<div class="column">
						<h2>{pack.title}</h2>
						<span>{pack.description}</span>
						<div class="pricing-container">
							<table class="table mt-5 is-narrow is-striped">
								<tbody>
									{#each pack.items as item, j}
										<tr>
											<td>
												{item.name}
												{#if j === 0}
													(<a
														href="#"
														on:click={() => {
															showModal(i);
														}}>Vis alternativer</a
													>)
												{/if}
											</td>
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
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</div>
	</div>
</section>

<div id="modal" class="modal">
	<div class="modal-background" />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title">Velg kiste</p>
			<button class="delete close-modal" aria-label="close" />
		</header>
		<section class="modal-card-body">
			{#await fetchCoffins()}
				<p>Laster..</p>
			{:then coffins}
				{#each coffins as coffin}
					<div
						class="mb-5 coffin-container"
						on:click={() => {
							selectCoffin(coffin);
						}}
						on:keydown={() => {
							selectCoffin(coffin);
						}}
					>
						<div>
							<img src={coffin.img} alt={coffin.name} />
						</div>
						<div>
							{coffin.name} - {formatNumber(coffin.price)},-
						</div>
					</div>
					<hr />
				{/each}
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		</section>
		<footer class="modal-card-foot">
			<button class="button close-modal">Lukk</button>
		</footer>
	</div>
</div>

<style scoped>
	h2 {
		padding-top: 0.6rem;
	}
	td {
		border: none;
	}
	.coffin-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}
	.pricing-container {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
	}
</style>
