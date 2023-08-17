<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { goto } from "$app/navigation";
	import '../app.postcss';
	import { programs } from '../data/data';
	import { linux } from '../data/linux';
	import { onMount } from 'svelte';
	let ready = false;

	onMount(() => {
		ready = true;	
	})

	console.log(linux.icon)

	function capitalizeString(str: string) {
 		return str.charAt(0).toUpperCase() + str.slice(1);
	
	}
	function handleClick(event: MouseEvent) {
		let src_elm = event.target as HTMLElement | null;
		if (ready && (src_elm !== null)){
			let btns= Array.from(document.getElementsByClassName('btn')) as HTMLElement[];
			btns.forEach(element => {
				element.classList.remove('variant-filled-secondary')
				element.classList.add('variant-filled-surface')
			});
			src_elm.classList.remove('variant-filled-surface')
			src_elm.classList.add('variant-filled-secondary')
			goto(`/${src_elm.innerText.toLowerCase()}`)
		}
	}


</script>

<div class="container mx-auto h-20 w-2/3 flex justify-center items-center">
	{#each programs as program}
		<button type="button"
		class="btn variant-filled-surface mx-10 flex justify-center items-center z-10"
		on:click={handleClick}>
			<span class="pointer-events-none"><svelte:component this={program.icon} /></span>
			<span class="pointer-events-none">{capitalizeString(program.name)}</span>
		</button>
	{/each}
	<button type="button"
		class="btn variant-filled-surface mx-10 flex justify-center items-center z-10"
		on:click={handleClick}>
			<span class="pointer-events-none"><svelte:component this={linux.icon} /></span>
			<span class="pointer-events-none">{capitalizeString(linux.name)}</span>
	</button>
</div>

<slot />

