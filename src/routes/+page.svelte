<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Benjamin Crane - Demnächst mehr</title>
	<meta name="description" content="Hier entsteht die neue Website von Benjamin Crane. Demnächst erfahrt Ihr hier mehr." />
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-background-base">
	<img src="{base}/images/Kranich_freigestellt.png" alt="Logo Kranich" class="h-24 md:h-32 w-auto mb-8 opacity-90" />
	
	<h1 class="heading-h1 md:text-5xl mb-4">Hier bewegt sich was.</h1>
	
	<p class="text-text-base text-lg font-light tracking-wide max-w-md mx-auto">
		Ich arbeite gerade an einer neuen Website, um Euch noch besser begleiten zu können. Schaut bald wieder vorbei!
	</p>
	
	<div class="mt-12 h-px w-24 bg-text-hover opacity-50"></div>
	
	<!-- <div class="mt-12 text-sm text-text-base opacity-70">
		<p>Benjamin Crane</p>
		<p class="mt-4 flex gap-6 justify-center">
			<a href="{base}/impressum" class="hover:text-text-hover underline decoration-text-hover/30 underline-offset-4 transition-colors">Impressum</a>
			<a href="{base}/datenschutz" class="hover:text-text-hover underline decoration-text-hover/30 underline-offset-4 transition-colors">Datenschutz</a>
		</p>
	</div> -->

	<!-- Kleiner versteckter Hinweis für den Admin/User -->
	<div class="mt-24 opacity-0 hover:opacity-10 transition-opacity">
		<a href="{base}/preview" class="text-[10px] tracking-widest uppercase">Vorschau</a>
	</div>
</div>
