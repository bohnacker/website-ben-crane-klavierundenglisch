<script>
</script>

<svelte:head>
	<title>Benjamin Crane - Trauredner & Seelsorger aus Aalen</title>
	<meta name="description" content="Benjamin Crane begleitet Euch bei Freien Trauungen, Kinderwillkommensfesten, Eheerneuerungen und Abschiedsfeiern mit Einfühlungsvermögen und Leidenschaft." />
	<meta name="keywords" content="Freie Trauung Aalen, Trauredner Aalen, Trauerredner, Kinderwillkommensfest, Eheerneuerung, Benjamin Crane, freier Redner, Hochzeit Aalen" />
	<meta property="og:title" content="Benjamin Crane - Trauredner & Trauerredner aus Aalen" />
	<meta property="og:description" content="Persönliche freie Trauungen, Kinderwillkommensfeste und Abschiedsfeiern. Mit englischem Humor und Leidenschaft." />
	<meta property="og:url" content="https://benjamin-crane.de" />
	<meta property="og:image" content="https://benjamin-crane.de/images/Ben_bearbeitet_extended.JPG" />
	<link rel="canonical" href="https://benjamin-crane.de" />
	
	<!-- Strukturierte Daten für Rich Snippets -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": ["Person", "LocalBusiness"],
		"name": "Benjamin Crane",
		"alternateName": ["Benjamin Crane", "benjamin-crane.de"],
		"jobTitle": "Freier Redner",
		"description": "Freier Redner für Trauungen, Kinderwillkommensfeste, Eheerneuerungen und Abschiedsfeiern in Aalen und Umgebung.",
		"url": "https://benjamin-crane.de",
		"image": [
			"https://benjamin-crane.de/images/Ben_bearbeitet_extended.JPG"
		],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "Aalen",
			"addressRegion": "Baden-Württemberg",
			"addressCountry": "DE"
		},
		"areaServed": [
			{
				"@type": "City",
				"name": "Aalen"
			},
			{
				"@type": "State",
				"name": "Baden-Württemberg"
			}
		],
		"serviceType": [
			"Freie Trauung",
			"Hochzeitsrede",
			"Kinderwillkommensfest",
			"Eheerneuerung",
			"Abschiedsfeier",
			"Trauerrede"
		],
		"priceRange": "€€",
		"email": "kontakt@benjamin-crane.de"
	}
	</script>`}
</svelte:head>

<!-- Hero Image - Full Width -->
<img
	src="./images/Ben_bearbeitet_extended.JPG"
	alt="Profilbild Benjamin Crane"
	class="h-56 max-h-56 w-full object-cover object-center md:h-[32rem] md:max-h-[32rem] lg:h-[36rem] lg:max-h-[36rem]"
/>

<!-- Start section with centered headline and a first centered paragraph -->
<section class="content-container-centered my-8 flex flex-col items-center gap-6">
	<div
		class="font-family-heading text-center text-xl font-light tracking-normal italic md:text-3xl"
	>
		<p>
			Mein Name ist Benjamin Crane und ich möchte Euch Flügel verleihen für Euer ganz besonderes Event.
		</p>
	</div>

	<img src="/images/Kranich_freigestellt.png" alt="Kranich Logo" class="h-32 md:h-48 w-auto object-contain opacity-90 drop-shadow-sm" />

	<hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" />
</section>

<section class="content-container my-6 flex flex-col items-center gap-8">
	<!-- <h2 class="heading-h2 mb-4 text-center md:text-3xl">
		Für alle wichtigen Wege – mit Liebe und Vertrauen
	</h2> -->

	<div class="flex w-full flex-col-reverse items-center gap-8 md:flex-row mb-12">
		<!-- Container für Zitat oder Bild (links) -->
		<div class="flex w-full justify-center md:w-1/2 md:pr-10">
			<div class="py-8 border-y border-text-hover/30 w-full flex flex-col justify-center my-4 md:my-0">
				<blockquote class="text-text-base font-family-heading text-center italic text-[1.35rem] leading-relaxed md:text-2xl border-none pl-0 bg-transparent">
					„Ob auf Deutsch oder auf Englisch begleite ich Euch gerne durch die wichtigsten Ereignisse Eures Lebens mit Einfühlungsvermögen und humour, Leidenschaft und time for you."
					
					<cite class="block mt-6 text-sm font-sans not-italic uppercase tracking-widest text-text-hover opacity-90">— Benjamin Crane</cite>
				</blockquote>
			</div>
		</div>

		<!-- Text-Container (rechts) -->
		<div class="w-full md:w-1/2">
			<div class="text-text-base space-y-4 text-left text-sm tracking-wide md:text-base">
				<p>
					Ich freue mich auf Euch und Eure Geschichte! Als Euer Trauredner, Seelsorger, Laienprediger und Musiker gestalte ich Eure Feierlichkeiten mit:
				</p>

				<ul class="mt-6 space-y-3">
					<li class="flex items-start">
						<span class="text-text-hover mr-3 flex-shrink-0">•</span>
						<div>
							<strong class="font-medium tracking-normal">Freie Trauung</strong> – Eure Liebe in Dur- und Molltonarten feiern.
						</div>
					</li>

					<li class="flex items-start">
						<span class="text-text-hover mr-3 flex-shrink-0">•</span>
						<div>
							<strong class="font-medium tracking-normal">Kinderwillkommensfest</strong> – Ein neues
							Leben wunderschön und emotional begrüßen.
						</div>
					</li>

					<li class="flex items-start">
						<span class="text-text-hover mr-3 flex-shrink-0">•</span>
						<div>
							<strong class="font-medium tracking-normal">Eheerneuerung</strong> – Nach Jahren der gemeinsamen Ehe einen Meilenstein gebührend feiern.
						</div>
					</li>

					<li class="flex items-start">
						<span class="text-text-hover mr-3 flex-shrink-0">•</span>
						<div>
							<strong class="font-medium tracking-normal">Abschiedsfeier</strong> – Einen Raum für heilende Erinnerungen schaffen – würdevoll und mitfühlend.
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- <hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" /> -->
</section>
