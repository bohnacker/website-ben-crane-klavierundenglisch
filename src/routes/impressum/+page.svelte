<script> 	
	import { handleEmailClick } from '$lib/helpers';	

</script>

<svelte:head>
	<title>Impressum - Benjamin Crane</title>
	<meta name="description" content="Impressum von Benjamin Crane, freier Redner für Trauungen, Taufen und Abschiedsfeiern in Aalen. Rechtliche Angaben gemäß TMG." />
	<meta name="robots" content="noindex, follow" />
	<link rel="canonical" href="https://benjamin-crane.de/impressum" />
</svelte:head>

<section class="content-container-narrow py-16">
	<h1 class="heading-h1 mb-8">Impressum</h1>
	
	<div class="space-y-6 text-text-base">
		<div>
			<h2 class="heading-h3 mb-2">Angaben gemäß § 5 TMG:</h2>
			<p>Benjamin Crane<br />
			Saarstraße 40<br />
			73431 Aalen<br />
			Deutschland</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">Kontakt:</h2>
			<p>E-Mail: 
			<!-- svelte-ignore a11y-invalid-attribute -->
			<a href="#" onclick={handleEmailClick} class="hover:text-text-hover hover:underline cursor-pointer">bcbooks[at]gmx[dot]de</a><br />
			Telefon: +49 162 1926412</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">Berufsbezeichnung und berufsrechtliche Regelungen:</h2>
			<p>Berufsbezeichnung: Freier Trauredner<br />
			Verliehen in: Deutschland</p>
			<p class="text-sm mt-2">Es besteht keine Kammerpflicht. Die Tätigkeit als freier Trauredner unterliegt keiner besonderen Berufsordnung.</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">Umsatzsteuer-ID:</h2>
			<p class="text-sm">Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
			[USt-IdNr. falls vorhanden, sonst: "Kleinunternehmer gemäß § 19 UStG - keine Umsatzsteuer ausgewiesen"]</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">EU-Streitschlichtung:</h2>
			<p class="text-sm">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
			<a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener" class="hover:text-text-hover hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
			<p class="text-sm mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">Verbraucherstreitbeilegung&#8203;/&#8203;Universalschlichtungsstelle:</h2>
			<p class="text-sm">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h2>
			<p>Benjamin Crane<br />
			[Anschrift wie oben]</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">Haftungsausschluss:</h2>
			<h3 class="font-medium mb-2">Haftung für Inhalte</h3>
			<p class="text-sm mb-4">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
			
			<h3 class="font-medium mb-2">Haftung für Links</h3>
			<p class="text-sm mb-4">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

			<h3 class="font-medium mb-2">Urheberrecht</h3>
			<p class="text-sm">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
		</div>
	</div>
</section>
