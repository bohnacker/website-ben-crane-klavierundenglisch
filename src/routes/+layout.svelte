<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();
	let isMenuOpen = $state(false);

	// Hilfsvariable, um zu prüfen, ob wir auf der Landing-Page sind
	// let isLandingPage = $derived(page.url.pathname === `${base}` || page.url.pathname === `${base}/`);
	let isLandingPage = false; // --- IGNORE --- (für die Vorschau, damit Header/Footer sichtbar sind)
	
	// Menüeinträge
	const nav = [
		{ name: 'Über mich', htmlName: 'Über<br>mich', href: `${base}/ueber-mich` },
		{ name: 'Freie Trauung', htmlName: 'Freie<br>Trauung', href: `${base}/freie-trauung` },
		{ name: 'Kinderwillkommensfest', htmlName: 'Kinder-<br>willkommens-<br>fest', href: `${base}/kinderwillkommensfest` },
		{ name: 'Eheerneuerung', htmlName: 'Ehe-<br>erneuerung', href: `${base}/eheerneuerung` },
		{ name: 'Abschiedsfeier', htmlName: 'Abschieds-<br>feier', href: `${base}/abschiedsfeier` },
		{ name: 'Medien & Seminare', htmlName: 'Medien &<br>Seminare', href: `${base}/medien-seminare` },
		{ name: 'Leistungen & Preise', htmlName: 'Leistungen<br>& Preise', href: `${base}/preise` },
		{ name: 'Partner', htmlName: 'Partner', href: `${base}/affiliates` },
		{ name: 'Kontakt', htmlName: 'Kontakt', href: `${base}/kontakt` }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<div class="flex min-h-screen flex-col">
	{#if !isLandingPage}
		<!-- Goldener Akzent-Streifen ganz oben -->
		<div class="h-2 w-full bg-text-hover"></div>
		<header class="bg-background-header sticky top-0 z-50 shadow">
			<nav class="content-container flex lg:items-start items-center justify-between px-4 py-3 md:pt-4 md:pb-1">
				<!-- Version mit Logo und Name -->
				<a
					class="logo-text flex items-center gap-3 transition-colors hover:[&_span.underline-target]:decoration-black text-xl"
					href="{base}/"
					onclick={closeMenu}
				>
					<img src="{base}/images/Kranich_freigestellt.png" alt="Logo Kranich" class="h-10 md:h-12 w-auto object-contain" />
					<span class="text-text-hover font-medium" style="transform: translateY(-3px);">Benjamin Crane</span>
				</a>

				<!-- Desktop Navigation -->
				<ul class="hidden space-x-0.5 md:space-x-1 lg:flex items-start">
					{#each nav as item}
						<li>
							<a
								href={item.href}
								class="text-text-base hover:text-text-hover block px-2 py-2 text-xs font-medium tracking-wider uppercase text-center leading-tight transition-colors"
							>
								{@html item.htmlName}
							</a>
						</li>
					{/each}
				</ul>

				<!-- Mobile Burger Button -->
				<button
					class="relative flex h-6 w-6 flex-col items-center justify-center focus:outline-none lg:hidden"
					onclick={toggleMenu}
					aria-label="Menu toggle"
				>
					<span
						class="burger-line {isMenuOpen
							? 'translate-y-[5.5px] rotate-45'
							: ''} transition-all duration-300"
					></span>
					<span class="burger-line {isMenuOpen ? 'opacity-0' : ''} transition-all duration-300"
					></span>
					<span
						class="burger-line {isMenuOpen
							? '-translate-y-[5.5px] -rotate-45'
							: ''} transition-all duration-300"
					></span>
				</button>
			</nav>

			<!-- Mobile Navigation Menu -->
			<div
				class="lg:hidden {isMenuOpen
					? 'max-h-[600px] opacity-100'
					: 'max-h-0 opacity-0'} overflow-hidden border-t border-gray-200 bg-white transition-all duration-300"
			>
				<ul class="flex flex-col py-4">
					{#each nav as item}
						<li>
							<a
								href={item.href}
								class="text-text-base hover:text-text-hover block px-4 py-4 text-xs font-medium tracking-wider uppercase transition-colors hover:bg-gray-50"
								onclick={closeMenu}>{item.name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</header>

		<!-- Mobile Menu Overlay -->
		{#if isMenuOpen}
			<div
				in:fade={{ duration: 400 }}
				out:fade={{ duration: 400 }}
				class="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs lg:hidden"
				onclick={closeMenu}
				onkeydown={(e) => e.key === 'Escape' && closeMenu()}
				role="button"
				tabindex="0"
				aria-label="Menü schließen"
			></div>
		{/if}
	{/if}

	<main class="bg-background-base w-full flex-1">
		{@render children()}
	</main>

	{#if !isLandingPage}
		<footer class="bg-background-footer text-text-base mt-auto border-t-2 border-text-hover">
			<div
				class="content-container flex flex-col items-center justify-between gap-2 px-4 py-3 text-xs md:flex-row md:text-sm"
			>
				<div>
					&copy; {new Date().getFullYear()} Benjamin Crane
				</div>
				<div class="flex flex-wrap justify-center gap-1">
					<a
						href="{base}/kontakt"
						class="hover:text-text-hover flex items-baseline rounded px-2 py-2 transition-colors"
						>Kontakt</a
					>
					<a
						href="{base}/impressum"
						class="hover:text-text-hover flex items-baseline rounded px-2 py-2 transition-colors"
						>Impressum</a
					>
					<a
						href="{base}/datenschutz"
						class="hover:text-text-hover flex items-baseline rounded px-2 py-2 transition-colors"
						>Datenschutz</a
					>
				</div>
			</div>
		</footer>
	{/if}
</div>
