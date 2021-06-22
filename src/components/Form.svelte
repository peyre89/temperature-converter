<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Option } from '../types';

	const dispatch = createEventDispatcher();

	const options: Array<Option> = [
		{ id: 1, text: "Fahrenheit" },
		{ id: 2, text: "Kelvin" },
	];

	let degree: number;
	let selected: Option;

	function handleSubmit() {
		dispatch('submit', {
			degree,
			selected,
		})
	}
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="number" bind:value={degree}>

	<select bind:value={selected}>
		{#each options as option (option.id)}
			<option value={option}>
				{option.text}
			</option>
		{/each}
	</select>

	<button type=submit>
		Submit
	</button>
</form>