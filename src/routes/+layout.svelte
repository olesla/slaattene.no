<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const navbar = document.querySelector('#navbar')
		
		document.querySelector('.navbar-burger').addEventListener('click', () => {
			navbar.classList.toggle('is-active')
		})

		document.querySelectorAll('.navbar-item').forEach(x => {
			x.addEventListener('click', () => {
				navbar.classList.remove('is-active')
			})
		})
		
	});
</script>

<div class="hero is-fullheight">
	<section>
		<div class="container">
			<nav class="navbar" aria-label="main navigation">
				<div class="navbar-brand">
					<a class="navbar-item" href="/">
						<img class="logo" src="logo.png" alt="laattene.no" />
					</a>

					<!-- svelte-ignore a11y-missing-attribute -->
					<a
						role="button"
						class="navbar-burger"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbar"
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>

				<div id="navbar" class="navbar-menu">
					<div class="navbar-end">
						<a class="navbar-item" href="/"> Hjem </a>

						<div class="navbar-item has-dropdown is-hoverable">
							<!-- svelte-ignore a11y-missing-attribute -->
							<a class="navbar-link is-primary"> Ved dødsfall </a>

							<div class="navbar-dropdown">
								<a class="navbar-item" href="/seremoni"> Seremoni </a>
								<a class="navbar-item" href="/forbered-begravelse"> Forbered begravelse </a>
								<a class="navbar-item" href="/hjelp-ved-dødsfall"> Hjelp ved dødsfall </a>
							</div>
						</div>

						<!-- svelte-ignore a11y-missing-attribute -->
						<div class="navbar-item has-dropdown is-hoverable">
							<a class="navbar-link"> Priser </a>

							<div class="navbar-dropdown">
								<a class="navbar-item" href="/hva-koster-en-begravelse">Hva koster en begravelse</a>
								<a class="navbar-item" href="/valg-av-kiste">Valg av kiste</a>
								<a class="navbar-item" href="/gravferdsmonumenter">Gravferdsmonumenter</a>
								<a
									class="navbar-item"
									target="_blank"
									rel="noreferrer"
									href="http://www.slaatteneblomster.no/"
								>
									Blomster
								</a>

								<a class="navbar-item" href="/priser-etter-opplysningsplikt">Priser etter opplysningsplikt</a>
							</div>
						</div>
						<a
							class="navbar-item"
							target="_blank"
							rel="noreferrer"
							href="https://olafslaattene.vareminnesider.no/"
						>
							Dødsannonser
						</a>
					</div>
				</div>
			</nav>
		</div>
	</section>

	<slot />

	<footer class="footer is-main is-flex-align-items-flex-end mt-auto">
		<div class="container">
			<div class="columns">
				<div class="column">
					<h2 class="is-uppercase pb-4">Slaattene Begravelsebyrå</h2>

					<div class="pr-5">
						<small
							>Slaattene Begravelsebyrå ble etablert i 1927 og har siden vært det ledende
							begravelsesbyrået i Arendal og omegn. Vi har bistått familier igjennom vanskelige
							tider i flere generasjoner. Nå er det 3. generasjon Slaattene som driver byrået. Men
							tanken er fremdeles den samme: Å skape trygghet og varme i en vanskelig tid.</small
						>
					</div>
				</div>
				<div class="column">
					<h2 class="is-uppercase pb-4">Kontakt oss</h2>
					<div>
						<small
							><p>OLAF SLAATTENE AS</p>
							<p>Kystveien 151, 4842 Arendal.</p>
							<p>Telefon: 37 05 91 65 - 92 61 07 47</p>
							<p>E-post: kontakt@slaattene.no</p>
						</small>
					</div>
				</div>
				<div class="column">
					<h2 class="is-uppercase pb-4">Døgnservice</h2>

					<div>
						<small>
							<p class="pb-5">Ring oss hele døgnet: 92 61 07 47</p>
						</small>
					</div>

					<h2 class="is-uppercase pb-4 pt-5">Følg oss</h2>
					<div>
						<a
							href="https://www.facebook.com/olafslaattene/"
							title="Facebook"
							target="_blank"
							rel="noreferrer"
						>
							<i class="fa-brands fa-facebook fa-2xl" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	@import './../app.css';
	.fa-facebook {
		color: #fff;
	}
</style>
