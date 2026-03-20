<script>
	function handleEmailClick(event) {
		event.preventDefault();
		const email = atob('ZWQudGVkZXItc3VrcmFtQG9mbmk=').split('').reverse().join('');
		window.location.href = `mailto:${email}`;
	}

	function getCurrentMonthYear() {
		const months = [
			'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
			'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
		];
		const now = new Date();
		const month = months[now.getMonth()];
		const year = now.getFullYear();
		return `${month} ${year}`;
	}
</script>

<svelte:head>
	<title>Datenschutzerklärung - Markus Bohnacker</title>
	<meta name="description" content="Datenschutzerklärung von Markus Bohnacker (markus-redet.de). Informationen zum Umgang mit personenbezogenen Daten gemäß DSGVO." />
	<meta name="robots" content="noindex, follow" />
	<link rel="canonical" href="https://markus-redet.de/datenschutz" />
</svelte:head>

<section class="content-container-narrow py-16">
	<h1 class="heading-h1 mb-8">Datenschutzerklärung</h1>

	<div class="text-text-base space-y-6">
		<div>
			<h2 class="heading-h3 mb-2">1. Datenschutz auf einen Blick</h2>
			<h3 class="mb-2 font-medium">Allgemeine Hinweise</h3>
			<p class="mb-4 text-sm">
				Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
				personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
				sind alle Daten, mit denen Sie persönlich identifiziert werden können.
			</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">2. Allgemeine Hinweise und Pflichtinformationen</h2>
			<h3 class="mb-2 font-medium">Datenschutz</h3>
			<p class="mb-4 text-sm">
				Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
				behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
				Datenschutzvorschriften sowie dieser Datenschutzerklärung.
			</p>

			<h3 class="mb-2 font-medium">Hinweis zur verantwortlichen Stelle</h3>
			<p class="mb-4 text-sm">
				Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
			</p>
			<p class="mb-4 text-sm">
				Markus Bohnacker<br />
				Karlsbader Straße 16, 70372 Stuttgart, Deutschland<br />
				<!-- svelte-ignore a11y-invalid-attribute -->
				E-Mail:
				<a href="#" onclick={handleEmailClick} class="hover:text-text-hover cursor-pointer hover:underline"
					>info[at]markus-redet[dot]de</a
				>
			</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">3. Datenerfassung auf dieser Website</h2>
			<h3 class="mb-2 font-medium">Server-Log-Dateien</h3>
			<p class="mb-4 text-sm">
				Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
				Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
			</p>
			<ul class="mb-4 ml-3 list-outside list-disc space-y-1 text-sm">
				<li>Browsertyp und Browserversion</li>
				<li>verwendetes Betriebssystem</li>
				<li>Referrer URL</li>
				<li>Hostname des zugreifenden Rechners</li>
				<li>Uhrzeit der Serveranfrage</li>
				<li>IP-Adresse</li>
			</ul>
			<p class="mb-4 text-sm">
				Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
				Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
				Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
				und der Optimierung seiner Website.
			</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">4. Kontakt</h2>
			<h3 class="mb-2 font-medium">Anfrage per E-Mail</h3>
			<p class="mb-4 text-sm">
				Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus
				hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
				Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
				Einwilligung weiter.
			</p>
			<p class="mb-4 text-sm">
				Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
				Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
				vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
				auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
				Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
			</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">5. Externe Dienste</h2>
			<h3 class="mb-2 font-medium">Schriftarten (Google Fonts)</h3>
			<p class="mb-4 text-sm">
				Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die
				von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung
				zu Servern von Google findet dabei nicht statt.
			</p>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">6. Ihre Rechte</h2>
			<p class="mb-4 text-sm">Sie haben folgende Rechte:</p>
			<ul class="mb-4 ml-3 list-outside list-disc space-y-1 text-sm">
				<li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
				<li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
				<li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
				<li>Recht auf Einschränkung der Datenverarbeitung</li>
				<li>Recht auf Datenübertragbarkeit</li>
				<li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten bei uns</li>
				<li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
			</ul>
		</div>

		<div>
			<h2 class="heading-h3 mb-2">7. Tracking und Analyse-Tools</h2>
			<p class="mb-4 text-sm">
				Diese Website verwendet keine Tracking- oder Analyse-Tools wie Google Analytics, Facebook
				Pixel oder ähnliche Dienste. Es werden keine Cookies zu Tracking-Zwecken gesetzt.
			</p>
		</div>

		<div class="border-t pt-4 text-xs text-gray-500">
			<p>Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</p>
		</div>
	</div>
</section>
