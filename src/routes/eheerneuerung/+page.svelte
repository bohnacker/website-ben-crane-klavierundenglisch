<script>
	import { handleEmailClick } from '$lib/helpers';
</script>

<svelte:head>
	<title>Eheerneuerung - Benjamin Crane</title>
	<meta name="description" content="Eheerneuerung mit Benjamin Crane - Euren Meilenstein gebührend feiern." />

	<link rel="canonical" href="https://trauteuchzutrauen.de/eheerneuerung" />
	<meta property="og:title" content="Eheerneuerung - Benjamin Crane" />
	<meta property="og:description" content="Eheerneuerung mit Benjamin Crane - Euren Meilenstein gebührend feiern." />
	<meta property="og:url" content="https://trauteuchzutrauen.de/eheerneuerung" />
	<meta property="og:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
</svelte:head>

<section class="content-container-narrow my-12 flex flex-col items-center gap-6">
	<h1 class="heading-h1 md:text-4xl text-center">Eheerneuerung</h1>

	<div class="text-text-base space-y-6 text-left text-sm tracking-wide md:text-base">
		<p>
			Ihr habt einen Meilenstein in Eurer Ehe erreicht - 10, 25, 40 oder sogar 50 Jahre? - und traut Euch, diesen mit Menschen, die Euch auf dem gemeinsamen Weg wertvolle Begleiter waren und auch in schweren und schönen Zeiten zu Euch standen, gebührend zu feiern!
		</p>
		<p>
			Dann freue ich mich mit Euch, Eure Eheerneuerung mit englischem Humor und German efficiency gekoppelt mit Leidenschaft und Romantik zu planen und durchzuführen.
		</p>
		<p>
			Ich bin gespannt auf Euren Kontakt, Eure gemeinsame Geschichte und was Ihr in den Jahren Eurer Ehe erlebt habt! Wenn Ihr schon einige Vorstellungen und Pläne habt - z.B. Location, Wünsche, Rituale, usw. - könnt Ihr mir diese in Eurer Kontaktaufnahme gerne hinzufügen. Gemeinsam werden wir den besonderen Tag Eurer Eheerneuerung gestalten!
		</p>
		<p>
			Gern biete ich Euch an, einen TÜV für Eure Beziehung zu machen mit meinem Seminarbuch „Beloved, ich liebe Dich – Für Paare, die es heute sagen und dies bis der Tod sie scheidet, auch noch sagen wollen“ – ein Eheseminar bestehend aus mehreren Einheiten. Ich werde für Euch und Eure Familie beten.
		</p>
		<p class="font-bold text-center text-lg mt-8">
			Traut Euch, Eure Eheerneuerung zu feiern!<br/>
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
