<script>
	import '../app.css';
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import { page } from '$app/state';

	let { children } = $props();
	let isMenuOpen = $state(false);

	// Navigation items
	const nav = [
		{ name: 'Englischunterricht', href: `${base}/#englisch` },
		{ name: 'How is your Deutsch?', href: `${base}/#deutsch` },
		{ name: 'Klavierunterricht', href: `${base}/#klavier` },
		{ name: 'Kontakt', href: `${base}/#kontakt` },
		{ name: 'Impressum', href: `${base}/impressum` }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<div
	class="flex min-h-screen flex-col bg-slate-50 text-slate-800 antialiased selection:bg-[#a82333]/15 selection:text-[#a82333]"
>
	<!-- Dezent-seriöser britischer Farbakzent ganz oben (Navy-Blau mit feiner Crimson-Kante) -->
	<div class="h-1.5 w-full bg-gradient-to-r from-[#0f223f] via-[#1b365d] to-[#a82333]"></div>

	<header
		class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-shadow"
	>
		<nav class="content-container flex items-center justify-between py-3.5 md:py-4">
			<!-- Logo / Markenname -->
			<a class="group flex flex-col text-left transition-colors" href="{base}/" onclick={closeMenu}>
				<span
					class="font-serif text-xl font-bold tracking-tight text-[#0f223f] transition-colors group-hover:text-[#a82333] md:text-2xl"
				>
					Benjamin Crane
				</span>
				<span
					class="text-[11px] font-medium tracking-wider text-slate-500 uppercase transition-colors group-hover:text-slate-700 md:text-xs"
				>
					Klavier- &amp; Englischunterricht
				</span>
			</a>

			<!-- Desktop Navigation -->
			<ul class="hidden items-center space-x-1 lg:flex">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#a82333]"
						>
							{item.name}
						</a>
					</li>
				{/each}
				<li class="pl-2">
					<a
						href="{base}/#kontakt"
						class="inline-flex items-center rounded-md bg-[#1b365d] px-3.5 py-1.5 text-sm font-medium text-white shadow-xs transition-colors hover:bg-[#a82333]"
					>
						Anfragen
					</a>
				</li>
			</ul>

			<!-- Mobile Burger Button -->
			<button
				class="relative flex h-9 w-9 flex-col items-center justify-center rounded-md border border-slate-200 focus:outline-none lg:hidden"
				onclick={toggleMenu}
				aria-label="Menü öffnen"
			>
				<span
					class="burger-line w-4 {isMenuOpen
						? 'translate-y-[6px] rotate-45'
						: ''} transition-all duration-300"
				></span>
				<span class="burger-line w-4 {isMenuOpen ? 'opacity-0' : ''} transition-all duration-300"
				></span>
				<span
					class="burger-line w-4 {isMenuOpen
						? '-translate-y-[6px] -rotate-45'
						: ''} transition-all duration-300"
				></span>
			</button>
		</nav>

		<!-- Mobile Navigation Menu -->
		<div
			class="lg:hidden {isMenuOpen
				? 'max-h-[420px] border-b border-slate-200 opacity-100'
				: 'max-h-0 opacity-0'} overflow-hidden bg-white transition-all duration-300 ease-in-out"
		>
			<ul class="flex flex-col space-y-1 px-4 py-3">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-[#a82333]"
							onclick={closeMenu}
						>
							{item.name}
						</a>
					</li>
				{/each}
				<li class="pt-2">
					<a
						href="{base}/#kontakt"
						class="block rounded-md bg-[#1b365d] px-4 py-2.5 text-center text-sm font-medium text-white shadow-xs hover:bg-[#a82333]"
						onclick={closeMenu}
					>
						Kontakt aufnehmen
					</a>
				</li>
			</ul>
		</div>
	</header>

	<!-- Mobile Menu Overlay -->
	{#if isMenuOpen}
		<div
			in:fade={{ duration: 250 }}
			out:fade={{ duration: 250 }}
			class="fixed inset-0 z-30 bg-black/30 backdrop-blur-xs lg:hidden"
			onclick={closeMenu}
			onkeydown={(e) => e.key === 'Escape' && closeMenu()}
			role="button"
			tabindex="0"
			aria-label="Menü schließen"
		></div>
	{/if}

	<main class="w-full flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="mt-auto border-t border-slate-800 bg-[#0f223f] text-slate-300">
		<div class="content-container py-12 md:py-16">
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				<!-- Spalte 1: Info & Profil -->
				<div class="space-y-3">
					<h3 class="font-serif text-xl font-semibold text-white">Benjamin Crane</h3>
					<p class="text-sm leading-relaxed text-slate-300">
						Qualifizierter Klavier- und Englischunterricht sowie German Tuition mit Vivacity,
						Zielstrebigkeit und englischem Humor.
					</p>
					<p class="text-xs text-slate-400">Saarstraße 40 · 73431 Aalen · Deutschland</p>
				</div>

				<!-- Spalte 2: Navigation -->
				<div>
					<h4 class="text-xs font-semibold tracking-wider text-slate-400 uppercase">Navigation</h4>
					<ul class="mt-3 space-y-2 text-sm">
						<li>
							<a href="{base}/#englisch" class="transition-colors hover:text-white hover:underline">
								Englischunterricht
							</a>
						</li>
						<li>
							<a href="{base}/#deutsch" class="transition-colors hover:text-white hover:underline">
								How is your Deutsch?
							</a>
						</li>
						<li>
							<a href="{base}/#klavier" class="transition-colors hover:text-white hover:underline">
								Klavierunterricht
							</a>
						</li>
						<li>
							<a href="{base}/#kontakt" class="transition-colors hover:text-white hover:underline">
								Kontakt &amp; Kennenlernen
							</a>
						</li>
						<li>
							<a href="{base}/impressum" class="transition-colors hover:text-white hover:underline">
								Impressum &amp; Datenschutz
							</a>
						</li>
					</ul>
				</div>

				<!-- Spalte 3: Direkter Kontakt -->
				<div class="space-y-3">
					<h4 class="text-xs font-semibold tracking-wider text-slate-400 uppercase">
						Direktkontakt
					</h4>
					<div class="space-y-2 text-sm">
						<p>
							<span class="block text-xs text-slate-400">Mobiltelefon:</span>
							<a
								href="tel:+491621926412"
								class="font-medium text-white transition-colors hover:text-[#f87171]"
							>
								+49 162 1926 412
							</a>
						</p>
						<p>
							<span class="block text-xs text-slate-400">E-Mail:</span>
							<a
								href="mailto:bcbooks@gmx.de"
								class="font-medium text-white transition-colors hover:text-[#f87171]"
							>
								bcbooks[at]gmx[dot]de
							</a>
						</p>
						<p class="pt-2 text-xs text-slate-400">
							Unterricht vor Ort in Aalen &amp; Umgebung sowie flexibel online möglich.
						</p>
					</div>
				</div>
			</div>

			<div
				class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400 md:flex-row"
			>
				<p>&copy; {new Date().getFullYear()} Benjamin Crane. Alle Rechte vorbehalten.</p>
				<div class="flex space-x-6">
					<a href="{base}/impressum" class="transition-colors hover:text-white">Impressum</a>
					<a href="{base}/impressum#datenschutz" class="transition-colors hover:text-white"
						>Datenschutz</a
					>
				</div>
			</div>
		</div>
	</footer>
</div>
