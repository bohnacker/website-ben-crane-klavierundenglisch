<script>
	// Berechnet das aktuelle Alter eines Patenkindes indem das Geburtsdatum von heute subtrahiert wird.
	function calculateAge(birthDate, uppercase = false) {
		const today = new Date();
		birthDate = new Date(birthDate);
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();
		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		// Bei Zahlen bis zwölf werd das alter als Text zurückgegeben
		if (age < 13) {
			const ageText = [
				'null',
				'eins',
				'zwei',
				'drei',
				'vier',
				'fünf',
				'sechs',
				'sieben',
				'acht',
				'neun',
				'zehn',
				'elf',
				'zwölf'
			];
			if (uppercase) {
				return ageText[age].charAt(0).toUpperCase() + ageText[age].slice(1);
			}
			// Rückgabe in Kleinbuchstaben, wenn uppercase nicht gesetzt ist
			return ageText[age];
		}
		return age;
	}
</script>

<svelte:head>
	<title>Über mich - Markus Bohnacker | Freier Redner für besondere Momente</title>
	<meta name="description" content="Erfahren Sie mehr über Markus Bohnacker - Ihren freien Redner aus Stuttgart. Von Hessen nach Baden-Württemberg, mit Herz und Leidenschaft für bewegende Reden bei Trauungen, Taufen und Abschiedsfeiern." />
	<meta name="keywords" content="Markus Bohnacker, freier Redner Stuttgart, Trauredner, Biografie, Lebenslauf, persönlich, Odenwald, Stuttgart" />
	<meta property="og:title" content="Über Markus Bohnacker - Freier Redner aus Stuttgart" />
	<meta property="og:description" content="Die Geschichte von Markus Bohnacker: Vom Odenwald nach Stuttgart - mit Leidenschaft für bewegende Worte bei besonderen Anlässen." />
	<meta property="og:url" content="https://markus-redet.de/ueber-mich" />
	<link rel="canonical" href="https://markus-redet.de/ueber-mich" />
</svelte:head>

<!-- Start section with centered headline and a first centered paragraph -->
<section class="content-container-centered my-6 flex flex-col items-center gap-1">
	<h1 class="heading-h1 mt-6 md:text-4xl">Trauungen mit Herz, Wort und Augenzwinkern</h1>

	<!-- <div class="text-text-base space-y-4 text-sm tracking-wide md:text-base">
		<p>
			Hier wäre ein kurzer Einleitungstext über mich, der meine Leidenschaft für das Reden und die
			freie Trauung beschreibt. Ich möchte den Lesern einen Einblick in meine Motivation geben und
			warum ich diese Dienstleistung anbiete. Zudem kann ich hier erwähnen, dass auch Trauerfeiern
			und andere Anlässe zu meinen Tätigkeiten gehören.
		</p>
	</div> -->

	<!-- <hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" /> -->
</section>

<section class="content-container flex flex-col items-center gap-x-8">
	<div class="flex w-full flex-col gap-x-8 md:flex-row">
		<!-- Container für Zitat oder Bild (links) -->
		<div class="mb-8 flex w-full md:w-1/2">
			<div class="bg-background-footer flex rounded-lg border border-gray-200 p-3 shadow-sm">
				<!-- Alternative: Platzhalter für Bild -->
				<div class="flex w-full overflow-hidden rounded">
					<img
						src="./images/P1390088_web_warm.jpg"
						alt="Markus Bohnacker"
						class="h-auto w-full object-cover"
					/>
				</div>
			</div>
		</div>

		<!-- Text-Container (rechts) -->
		<div class="w-full md:w-1/2">
			<div class="text-text-base space-y-4 text-left text-sm tracking-wide md:text-base">
				<p>
					Hi, ich bin <span class="font-bold tracking-normal">Markus Bohnacker</span> – geboren 1973
					in Lorsch an der schönen Bergstraße. Aufgewachsen bin ich im hessischen Odenwald, zusammen
					mit zwei älteren Brüdern – auf einem Bauernhof mit allem, was dazugehört.
				</p>

				<p>
					Nach der Schule habe ich eine Ausbildung zum Bankkaufmann gemacht. Mein Papa meinte
					damals: „Erst wird was Ordentliches gelernt – dann kannst du machen, was du willst!" Und
					recht hatte er.
				</p>

				<p>
					2008 hat mich mein Job nach Stuttgart gebracht – und geblieben bin ich aus gutem Grund:
					Seit 2016 bin ich glücklich verheiratet mit meinem wunderbaren Mann Hartmut. Wir sind
					stolze Patenonkel von fünf tollen Kids und jungen Erwachsenen zwischen {calculateAge(
						'2020-09-18'
					)}
					und {calculateAge('2001-06-18')} Jahren.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="content-container-narrow flex flex-col items-center gap-x-8">
	<div class="text-center">
		<div class="text-text-base space-y-4 text-left text-sm tracking-wide md:text-base">
			<p>
				In unserer Familie war immer klar: Wenn jemand reden soll – sei es bei einer Hochzeit,
				Taufe, einem Geburtstag oder auch bei traurigen Anlässen – dann macht das der Markus. Und
				ehrlich gesagt: Ich mach's richtig gern!
			</p>

			<p>
				Was ich an freien Trauungen so liebe? Sie sind voller Möglichkeiten! Kein starres Gerüst,
				kein „so muss es sein". <span class="font-bold tracking-normal"
					>Ihr steht im Mittelpunkt</span
				> – und alles wird so, wie es zu euch passt. Persönlich, kreativ und einfach echt.
			</p>
		</div>
	</div>

	<hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" />
</section>

<section class="content-container flex flex-col items-center gap-x-8">
	<div class="text-text-base space-y-4 text-center text-sm tracking-wide md:text-base">
		<p>
			<span class="font-family-heading text-2xl font-light tracking-normal italic md:text-3xl"
				>Ich freu mich darauf, mit euch gemeinsam eine Trauung zu gestalten, die genau eure
				Handschrift trägt!</span
			>
		</p>
	</div>
	<hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" />
</section>
