<script>
	import '../app.css';
	import { fade } from 'svelte/transition';

	let { children } = $props();
	let isMenuOpen = $state(false);

	// Menüeinträge
	const nav = [
		// { name: 'Freie Trauung', href: './freie-trauung' },
		{ name: 'Über mich', href: './ueber-mich' },
		{ name: 'Leistungen & Preise', href: './preise' },
		{ name: 'Kontakt', href: './kontakt' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<div class="flex min-h-screen flex-col">
	<header class="bg-background-header sticky top-0 z-50 shadow">
		<nav class="content-container flex items-center justify-between px-4 py-3 md:py-1">
			<!-- Version mit einfacher Unterstreichung -->
			<a
				class="logo-text transition-colors hover:[&_span]:decoration-black"
				href="./"
				onclick={closeMenu}
			>
				Markus <span
					class="relative top-[-0.2em] underline decoration-[#b773ff] decoration-2 transition-colors"
					>redet</span
				>
			</a>

			<!-- Version mit Sprechblasen-Unterstreichung -->
			<!-- <a
				class="logo-text group transition-colors hover:[&_span]:fill-black hover:[&_svg]:fill-black"
				href="./"
				onclick={closeMenu}
			>
				Markus<span class="inline-flex -translate-y-[6px] flex-col items-end">
					<span class="relative z-10">&nbsp;redet</span>
					<svg
						class="-mt-[3px] h-[5px] w-[43px] fill-[#A551FF] transition-colors group-hover:fill-black"
						width="43"
						height="5"
						viewBox="0 0 43 5"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M6.5 0C3 0 2.19858 4.05721 0 5C2.5 5 3.5 2 7 2H43V0H6.5Z" />
					</svg>
				</span>
			</a> -->

			<!-- Desktop Navigation -->
			<ul class="hidden space-x-2 sm:flex">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class="text-text-base hover:text-text-hover block px-3 py-4 text-xs font-medium tracking-wider uppercase transition-colors"
							>{item.name}</a
						>
					</li>
				{/each}
			</ul>

			<!-- Mobile Burger Button -->
			<button
				class="relative flex h-6 w-6 flex-col items-center justify-center focus:outline-none sm:hidden"
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
			class="sm:hidden {isMenuOpen
				? 'max-h-64 opacity-100'
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
			class="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs sm:hidden"
			onclick={closeMenu}
			onkeydown={(e) => e.key === 'Escape' && closeMenu()}
			role="button"
			tabindex="0"
			aria-label="Menü schließen"
		></div>
	{/if}

	<main class="bg-background-base w-full flex-1">
		{@render children()}
	</main>

	<footer class="bg-background-footer text-text-base mt-auto border-t border-gray-200">
		<div
			class="content-container flex flex-col items-center justify-between gap-2 px-4 py-3 text-xs md:flex-row md:text-sm"
		>
			<div>
				&copy; {new Date().getFullYear()} markus-redet.de
			</div>
			<div class="flex flex-wrap justify-center gap-1">
				<a
					href="./kontakt"
					class="hover:text-text-hover flex items-baseline rounded px-2 py-2 transition-colors"
					>Kontakt</a
				>
				<a
					href="./impressum"
					class="hover:text-text-hover flex items-baseline rounded px-2 py-2 transition-colors"
					>Impressum</a
				>
				<a
					href="./datenschutz"
					class="hover:text-text-hover flex items-baseline rounded px-2 py-2 transition-colors"
					>Datenschutz</a
				>
				<a
					href="https://instagram.com/markus.redet"
					target="_blank"
					rel="noopener"
					class="hover:text-text-hover flex items-baseline rounded px-2 py-2 transition-colors"
				>
					<span class="flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-4 w-4 flex-shrink-0"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7.5 3h9A4.5 4.5 0 0121 7.5v9a4.5 4.5 0 01-4.5 4.5h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM18.75 6.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
							/></svg
						>
						Instagram
					</span>
				</a>
			</div>
		</div>
	</footer>
</div>
