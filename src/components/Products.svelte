<script>
	import { formatNumber } from './../helpers';
	export let products = [];
</script>

<div
	class="columns is-variable is-1-mobile is-0-tablet is-8-desktop is-8-widescreen is-2-fullhd is-multiline"
>
	{#each products as product}
		<div class="column is-one-quarter">
			<div class="product-container">
				<h3>{product.name}</h3>
				<img src={product.img} alt={product.name} />
				{#if product.price}
					<p class="has-text-weight-semibold">Pris: {formatNumber(product.price)}</p>
				{:else}
					<p class="has-text-weight-semibold">Pris på forespørsel</p>
				{/if}
				{#if product.description}
					<p>{product.description}</p>
				{/if}
			</div>
		</div>
	{/each}
</div>

<style scoped>
	h3 {
		font-weight: normal;
	}
	.product-container {
		padding: 1rem;
	}
</style>
