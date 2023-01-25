<script>
	import Employee from '../components/Employee.svelte';

	const employees = [
		{
			name: 'Olav K. Slaattene',
			phone: 92610757,
			email: 'olav@olafslaattene.no',
			image: '/olaf-web.jpg'
		},
		{
			name: 'Tommy Slaattene Aas',
			phone: 91521306,
			email: 'tommy@olafslaattene.no',
			image: '/tommy-web.jpg'
		},
		{
			name: 'Astrid Slaattene Evensen ',
			phone: null,
			email: 'astrid@olafslaattene.no',
			image: '/astrid-web.jpg'
		},
		{
			name: 'Synnøve Frydenberg',
			phone: null,
			email: null,
			image: '/synnove-web.jpg'
		}
	];
</script>

<section class="hero is-main">
	<div class="hero-body is-flex is-justify-content-center">
		<h1 class="title text-white">VI DEKKER SØRLANDET - DØGNVAKT: 92 61 07 47</h1>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="columns">
			<div class="column">
				<h2>Hvorfor velge Slaattene?</h2>
				<ul class="list">
					<li>Vi dekker hele Sørlandet</li>
					<li>Personlig samtale i eget hjem eller ved vårt kontor</li>
					<li>Koordinering med prest og kirkekontor</li>
					<li>Håndtering og bestilling av dødsannonser</li>
					<li>Dokumenthåndtering er inkludert</li>
					<li>Klassisk hvit kiste eller urne er inkludert</li>
					<li>Bestilling av blomster, kranser</li>
					<li>Nye, moderne og verdige bårebiler.</li>
					<li>Vi hjelper med alt det praktiske før, under og etter begravelsen</li>
					<li>Vi har over 90 års erfaring</li>
				</ul>
			</div>
			<div class="column">
				<iframe
					width="500"
					height="300"
					src="https://www.youtube.com/embed/ePtws5s_dvc"
					title="Hvorfor velge Slaattene begravelsesbyrå"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
				/>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2>Ved dødsfall</h2>
		<div class="buttons">
			<a class="button is-main" href="/seremoni"> Seremoni </a>
			<a class="button is-main" href="/forbered-begravelse"> Forbered begravelse </a>
			<a class="button is-main" href="/hjelp-ved-dødsfall"> Hjelp ved dødsfall </a>
			<a class="button is-main" href="/valg-av-kiste"> Valg av kiste </a>
			<a
				class="button is-main"
				target="_blank"
				rel="noreferrer"
				href="http://www.slaatteneblomster.no/"
			>
				Blomster til seremoni
			</a>
			<a class="button is-main" href="/gravferdsmonumenter"> Gravferdsmonumenter </a>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<h2>Våre ansatte</h2>

		<div class="columns is-multiline">
			{#each employees as employee}
				<div class="column is-one-fourth">
					<Employee
						name={employee.name}
						phone={employee.phone}
						email={employee.email}
						image={employee.image}
					/>
				</div>
			{/each}
		</div>
	</div>
</section>
