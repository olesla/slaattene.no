<script>
	export let name = '';
	export let phone = '';
	export let email = '';
	export let image = '';
</script>

<img src={image} alt={name} />
<h3>{name}</h3>
{#if email}
	<div>E-post: <a href="mailto:{email}">{email}</a></div>
{/if}
{#if phone}
	<div>Telefon: <a href="tel:+47{phone}">{phone}</a></div>
{/if}

<style>
</style>
