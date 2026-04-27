<script>
	import { handleEmailClick } from '$lib/helpers';
</script>

<svelte:head>
	<title>Kontakt - Benjamin Crane</title>
	<meta name="description" content="Nimm Kontakt auf mit Benjamin Crane für Freie Trauungen, Taufen und Seminare." />

	<link rel="canonical" href="https://trauteuchzutrauen.de/kontakt" />
	<meta property="og:title" content="Kontakt - Benjamin Crane" />
	<meta property="og:description" content="Nimm Kontakt auf mit Benjamin Crane für Freie Trauungen, Taufen und Seminare." />
	<meta property="og:url" content="https://trauteuchzutrauen.de/kontakt" />
	<meta property="og:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
</svelte:head>

<section class="content-container-narrow my-12 flex flex-col items-center gap-6">
	<h1 class="heading-h1 md:text-4xl text-center">Kontakt</h1>

	<div class="text-text-base text-center mb-6 space-y-6">
		<p class="text-lg md:text-xl font-family-heading italic">
			Ich freue mich auf Eure Nachricht!
		</p>
		<p class="text-sm md:text-base leading-relaxed tracking-wide">
			Ob Ihr eine Freie Trauung plant, ein Kinderwillkommensfest feiern wollt oder Begleitung für eine Abschiedsfeier sucht – schreibt mir einfach und unverbindlich eine E-Mail. 
		</p>
		<p class="text-sm md:text-base leading-relaxed tracking-wide">
			Ich nehme mir gerne Zeit für Eure Geschichte und Eure Wünsche.
		</p>
	</div>

	<div class="mt-8 text-center">
		<a
			href="mailto:bcbooks@gmx.de"
			onclick={handleEmailClick}
			class="bg-gray-800 text-white px-10 py-4 rounded-none hover:bg-text-hover transition-colors uppercase text-xs tracking-widest font-medium shadow-sm"
		>
			E-Mail schreiben
		</a>
	</div>

	<!-- <div class="mt-24 pt-12 border-t border-text-hover/20 w-full text-center text-sm text-text-base space-y-2 opacity-80">
		<p class="font-bold tracking-normal">Benjamin Crane</p>
		<p>Saarstraße 40 · 73431 Aalen</p>
		<p>Telefon: +49 162 1926412</p>
	</div> -->
</section>
