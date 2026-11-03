<script>
	let { src, title } = $props();

	let audio;
	let paused = $state(true);
	let currentTime = $state(0);
	let duration = $state(0);

	function togglePlay() {
		if (paused) {
			audio.play();
		} else {
			audio.pause();
		}
		paused = !paused;
	}

	function formatTime(seconds) {
		if (isNaN(seconds)) return '0:00';
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	}

	function handleSeek(e) {
		const percent = e.target.value / 100;
		audio.currentTime = percent * duration;
	}

	function updateProgress() {
		currentTime = audio.currentTime;
	}

	function handleMetadata() {
		duration = audio.duration;
	}
</script>

<div
	class="flex flex-col gap-2 border border-gray-100 bg-white p-4 shadow-sm transition-all hover:shadow-md"
>
	{#if title}
		<p class="mb-1 text-[10px] font-medium tracking-[0.2em] text-text-hover uppercase">{title}</p>
	{/if}

	<div class="flex items-center gap-4">
		<button
			onclick={togglePlay}
			class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-text-hover focus:outline-none"
			aria-label={paused ? 'Abspielen' : 'Pause'}
		>
			{#if paused}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M8 5v14l11-7z" />
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
				</svg>
			{/if}
		</button>

		<div class="flex flex-1 flex-col gap-1">
			<div class="relative h-1.5 w-full bg-gray-200">
				<!-- Buffered bar (optional, harder to do with simple input) -->
				<div class="absolute h-full bg-text-hover/30" style="width: 0%"></div>
				<!-- Progress bar -->
				<div
					class="absolute h-full bg-text-hover transition-all duration-100"
					style="width: {(currentTime / duration) * 100 || 0}%"
				></div>
				<!-- Invisible range input for seeking -->
				<input
					type="range"
					min="0"
					max="100"
					value={(currentTime / duration) * 100 || 0}
					oninput={handleSeek}
					class="absolute inset-0 h-full w-full cursor-pointer opacity-0"
				/>
			</div>

			<div
				class="flex justify-between font-mono text-[10px] tracking-wider text-gray-500 lowercase tabular-nums"
			>
				<span>{formatTime(currentTime)}</span>
				<span>{formatTime(duration)}</span>
			</div>
		</div>
	</div>

	<audio
		bind:this={audio}
		{src}
		ontimeupdate={updateProgress}
		onloadedmetadata={handleMetadata}
		onended={() => (paused = true)}
		class="hidden"
	></audio>
</div>

<style>
	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		background: transparent;
		cursor: pointer;
	}
</style>
