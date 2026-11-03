<script>
	import { base } from '$app/paths';
	import { handleEmailClick } from '$lib/helpers';
</script>

<svelte:head>
	<title>Impressum &amp; Datenschutz – Benjamin Crane</title>
	<meta
		name="description"
		content="Impressum und Datenschutzerklärung von Benjamin Crane, Klavier- und Sprachunterricht in Aalen. Rechtliche Angaben gemäß DDG / TMG und DSGVO."
	/>
	<meta name="robots" content="noindex, follow" />
	<link rel="canonical" href="https://www.klavierundenglisch.com/impressum" />
</svelte:head>

<section class="content-container-narrow py-12 md:py-16">
	<!-- Zurück-Link -->
	<div class="mb-8">
		<a
			href="{base}/"
			class="inline-flex items-center gap-1.5 text-sm font-medium text-[#1b365d] transition-colors hover:text-[#a82333]"
		>
			<span aria-hidden="true">←</span> Zurück zur Startseite
		</a>
	</div>

	<!-- Impressum -->
	<div class="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-10">
		<h1 class="heading-h1 mb-6 border-b border-slate-100 pb-4">Impressum</h1>

		<div class="space-y-6 text-sm leading-relaxed text-slate-700">
			<div>
				<h2 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					Angaben gemäß § 5 TMG / DDG
				</h2>
				<p>
					Benjamin Crane<br />
					Saarstraße 40<br />
					73431 Aalen<br />
					Deutschland
				</p>
			</div>

			<div>
				<h2 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">Kontakt</h2>
				<p>
					Telefon: <a
						href="tel:+491621926412"
						class="font-medium text-[#1b365d] hover:text-[#a82333] hover:underline"
						>+49 162 1926 412</a
					><br />
					E-Mail:
					<!-- svelte-ignore a11y_invalid_attribute -->
					<a
						href="#"
						onclick={handleEmailClick}
						class="cursor-pointer font-medium text-[#1b365d] hover:text-[#a82333] hover:underline"
					>
						bcbooks[at]gmx[dot]de
					</a>
				</p>
			</div>

			<div>
				<h2 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					Berufsbezeichnung &amp; Tätigkeit
				</h2>
				<p>
					Freiberufliche Unterrichtstätigkeit (Klavierunterricht, Sprachunterricht).<br />
					Es besteht keine Kammerpflicht.
				</p>
			</div>

			<div>
				<h2 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
				</h2>
				<p>
					Benjamin Crane<br />
					Saarstraße 40<br />
					73431 Aalen
				</p>
			</div>

			<div>
				<h2 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">EU-Streitschlichtung</h2>
				<p>
					Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
					<a
						href="https://ec.europa.eu/consumers/odr/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-[#1b365d] hover:underline"
					>
						https://ec.europa.eu/consumers/odr/
					</a>.<br />
					Unsere E-Mail-Adresse finden Sie oben im Impressum.
				</p>
			</div>

			<div>
				<h2 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					Verbraucherstreitbeilegung / Universalschlichtungsstelle
				</h2>
				<p>
					Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
					Verbraucherschlichtungsstelle teilzunehmen.
				</p>
			</div>

			<div>
				<h2 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					Haftung für Inhalte &amp; Links
				</h2>
				<p class="mb-2">
					Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
					nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht
					verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
				</p>
				<p>
					Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir
					keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
					Anbieter oder Betreiber verantwortlich.
				</p>
			</div>

			<div>
				<h2 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">Urheberrecht</h2>
				<p>
					Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
					dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
					der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
					Zustimmung des jeweiligen Autors.
				</p>
			</div>
		</div>
	</div>

	<!-- Datenschutzhinweise -->
	<div
		id="datenschutz"
		class="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-10"
	>
		<h2 class="heading-h1 mb-6 border-b border-slate-100 pb-4">Datenschutzerklärung</h2>

		<div class="space-y-6 text-sm leading-relaxed text-slate-700">
			<div>
				<h3 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					1. Datenschutz auf einen Blick
				</h3>
				<p>
					Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Diese Website ist als
					rein statische Informationsseite konzipiert. Wir verwenden keine Tracking-Tools, keine
					Analyse-Dienste und setzen keine Cookies für Marketing- oder Nachverfolgungszwecke.
				</p>
			</div>

			<div>
				<h3 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">2. Verantwortliche Stelle</h3>
				<p>
					Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
					Benjamin Crane<br />
					Saarstraße 40, 73431 Aalen, Deutschland<br />
					E-Mail: bcbooks[at]gmx[dot]de · Telefon: +49 162 1926 412
				</p>
			</div>

			<div>
				<h3 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					3. Datenerfassung auf dieser Website
				</h3>
				<p class="mb-1 font-semibold">Server-Log-Dateien</p>
				<p class="mb-3">
					Beim Aufruf dieser Website erhebt und speichert der Web-Hosting-Provider automatisch
					technische Informationen in Server-Log-Dateien (z.&nbsp;B. Browsertyp und Browserversion,
					verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der
					Serveranfrage, IP-Adresse). Dies dient der Gewährleistung eines störungsfreien Betriebs
					der Website gemäß Art. 6 Abs. 1 lit. f DSGVO.
				</p>

				<p class="mb-1 font-semibold">Kontaktaufnahme per E-Mail oder Telefon</p>
				<p>
					Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben inklusive der von
					Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
					Anschlussfragen bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6
					Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
					(berechtigtes Interesse an der Beantwortung Ihres Anliegens).
				</p>
			</div>

			<div>
				<h3 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					4. Lokale Schriftarten (Web Fonts)
				</h3>
				<p>
					Diese Seite nutzt zur einheitlichen Darstellung Schriftarten, die lokal auf unserem
					Webserver installiert sind. Es besteht keine Verbindung zu Servern Dritter (wie Google
					Fonts).
				</p>
			</div>

			<div>
				<h3 class="mb-2 font-serif text-lg font-bold text-[#0f223f]">
					5. Ihre Rechte als betroffene Person
				</h3>
				<p>
					Sie haben das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15
					DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der
					Verarbeitung (Art. 18 DSGVO) sowie das Recht auf Beschwerde bei der zuständigen
					Aufsichtsbehörde.
				</p>
			</div>
		</div>
	</div>
</section>
