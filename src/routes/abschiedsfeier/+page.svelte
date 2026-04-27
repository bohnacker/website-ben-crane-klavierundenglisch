<script>
	import { handleEmailClick } from '$lib/helpers';
</script>

<svelte:head>
	<title>Abschiedsfeier - Benjamin Crane</title>
	<meta name="description" content="Würdevolle und schöne Abschiedsfeiern mit Benjamin Crane." />

	<link rel="canonical" href="https://trauteuchzutrauen.de/abschiedsfeier" />
	<meta property="og:title" content="Abschiedsfeier - Benjamin Crane" />
	<meta property="og:description" content="Würdevolle und schöne Abschiedsfeiern mit Benjamin Crane." />
	<meta property="og:url" content="https://trauteuchzutrauen.de/abschiedsfeier" />
	<meta property="og:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://trauteuchzutrauen.de/images/Ben_bearbeitet_extended.JPG" />
</svelte:head>

<section class="content-container-centered my-6 flex flex-col items-center gap-1">
	<h1 class="heading-h1 mt-6 md:text-4xl text-center">Abschiedsfeier</h1>
</section>

<section class="content-container flex flex-col items-center gap-x-8">


	<div class="flex w-full flex-col gap-x-8 md:flex-row md:items-start">
		<div class="relative mb-12 flex w-full md:w-5/12 mr-0 md:mr-10 items-start self-start">
			<img
				src="./images/prairie-679014_half.jpg"
				alt="Weite Prairie"
				class="relative z-10 aspect-4/3 w-full object-cover"
			/>
		</div>

		<div class="w-full md:w-7/12">
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
			</div>
		</div>
	</div>

	<div class="w-full max-w-4xl">
		<p class="font-bold text-center text-lg my-6">
			Traut Euch zu trauern!<br/>
			Euer Benjamin
		</p>
	</div>
	
	<div class="mt-8 mb-16 w-full border-t border-text-hover/20 pt-12 flex justify-center">
		<a
			href="mailto:bcbooks@gmx.de"
			onclick={handleEmailClick}
			class="bg-gray-800 text-white px-10 py-4 rounded-none hover:bg-text-hover transition-colors uppercase text-xs tracking-widest font-medium shadow-sm"
		>
			Kontakt aufnehmen
		</a>
	</div>
</section>
