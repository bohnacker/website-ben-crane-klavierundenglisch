<script>
	function handleEmailClick(event) {
		event.preventDefault();
		const email = atob('ZWQudGVkZXItc3VrcmFtQG9mbmk=').split('').reverse().join('');
		window.location.href = `mailto:${email}`;
	}
</script>

<svelte:head>
	<title>Kontakt - Markus Bohnacker | Freier Redner Stuttgart</title>
	<meta name="description" content="Kontaktieren Sie Markus Bohnacker für Ihre freie Trauung, Taufe oder Abschiedsfeier in Stuttgart." />
	<meta name="keywords" content="Kontakt Markus Bohnacker, Trauredner Stuttgart kontaktieren, freie Trauung anfragen, E-Mail Markus redet" />
	<meta property="og:title" content="Kontakt zu Markus Bohnacker - Freier Redner" />
	<meta property="og:description" content="Lassen Sie uns über Ihre besondere Zeremonie sprechen. Kontaktieren Sie Markus Bohnacker für eine persönliche Beratung." />
	<meta property="og:url" content="https://markus-redet.de/kontakt" />
	<link rel="canonical" href="https://markus-redet.de/kontakt" />
</svelte:head>

<section class="content-container-centered my-8 md:mb-12">
	<h1 class="heading-h1 mb-4">Kontakt</h1>

	<div class="font-family-heading text-center text-lg font-light tracking-normal italic md:text-xl">
		<p>
			Lasst uns sprechen! Ich freue mich darauf, Euch kennenzulernen und mehr über Eure Feier zu
			erfahren.
		</p>
	</div>

	<hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" />
</section>

<!-- Hauptkontakt-Bereich -->
<section class="content-container my-8 md:mb-12">
	<div class="flex w-full justify-center">
		<!-- E-Mail Kontakt (zentriert) -->
		<div class="w-full max-w-lg">
			<div class="bg-background-footer rounded-lg border border-gray-200 p-6 shadow-sm">
				<h2 class="heading-h2 mb-4 text-center">Direkt per E-Mail</h2>

				<div class="text-text-base space-y-4 text-sm tracking-wide md:text-base">
					<p>
						Ihr habt konkrete Fragen oder möchtet gleich ins Detail gehen? Dann schreibt mir direkt
						eine E-Mail.
					</p>
					<p>
						Ich versuche immer so schnell wie möglich zu antworten – aber auch ich habe manchmal
						viel zu tun. In der Regel könnt Ihr aber innerhalb von 24 Stunden mit einer Antwort
						rechnen.
					</p>
				</div>

				<div class="mt-6 text-center">
					<button
						onclick={handleEmailClick}
						class="font-family-heading bg-[#A551FF] hover:bg-[#8A24F0] inline-flex items-center justify-center rounded-lg border-2 border-[#A551FF] hover:border-[#8A24F0] px-6 py-3 font-light tracking-wide text-white transition-all duration-200"
					>
						E-Mail schreiben
					</button>
				</div>
			</div>
		</div>

		<!-- Formular Kontakt (deaktiviert) -->
		<!-- 
		<div class="w-full md:w-1/2">
			<div class="bg-background-footer h-full rounded-lg border border-gray-200 p-6 shadow-sm flex flex-col">
				<h2 class="heading-h2 mb-4 text-center">Über das Formular</h2>

				<div class="text-text-base space-y-4 text-sm tracking-wide md:text-base flex-grow">
					<p>
						Ihr möchtet mir schon vorab Details zu Eurer Feier mitteilen? Das Online-Formular hilft
						dabei:
					</p>

					<ul class="space-y-2">
						<li class="flex items-start">
							<span class="text-text-hover mr-3 flex-shrink-0">•</span>
							<span>Wunschtermine & Ort der Feier</span>
						</li>
						<li class="flex items-start">
							<span class="text-text-hover mr-3 flex-shrink-0">•</span>
							<span>Art der Zeremonie</span>
						</li>
						<li class="flex items-start">
							<span class="text-text-hover mr-3 flex-shrink-0">•</span>
							<span>Besondere Wünsche</span>
						</li>
					</ul>
				</div>

				<div class="mt-6 text-center">
					<a
						href="."
						target="_blank"
						class="font-family-heading border-text-base text-text-base hover:bg-text-base inline-flex items-center justify-center rounded-lg border-2 bg-transparent px-6 py-3 font-light tracking-wide transition-all duration-200 hover:text-white"
					>
						Formular ausfüllen
					</a>
				</div>
			</div>
		</div>
		-->
	</div>


</section>

<!-- Kontakt-Bild Bereich -->
<!-- <section class="flex justify-center my-8">
	<img src="/images/Kontakt-bearbeitet.jpg" alt="Kontakt" class="w-72 max-w-full rounded-full shadow-xl object-cover" />
</section> -->

<!-- Zusätzliche Information -->
<section class="content-container-narrow my-8">
		<hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" />
	<div>
		<h2 class="heading-h2 mb-4 text-center">Wie läuft's ab?</h2>

		<div class="space-y-4">
			<div class="flex items-center">
				<div
					class="font-family-heading border-text-base text-text-base mr-4 flex h-8 w-8 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-medium"
				>
					1
				</div>
				<div class="text-text-base text-sm tracking-wide md:text-base">
					<strong class="font-medium tracking-normal">Erstkontakt:</strong> Ihr schreibt mir einfach mit Euren Wünschen und Fragen – völlig unverbindlich.
				</div>
			</div>

			<div class="flex items-center">
				<div
					class="font-family-heading border-text-base text-text-base mr-4 flex h-8 w-8 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-medium"
				>
					2
				</div>
				<div class="text-text-base text-sm tracking-wide md:text-base">
					<strong class="font-medium tracking-normal">Kennenlernen:</strong> Wir telefonieren oder treffen
					uns auf einen Kaffee – ganz entspannt.
				</div>
			</div>

			<div class="flex items-center">
				<div
					class="font-family-heading border-text-base text-text-base mr-4 flex h-8 w-8 md:h-10 md:w-10 flex-shrink-0 items-center justify-center rounded-full border-2 text-lg font-medium"
				>
					3
				</div>
				<div class="text-text-base text-sm tracking-wide md:text-base">
					<strong class="font-medium tracking-normal">Planung:</strong> Wenn die Chemie stimmt, besprechen
					wir alle Details für Eure perfekte Feier.
				</div>
			</div>
		</div>
	</div>
</section>
