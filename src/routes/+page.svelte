<script>
	import { base } from '$app/paths';
	import { handleEmailClick } from '$lib/helpers';
</script>

<svelte:head>
	<title>Benjamin Crane – Klavier- und Englischunterricht | Aalen</title>
	<meta
		name="description"
		content="Qualifizierter Klavier- und Englischunterricht sowie German Tuition in Aalen & Umgebung von Benjamin Crane. Mit Vivacity, German Efficiency und englischem Humor."
	/>
	<meta
		name="keywords"
		content="Klavierunterricht Aalen, Englischunterricht Aalen, German Tuition, Benjamin Crane, Klavierlehrer, Englisch Nachhilfe, Business German"
	/>
	<meta property="og:title" content="Benjamin Crane – Klavier- und Englischunterricht" />
	<meta
		property="og:description"
		content="Englischunterricht für Jung und Alt, German Tuition für internationale Berufstätige und Klavierunterricht am weißen Flügel."
	/>
	<meta property="og:url" content="https://www.klavierundenglisch.com" />
	<meta
		property="og:image"
		content="https://www.klavierundenglisch.com/images/Ben_am_Klavier.jpg"
	/>
	<link rel="canonical" href="https://www.klavierundenglisch.com" />

	<!-- Strukturierte Daten für Suchmaschinen -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": ["Person", "EducationalOrganization"],
		"name": "Benjamin Crane",
		"jobTitle": "Klavier- und Sprachlehrer",
		"description": "Klavierunterricht, Englischunterricht und German Tuition in Aalen und online.",
		"url": "https://www.klavierundenglisch.com",
		"image": "https://www.klavierundenglisch.com/images/Ben_am_Klavier.jpg",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Saarstraße 40",
			"addressLocality": "Aalen",
			"postalCode": "73431",
			"addressRegion": "Baden-Württemberg",
			"addressCountry": "DE"
		},
		"telephone": "+49-162-1926-412",
		"email": "bcbooks@gmx.de",
		"hasOfferCatalog": {
			"@type": "OfferCatalog",
			"name": "Unterrichtsangebote",
			"itemListElement": [
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Englischunterricht"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "How is your Deutsch? (German Tuition)"
					}
				},
				{
					"@type": "Offer",
					"itemOffered": {
						"@type": "Service",
						"name": "Klavierunterricht"
					}
				}
			]
		}
	}
	</script>`}
</svelte:head>

<!-- Hero Section -->
<section class="border-b border-slate-200/80 bg-white py-12 md:py-20 lg:py-24">
	<div class="content-container">
		<div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
			<!-- Linke Spalte: Intro & Text -->
			<div class="flex flex-col space-y-6 lg:col-span-7">
				<div
					class="inline-flex items-center gap-2 self-start rounded-full border border-[#1b365d]/10 bg-[#f0f4f9] px-3.5 py-1 text-xs font-semibold tracking-wide text-[#1b365d]"
				>
					<span class="inline-block h-2 w-2 rounded-full bg-[#a82333]"></span>
					Aalen &amp; Umgebung · Auch online verfügbar
				</div>

				<h1
					class="font-serif text-3xl font-bold tracking-tight text-[#0f223f] sm:text-4xl md:text-5xl md:leading-[1.15]"
				>
					Englisch- und Klavierunterricht
				</h1>

				<p class="font-serif text-xl text-slate-700 italic md:text-2xl">How is your Deutsch?</p>

				<p class="text-base leading-relaxed text-slate-600 md:text-lg">
					Herzlich willkommen! Als Halb-Engländer und Halb-Deutscher verbinde ich die Freude an
					Sprache und Musik mit <strong class="font-semibold text-slate-800"
						>Vivacity, Zielstrebigkeit, German Efficiency</strong
					>
					und <strong class="font-semibold text-slate-800">englischem Humor</strong>.
				</p>

				<!-- Schnellübersicht / Bulletpoints -->
				<ul class="space-y-2.5 text-sm text-slate-700 md:text-base">
					<li class="flex items-center gap-3">
						<span
							class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f2] text-[#a82333]"
						>
							<svg
								class="h-3.5 w-3.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
							>
						</span>
						<span
							><strong>Englischunterricht</strong> für Jung und Alt – von Schülern bis zu Erwachsenen</span
						>
					</li>
					<li class="flex items-center gap-3">
						<span
							class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f0f4f9] text-[#1b365d]"
						>
							<svg
								class="h-3.5 w-3.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
							>
						</span>
						<span
							><strong>How is your Deutsch?</strong> Private German tuition for international professionals</span
						>
					</li>
					<li class="flex items-center gap-3">
						<span
							class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fdf2f2] text-[#a82333]"
						>
							<svg
								class="h-3.5 w-3.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
							>
						</span>
						<span><strong>Klavierunterricht</strong> am weißen Flügel – ob 6 oder 60 Jahre alt</span
						>
					</li>
				</ul>

				<!-- Call to Action Buttons -->
				<div class="flex flex-wrap items-center gap-3.5 pt-2">
					<a
						href="#kontakt"
						class="inline-flex items-center justify-center rounded-lg bg-[#1b365d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#a82333] hover:shadow-md"
					>
						Jetzt unverbindlich anfragen
					</a>
					<a
						href="tel:+491621926412"
						class="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-[#1b365d] hover:text-[#1b365d]"
					>
						<svg
							class="h-4 w-4 text-[#a82333]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							stroke-width="2"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/></svg
						>
						+49 162 1926 412
					</a>
				</div>
			</div>

			<!-- Rechte Spalte: Foto -->
			<div class="lg:col-span-5">
				<div class="relative mx-auto max-w-md lg:max-w-none">
					<!-- Feiner Akzent-Rahmen im Hintergrund -->
					<div
						class="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#1b365d]/15 to-[#a82333]/15 opacity-70 blur-xs"
					></div>
					<div
						class="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2 shadow-xl"
					>
						<img
							src="{base}/images/Ben_am_Klavier.jpg"
							alt="Benjamin Crane am weißen Klavier"
							class="h-auto w-full rounded-xl object-cover"
							loading="eager"
						/>
						<div class="mt-2.5 px-2 pb-1 text-center">
							<p class="font-serif text-sm text-slate-600 italic">
								Benjamin Crane am weißen Flügel – Musik &amp; Sprache mit britischer Lebensfreude
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Schnellnavigation zu den Bereichen -->
<section class="border-b border-slate-200 bg-slate-100/70 py-6">
	<div class="content-container">
		<div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
			<a
				href="#englisch"
				class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-[#1b365d] hover:shadow-xs"
			>
				<div>
					<span class="block text-xs font-semibold tracking-wider text-[#a82333] uppercase"
						>01. Unterricht</span
					>
					<span class="font-serif text-lg font-semibold text-[#0f223f] group-hover:text-[#1b365d]"
						>Englischunterricht</span
					>
				</div>
				<span
					class="text-xl text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#1b365d]"
					>→</span
				>
			</a>

			<a
				href="#deutsch"
				class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-[#1b365d] hover:shadow-xs"
			>
				<div>
					<span class="block text-xs font-semibold tracking-wider text-[#1b365d] uppercase"
						>02. German Tuition</span
					>
					<span class="font-serif text-lg font-semibold text-[#0f223f] group-hover:text-[#1b365d]"
						>How is your Deutsch?</span
					>
				</div>
				<span
					class="text-xl text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#1b365d]"
					>→</span
				>
			</a>

			<a
				href="#klavier"
				class="group flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-[#1b365d] hover:shadow-xs"
			>
				<div>
					<span class="block text-xs font-semibold tracking-wider text-[#a82333] uppercase"
						>03. Musik</span
					>
					<span class="font-serif text-lg font-semibold text-[#0f223f] group-hover:text-[#1b365d]"
						>Klavierunterricht</span
					>
				</div>
				<span
					class="text-xl text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#1b365d]"
					>→</span
				>
			</a>
		</div>
	</div>
</section>

<!-- Bereich 1: Englischunterricht -->
<section id="englisch" class="scroll-mt-24 py-16 md:py-24">
	<div class="content-container">
		<div class="mx-auto max-w-3xl">
			<div
				class="mb-3 inline-flex items-center gap-2 rounded-md bg-[#fdf2f2] px-3 py-1 text-xs font-bold tracking-wider text-[#a82333] uppercase"
			>
				Sprachunterricht
			</div>
			<h2 class="heading-h1 mb-6">Englischunterricht für Jung und Alt</h2>

			<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
				<!-- Zitat aus Originaltext -->
				<blockquote
					class="my-2 border-l-4 border-[#a82333] pl-5 text-lg leading-relaxed text-slate-700 italic sm:text-xl"
				>
					„Als Halb-Engländer und Halb-Deutscher, in England, Schottland, Irland gelebt und nun seit
					2008 in Deutschland biete ich Englischunterricht für Jung und Alt an mit Vivacity und
					Zielstrebigkeit, German Efficiency und Englischem Humor.“
				</blockquote>

				<div class="mt-8 grid grid-cols-1 gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
					<div class="space-y-2">
						<h3 class="font-serif text-lg font-semibold text-[#0f223f]">
							Für Kinder &amp; Jugendliche
						</h3>
						<p class="text-sm leading-relaxed text-slate-600">
							Gezielte Unterstützung für die Schule, Klausur- und Abiturvorbereitung oder einfach
							zum spielerischen Aufbau echter Sprachfreude ohne Hemmungen.
						</p>
					</div>

					<div class="space-y-2">
						<h3 class="font-serif text-lg font-semibold text-[#0f223f]">
							Für Erwachsene &amp; Beruf
						</h3>
						<p class="text-sm leading-relaxed text-slate-600">
							Ob für Reise, Alltag, Konversation oder berufliche Kommunikation: individuelles
							Training, das genau da ansetzt, wo Sie es brauchen.
						</p>
					</div>
				</div>

				<div
					class="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-5"
				>
					<div class="text-sm text-slate-600">
						Interesse an einer Probestunde oder Fragen zum Ablauf?
					</div>
					<a
						href="#kontakt"
						class="inline-flex items-center rounded-lg bg-[#1b365d] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a82333]"
					>
						Englisch anfragen
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Bereich 2: How is your Deutsch? -->
<section
	id="deutsch"
	class="scroll-mt-24 border-y border-slate-200/80 bg-slate-50/70 py-16 md:py-24"
>
	<div class="content-container">
		<div class="mx-auto max-w-3xl">
			<div
				class="mb-3 inline-flex items-center gap-2 rounded-md bg-[#f0f4f9] px-3 py-1 text-xs font-bold tracking-wider text-[#1b365d] uppercase"
			>
				Private German Tuition
			</div>
			<h2 class="heading-h1 mb-6">How is your Deutsch?</h2>

			<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
				<!-- Zitat aus Originaltext -->
				<blockquote
					class="my-2 border-l-4 border-[#1b365d] pl-5 text-lg leading-relaxed text-slate-700 italic sm:text-xl"
				>
					“For English-speaking business women and men I offer private German-tuition with a blend
					German Efficiency and English Humour. Born and bred in the UK with more than 10 years of
					international business experience I look forward to exploring the German language with
					you.”
				</blockquote>

				<div class="mt-8 grid grid-cols-1 gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
					<div class="space-y-2">
						<h3 class="font-serif text-lg font-semibold text-[#0f223f]">
							Business &amp; Daily Life
						</h3>
						<p class="text-sm leading-relaxed text-slate-600">
							Master German for business meetings, emails, client presentations, or everyday life
							with confidence and cultural nuance.
						</p>
					</div>

					<div class="space-y-2">
						<h3 class="font-serif text-lg font-semibold text-[#0f223f]">
							Native English Perspective
						</h3>
						<p class="text-sm leading-relaxed text-slate-600">
							Benefit from explanations from someone who understands the exact stumbling blocks
							English native speakers encounter when learning German.
						</p>
					</div>
				</div>

				<div
					class="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-5"
				>
					<div class="text-sm text-slate-600">Ready to elevate your German language skills?</div>
					<a
						href="#kontakt"
						class="inline-flex items-center rounded-lg bg-[#1b365d] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a82333]"
					>
						Get in touch / Kontakt
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Bereich 3: Klavierunterricht -->
<section id="klavier" class="scroll-mt-24 py-16 md:py-24">
	<div class="content-container">
		<div class="mx-auto max-w-3xl">
			<div
				class="mb-3 inline-flex items-center gap-2 rounded-md bg-[#fdf2f2] px-3 py-1 text-xs font-bold tracking-wider text-[#a82333] uppercase"
			>
				Musikunterricht
			</div>
			<h2 class="heading-h1 mb-6">Klavierunterricht am weißen Flügel</h2>

			<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
				<!-- Zitat aus Originaltext -->
				<blockquote
					class="my-2 border-l-4 border-[#a82333] pl-5 text-lg leading-relaxed text-slate-700 italic sm:text-xl"
				>
					„An meinem 6. Geburtstag fing meine musikalische Laufbahn am Klavier an. Egal ob Sie 6
					oder 60 Jahre alt sind oder auch dazwischen, freue ich mich, Ihre Klavierlaufbahn zu
					beginnen oder zu fördern. Ein weißer Flügel und englischer Humor bringen Farbe und
					Lebendigkeit in schwarz-weiße Notenblätter.“
				</blockquote>

				<div class="mt-8 grid grid-cols-1 gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
					<div class="space-y-2">
						<h3 class="font-serif text-lg font-semibold text-[#0f223f]">
							Für Kinder &amp; Einsteiger
						</h3>
						<p class="text-sm leading-relaxed text-slate-600">
							Erste Schritte an den Tasten mit Geduld, Spaß und Begeisterung. Die musikalische
							Entdeckungsreise beginnt ab 6 Jahren.
						</p>
					</div>

					<div class="space-y-2">
						<h3 class="font-serif text-lg font-semibold text-[#0f223f]">
							Für Erwachsene &amp; Wiedereinsteiger
						</h3>
						<p class="text-sm leading-relaxed text-slate-600">
							Ein lang gehegter Traum oder das Auffrischen früherer Fertigkeiten: Am Klavier ist
							jedes Lebensalter genau das richtige.
						</p>
					</div>
				</div>

				<div
					class="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-5"
				>
					<div class="text-sm text-slate-600">Lust auf eine Probestunde am Klavier?</div>
					<a
						href="#kontakt"
						class="inline-flex items-center rounded-lg bg-[#1b365d] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#a82333]"
					>
						Klavierunterricht anfragen
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Bereich 4: Preise & Konditionen -->
<section class="border-t border-slate-200 bg-slate-100/60 py-16">
	<div class="content-container">
		<div
			class="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-xs sm:p-10"
		>
			<h2 class="mb-3 font-serif text-2xl font-bold text-[#0f223f] md:text-3xl">
				Unterrichtsformate &amp; Preise
			</h2>
			<p class="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
				Jeder Mensch lernt individuell. Ob wöchentlicher Klavierunterricht, intensive Vorbereitung
				in Englisch oder flexible Einheiten für Geschäftsleute: Dauer (z.&nbsp;B. 30, 45 oder 60
				Minuten), Rhythmus und Inhalte stimmen wir ganz nach Ihren Bedürfnissen ab.
			</p>
			<div class="inline-flex flex-col items-center justify-center gap-3 sm:flex-row">
				<a
					href="#kontakt"
					class="inline-flex items-center rounded-lg bg-[#1b365d] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#a82333]"
				>
					Preise &amp; Konditionen erfragen
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Bereich 5: Kontakt -->
<section id="kontakt" class="scroll-mt-24 border-t border-slate-200 bg-white py-16 md:py-24">
	<div class="content-container">
		<div class="mx-auto max-w-3xl text-center">
			<div
				class="mb-3 inline-flex items-center gap-2 rounded-md bg-[#fdf2f2] px-3 py-1 text-xs font-bold tracking-wider text-[#a82333] uppercase"
			>
				Kontakt &amp; Kennenlernen
			</div>
			<h2
				class="mb-3 font-serif text-3xl font-bold tracking-tight text-[#0f223f] sm:text-4xl md:text-5xl"
			>
				Ich freue mich auf Ihre Kontaktaufnahme
			</h2>
			<p class="mb-10 font-serif text-lg text-slate-600 italic sm:text-xl">
				I look forward to hearing from you
			</p>

			<div class="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 shadow-xs sm:p-10">
				<h3 class="mb-2 font-serif text-2xl font-bold text-[#0f223f]">Benjamin Crane</h3>
				<p class="mb-8 text-sm text-slate-500">Klavier- und Englischunterricht · German Tuition</p>

				<div class="grid grid-cols-1 gap-6 text-left sm:grid-cols-2">
					<!-- Telefon -->
					<div
						class="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
					>
						<div
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f0f4f9] text-[#1b365d]"
						>
							<svg
								class="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								stroke-width="2"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/></svg
							>
						</div>
						<div class="min-w-0 flex-1">
							<span class="block text-xs font-semibold tracking-wider text-slate-500 uppercase"
								>Mobiltelefon</span
							>
							<a
								href="tel:+491621926412"
								class="mt-1 block truncate text-base font-semibold text-[#0f223f] transition-colors hover:text-[#a82333]"
							>
								+49 162 1926 412
							</a>
							<span class="mt-0.5 block text-xs text-slate-500">Anruf oder WhatsApp</span>
						</div>
					</div>

					<!-- E-Mail -->
					<div
						class="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
					>
						<div
							class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#fdf2f2] text-[#a82333]"
						>
							<svg
								class="h-5 w-5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								stroke-width="2"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/></svg
							>
						</div>
						<div class="min-w-0 flex-1">
							<span class="block text-xs font-semibold tracking-wider text-slate-500 uppercase"
								>E-Mail</span
							>
							<!-- svelte-ignore a11y_invalid_attribute -->
							<a
								href="#"
								onclick={handleEmailClick}
								class="mt-1 block truncate text-base font-semibold text-[#0f223f] transition-colors hover:text-[#a82333]"
							>
								bcbooks[at]gmx[dot]de
							</a>
							<span class="mt-0.5 block text-xs text-slate-500">Klick zum Mailen</span>
						</div>
					</div>
				</div>

				<div
					class="mt-6 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600 sm:text-sm"
				>
					📍 <strong>Standort:</strong> Saarstraße 40, 73431 Aalen · Unterricht vor Ort sowie flexibel
					online via Video möglich.
				</div>
			</div>
		</div>
	</div>
</section>
