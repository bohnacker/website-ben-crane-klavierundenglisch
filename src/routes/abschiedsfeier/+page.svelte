<script>
	import { handleEmailClick } from '$lib/helpers';
</script>

<svelte:head>
	<title>Abschiedsfeier - Benjamin Crane</title>
	<meta name="description" content="Würdevolle und schöne Abschiedsfeiern mit Benjamin Crane." />
</svelte:head>

<section class="content-container-narrow my-12 flex flex-col items-center gap-6">
	<h1 class="heading-h1 md:text-4xl text-center">Abschiedsfeier</h1>

	<div class="text-text-base space-y-6 text-left text-sm tracking-wide md:text-base">
		<p>
			Ich nehme Euch in den Arm und ermutige Euch, traut Euch zu trauern.
		</p>
		<p>
			Ihr habt einen wertvollen Menschen verloren, der Euch Jahre oder sogar Jahrzehnte lang mit Wort und Tat, Liebe und Zeit zur Seite stand. Nun wollen wir gemeinsam eine würdevolle und schöne Abschiedsfeier gestalten, die viele persönliche Aspekte beinhaltet.
		</p>
		<p>
			Mit Ritualen, die Eurem Lieben bestimmt sehr gefallen würden, schaffen wir einen Raum für heilende Erinnerungen. Als Euer Trauerredner werde ich Euch mit Einfühlungsvermögen helfen, sowohl in Dur- und Molltonarten diese Abschiedsfeier würdevoll zu gestalten.
		</p>
		<p>
			Ich freue mich auf Euren Kontakt und die Geschichte von diesem Euch-so-wertvollen-Menschen mit allen seinen/ihren Hochs und Tiefs kennenzulernen. Wir schauen, ob wir zueinander passen und ob wir uns trauen, den Weg zu der Trauerfeier gemeinsam zu beschreiten.
		</p>
		<p>
			Wenn Ihr schon einige Vorstellungen und Pläne habt - z.B. Location, Wünsche, Rituale, usw. - könnt Ihr mir diese in Eurer Kontaktaufnahme gerne hinzufügen. Gemeinsam werden wir ein würdevolles Abschiedsfest gestalten. Ich werde für Euch und Eure Familie beten.
		</p>
		<p class="font-bold text-center text-lg mt-8">
			Traut Euch zu trauern!<br/>
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
