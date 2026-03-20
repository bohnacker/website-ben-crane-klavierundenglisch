<script>
	let showSuccess = $state(false);
	
	function handleSubmit(e) {
		e.preventDefault();
		// Fake form submission since no backend is connected usually for static templates
		showSuccess = true;
		setTimeout(() => { showSuccess = false; e.target.reset(); }, 5000);
	}
</script>

<svelte:head>
	<title>Kontakt - Benjamin Crane</title>
	<meta name="description" content="Nimm Kontakt auf mit Benjamin Crane für Freie Trauungen, Taufen und Seminare." />
</svelte:head>

<section class="content-container-narrow my-12 flex flex-col items-center gap-6">
	<h1 class="heading-h1 md:text-4xl text-center">Kontakt</h1>

	<div class="text-text-base text-center mb-6">
		<p>
			Ich freue mich auf Eure Nachricht!<br>
			Schreibt mir einfach und unverbindlich eine E-Mail über das Formular oder direkt.
		</p>
	</div>

	<div class="w-full bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
		<form class="space-y-6" onsubmit={handleSubmit}>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="space-y-2">
					<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
					<input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
				</div>
				<div class="space-y-2">
					<label for="email" class="block text-sm font-medium text-gray-700">E-Mail</label>
					<input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
				</div>
			</div>

			<div class="space-y-2">
				<label for="subject" class="block text-sm font-medium text-gray-700">Betreff (Anlass & Datum)</label>
				<input type="text" id="subject" name="subject" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
			</div>

			<div class="space-y-2">
				<label for="message" class="block text-sm font-medium text-gray-700">Nachricht</label>
				<textarea id="message" name="message" rows="5" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-amber-500 focus:border-amber-500"></textarea>
			</div>

			<div class="pt-2">
				<button type="submit" class="w-full md:w-auto px-8 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors">
					Nachricht absenden
				</button>
			</div>
			
			{#if showSuccess}
				<div class="p-4 bg-green-50 text-green-700 rounded-md text-sm">
					Vielen Dank! Die Nachricht wurde versendet. Ich melde mich in Kürze.
				</div>
			{/if}
		</form>
	</div>

	<div class="w-full border-t border-gray-200 pt-8 mt-4">
		<h2 class="font-family-heading text-2xl font-bold mb-4 text-center">Direkter Kontakt</h2>
		<div class="flex flex-col items-center gap-2 text-center">
			<p><strong>Benjamin Crane</strong></p>
			<p>Aalen, Baden-Württemberg</p>
			<p>E-Mail: <a href="mailto:kontakt@benjamin-crane.de" class="text-amber-700 hover:underline">kontakt@benjamin-crane.de</a></p>
			<!-- Adjust phone number if available -->
			<!-- <p>Telefon: +49 (0) 123 456789</p> -->
		</div>
	</div>
</section>
