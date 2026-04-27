<script>
	import AudioPlayer from '$lib/components/AudioPlayer.svelte';
	import { handleEmailClick } from '$lib/helpers';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Freie Trauung - Benjamin Crane</title>
	<meta name="description" content="Eure Freie Trauung mit Benjamin Crane - individuell, emotional und einzigartig." />

	<link rel="canonical" href="https://trauteuchzutrauen.de/freie-trauung" />
	<meta property="og:title" content="Freie Trauung - Benjamin Crane" />
	<meta property="og:description" content="Eure Freie Trauung mit Benjamin Crane - individuell, emotional und einzigartig." />
	<meta property="og:url" content="https://trauteuchzutrauen.de/freie-trauung" />
	<meta property="og:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
</svelte:head>

<section class="content-container-narrow my-12 flex flex-col items-center gap-6">
	<h1 class="heading-h1 md:text-4xl text-center">Freie Trauung</h1>

	<div class="text-text-base space-y-6 text-left text-sm tracking-wide md:text-base">
		<p>
			Ich freue mich total für Euch, dass Ihr Euch traut, Euch zu trauen, dass Ihr Euch gegenseitig komplett vertrauen wollt und diesen Schritt durch Eure selbst-gestaltete Freie Trauung besiegeln wollt! Herzlichen Glückwunsch!
		</p>
		<p>
			Ich bin sehr gespannt, welche von den vielen Ritualen Ihr aussuchen werdet, damit Eure wundervolle Hochzeit, in der Ihr im Mittelpunkt steht, unvergesslich und emotional wird: setzt Eurer Kreativität keine Grenzen, lasst ihr freien „Trau-Lauf“ und ich unterstütze Euch, dass Ihr Eure Liebe in Dur- und Molltonarten feiert.
		</p>
		<p>
			Als Halbengländer und Halbdeutscher und bekennender Christ kenne ich einige Probleme und Herausforderungen, die das Aufeinandertreffen von „2 Welten“ mit sich bringen kann. Mein ganzes Leben lang arbeite ich an gangbaren Lösungen, die immer wieder Kreativität, Neuausrichtung, Umdenken und Zielstrebigkeit erfordern!
		</p>
		<p>
			Mein früherer Chef meinte: „Mit Ihnen wird das Leben nie langweilig!“ Mit englischem Humor und German efficiency gekoppelt mit Leidenschaft und Romantik freue ich mich als Euer Trauredner, dieses Fest, mit dem Ihr Eure Ehe beginnen wollt, mit Euch zu gestalten.
		</p>
		<p>
			Auf Euren Kontakt, Eure Geschichte mit allen Hochs und Tiefs und was Euch im Besonderen ausmacht, bin ich gespannt. Wir können schauen, ob die Chemie stimmt - ich habe auch Ecken und Kanten😉 - und ob wir uns trauen, den Weg zu Euer Freien Trauung gemeinsam zu beschreiten.
		</p>
		<p>
			Wenn Ihr schon einige Vorstellungen habt z.B. Location, Wünsche, Rituale, usw.…, könnt Ihr diese in Eurer Kontaktaufnahme gerne hinzufügen. Gemeinsam werden wir den hoffentlich schönsten Tag Eures Lebens, Eure Hochzeit, erleben. Einem ersten kostenlosen und unverbindlichen Kennenlerngespräch folgen ein Vorgespräch - Fragebögen und einige to-dos gibt es als Hausaufgabe - und vielleicht ein paar Telefonate.
		</p>
		<p>
			Ich biete Euch biblisch-basierte Paarberatungsabende an, in denen wir mein in 2025 zusammengestelltes Seminarbuch „Beloved, ich liebe Dich – Für Paare, die es heute sagen und dies bis der Tod sie scheidet, auch noch sagen wollen“ durcharbeiten. Ich werde für Euch beten.
		</p>
		<p class="font-bold text-center text-lg mt-8">
			Traut Euch, Euch zu trauen!<br/>
			Euer Benjamin
		</p>
	</div>

	<!-- Hörbeispiele -->
	<div class="mt-20 w-full border-t border-text-hover/20 pt-8">
		<h2 class="heading-h2 mb-10 text-center">Hörproben & Einblicke</h2>
		<div class="grid grid-cols-1 gap-6 max-w-xl mx-auto w-full mt-8">
			{#each [
				{ title: 'Eheversprechen', file: 'Eheversprechen%2002.m4a' },
				{ title: 'Die Tortenspitze', file: 'Die%20Tortenspitze%20gut.m4a' },
				{ title: 'Engländerin', file: 'Engländerin%2002%20gut.m4a' }
			] as audio}
				<AudioPlayer title={audio.title} src="{base}/example_speeches/{audio.file}" />
			{/each}
		</div>
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
