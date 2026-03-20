<script>
	let prices = {
		"freieTrauung": 1650,
		"freieTrauungText": "1.650",
		"willkommensfest": 1250,
		"willkommensfestText": "1.250",
		"abschiedsfeier": 1100,
		"abschiedsfeierText": "1.100"
	};
</script>

<svelte:head>
	<title>Preise & Leistungen - Markus Bohnacker | Freie Trauungen & Zeremonien</title>
	<meta name="description" content="Faire und transparente Preise für freie Trauungen ({prices.freieTrauungText} €), Taufen ({prices.willkommensfestText} €) und Abschiedsfeiern ({prices.abschiedsfeierText} €) in Stuttgart. Alle Leistungen inklusive persönlicher Beratung und Technik." />
	<meta name="keywords" content="Trauung Preise Stuttgart, freie Trauung Kosten, Trauredner Preise, Taufe Preis, Abschiedsfeier Kosten, Stuttgart Hochzeit Preise" />
	<meta property="og:title" content="Preise für freie Trauungen & Zeremonien - Markus Bohnacker" />
	<meta property="og:description" content="Transparente Preise für individuelle Zeremonien: Freie Trauungen, Taufen und Abschiedsfeiern in Stuttgart und Umgebung." />
	<meta property="og:url" content="https://markus-redet.de/preise" />
	<link rel="canonical" href="https://markus-redet.de/preise" />
	
	<!-- Strukturierte Daten für Dienstleistungen -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Service",
		"provider": {
			"@type": "Person",
			"name": "Markus Bohnacker"
		},
		"serviceType": "Freie Trauungen und Zeremonien",
		"areaServed": {
			"@type": "City",
			"name": "Stuttgart"
		},
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Zeremonien und Feiern",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Freie Trauung",
						"description": "Individuelle Trauungszeremonie mit persönlicher Rede"
					},
					"price": "${prices.freieTrauung}",
					"priceCurrency": "EUR"
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service", 
						"name": "Willkommensfest & Freie Taufe",
						"description": "Feierliche Willkommenszeremonie für neue Erdenbürger"
					},
					"price": "${prices.willkommensfest}",
					"priceCurrency": "EUR"
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Abschiedsfeier",
						"description": "Würdevolle Abschiedszeremonie mit einfühlsamer Rede"
					},
					"price": "${prices.abschiedsfeier}",
					"priceCurrency": "EUR"
				}
			]
		}
	}
	</script>`}
</svelte:head>

<!-- Start section with centered headline and a first centered paragraph -->
<section class="content-container-centered my-6 flex flex-col items-center gap-1">
	<!-- <div class="text-center"> -->
	<h1 class="heading-h1 mt-6 md:text-4xl">Leistungen & Preise</h1>

	<div class="text-text-base space-y-4 text-sm tracking-wide md:text-base">
		<p>
			Natürlich ist es wichtig, den Überblick über Budget und Kosten zu behalten. Deshalb findet Ihr
			hier meine Preise – klar und offen, inklusive aller Leistungen und dem, was an Aufwand
			dazugehört.
		</p>
		<p>Die Mehrwertsteuer von 19 % ist da schon drin.</p>
	</div>
	<!-- </div> -->

	<hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" />
</section>

<!-- Preislisten -->
<section class="content-container-narrow my-8 space-y-8">
	<!-- Freie Trauung -->
	<div class="bg-background-footer rounded-lg border border-gray-200 p-6 shadow-sm">
		<div class="mb-4 text-center">
			<h2 class="heading-h2 mb-2">Freie Trauung</h2>
			<div class="text-text-hover text-xl font-medium md:text-2xl">
				{prices.freieTrauungText} € <span class="text-text-base text-sm">inkl. MwSt.</span>
			</div>
		</div>

		<ul class="space-y-2">
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Kennenlerngespräch</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Vorgespräch zur Trauung</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Schreiben der individuellen Rede</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Persönliche Abstimmung & Kommunikation</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Durchführung der Zeremonie</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Eigene Technik (Mikrofon & Lautsprecher)</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span
					><strong class="font-medium tracking-normal">Bonus:</strong> ausgebildeter Ersthelfer</span
				>
			</li>
		</ul>
	</div>

	<!-- Willkommensfeste & Freie Taufen -->
	<div class="bg-background-footer rounded-lg border border-gray-200 p-6 shadow-sm">
		<div class="mb-4 text-center">
			<h2 class="heading-h2 mb-2">Willkommensfeste & Freie Taufen</h2>
			<div class="text-text-hover text-xl font-medium md:text-2xl">
				{prices.willkommensfestText} € <span class="text-text-base text-sm">inkl. MwSt.</span>
			</div>
		</div>

		<ul class="space-y-2">
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Kennenlerngespräch</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Vorgespräch zur Zeremonie</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Schreiben der individuellen Rede</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Persönliche Abstimmung & Kommunikation</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Durchführung der Zeremonie</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Eigene Technik (Mikrofon & Lautsprecher)</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span
					><strong class="font-medium tracking-normal">Bonus:</strong> ausgebildeter Ersthelfer</span
				>
			</li>
		</ul>
	</div>

	<!-- Abschiedsfeiern -->
	<div class="bg-background-footer rounded-lg border border-gray-200 p-6 shadow-sm">
		<div class="mb-4 text-center">
			<h2 class="heading-h2 mb-2">Abschiedsfeiern</h2>
			<div class="text-text-hover text-xl font-medium md:text-2xl">
				{prices.abschiedsfeierText} € <span class="text-text-base text-sm">inkl. MwSt.</span>
			</div>
		</div>

		<ul class="space-y-2">
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Trauergespräch</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Schreiben der individuellen Rede</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Persönliche Abstimmung & Kommunikation</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Durchführung der Abschiedsfeier</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span>Eigene Technik (Mikrofon & Lautsprecher)</span>
			</li>
			<li class="flex items-start">
				<span class="text-text-hover mr-3 flex-shrink-0">•</span>
				<span
					><strong class="font-medium tracking-normal">Bonus:</strong> ausgebildeter Ersthelfer</span
				>
			</li>
		</ul>
	</div>

		<hr class="border-text-base mx-auto my-6 w-1/2 border-t opacity-50" />

</section>

<!-- Zusätzliche Informationen -->
<section class="content-container-narrow my-8">
	<div class="space-y-6">
		<h2 class="heading-h2 text-center">Was immer dabei ist – und was individuell dazukommt</h2>

		<!-- <div class="bg-background-footer space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm"> -->
		<div class="space-y-4 p-6">
			<div>
				<h3 class="heading-h3 mb-2">Anfahrt</h3>
				<ul class="space-y-1 text-sm md:text-base">
					<li class="flex items-start">
						<span class="text-text-hover mr-3 flex-shrink-0">•</span>
						<span>Innerhalb von 30 km ab meinem Standort: keine Anfahrtskosten</span>
					</li>
					<li class="flex items-start">
						<span class="text-text-hover mr-3 flex-shrink-0">•</span>
						<span>Ab 30 km berechne ich 0,70 € pro gefahrenem Kilometer</span>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="heading-h3 mb-2">Reisen & Übernachtungen</h3>
				<div class="space-y-2 text-sm md:text-base">
					<p>
						Ihr plant Eure Zeremonie an einem besonderen Ort? Ob Strand, Berge oder Lieblingsplatz –
						ich komme gerne zu Euch!
					</p>
					<p>Hotel- und Übernachtungskosten stimmen wir gemeinsam fair ab.</p>
				</div>
			</div>

			<div>
				<h3 class="heading-h3 mb-2">Bei weiteren Reisen</h3>
				<ul class="space-y-1 text-sm md:text-base">
					<li class="flex items-start">
						<span class="text-text-hover mr-3 flex-shrink-0">•</span>
						<span
							>Sollte eine Fluganreise nötig sein, berechne ich die tatsächlichen Flugkosten</span
						>
					</li>
					<li class="flex items-start">
						<span class="text-text-hover mr-3 flex-shrink-0">•</span>
						<span
							>Bei größerem Equipment können auch Frachtkosten dazukommen – auch hier kläre ich
							alles offen und im Voraus mit Euch ab</span
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
