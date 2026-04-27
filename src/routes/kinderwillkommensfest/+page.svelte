<script>
	import { handleEmailClick } from '$lib/helpers';
</script>

<svelte:head>
	<title>Kinderwillkommensfest - Benjamin Crane</title>
	<meta name="description" content="Kinderwillkommensfest mit Benjamin Crane - Euren kleinen Goldschatz gebührend feiern." />

	<link rel="canonical" href="https://trauteuchzutrauen.de/kinderwillkommensfest" />
	<meta property="og:title" content="Kinderwillkommensfest - Benjamin Crane" />
	<meta property="og:description" content="Kinderwillkommensfest mit Benjamin Crane - Euren kleinen Goldschatz gebührend feiern." />
	<meta property="og:url" content="https://trauteuchzutrauen.de/kinderwillkommensfest" />
	<meta property="og:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
</svelte:head>

<section class="content-container-narrow my-12 flex flex-col items-center gap-6">
	<h1 class="heading-h1 md:text-4xl text-center">Kinderwillkommensfest</h1>

	<div class="text-text-base space-y-6 text-left text-sm tracking-wide md:text-base">
		<p>
			Herzlichen Glückwunsch zur Geburt Eures kleinen Goldschatzes, der so wunderbar geschaffen ist.
		</p>
		<p>
			Nun wollt Ihr Euch trauen, Eurem Kind ein unvergessliches Kinderwillkommensfest mit ganz vielen persönlichen Noten zu geben, an dem Eure Familie, Verwandtschaft und Freunde teilnehmen und mit Euch feiern. Ich bin gespannt, welche von den vielen Ritualen Ihr aussuchen werdet und wie wir gemeinsam das Kinderwillkommensfest des neuen Erdenbürgers wunderschön und emotional gestalten.
		</p>
		<p>
			Mit englischem Humor und German efficiency gekoppelt mit Leidenschaft und Romantik freue ich mich mit Euch, dieses Fest für Euren Schatz zu gestalten.
		</p>
		<p>
			Auf Euren Kontakt, Eure Geschichte und die Eures Kindes bin ich gespannt. Wenn Ihr schon einige Vorstellungen habt z.B. Location, Wünsche, Rituale, usw.…, könnt Ihr mir diese in Eurer Kontaktaufnahme gerne hinzufügen. Gemeinsam werden wir den besonderen Tag im Leben Eures Goldschatzes gestalten. Ich werde für Euch und Euer Kind beten.
		</p>
		<p class="font-bold text-center text-lg mt-8">
			Traut Euch, Eurem Kind ein Kinderwillkommensfest zu geben!<br/>
			Euer Benjamin
		</p>
	</div>

	<div class="mt-16 w-full border-t border-text-hover/20 pt-16 flex justify-center">
			<a
			href="mailto:bcbooks@gmx.de"
			onclick={handleEmailClick}
			class="bg-gray-800 text-white px-10 py-4 rounded-none hover:bg-text-hover transition-colors uppercase text-xs tracking-widest font-medium shadow-sm"
		>
			Kontakt aufnehmen
		</a>
	</div>
</section>
