<script lang="ts">
	import Alert from './components/Alert.svelte';
	import Form from './components/Form.svelte';
	import Result from './components/Result.svelte';

	import { fahrenheitToCelsius, kelvinToCelsius } from './utils/formulas';

	let alert: boolean = false;
	let result: number | null | undefined;

	function handleSubmit(event) {
		alert = false;

		const { degree, selected } = event.detail;

		// can be undefined or null
		if (!degree) {
			alert = true;
			result = null;
		} else {
			switch (selected.id) {
				case 1:
					result = fahrenheitToCelsius(degree);
					break;
				case 2:
					result = kelvinToCelsius(degree);
					break;
				default:
					console.log('default');
			}
		}
	}
</script>

<main>
	<h1>Temperature Converter</h1>
	<p>Enter a temperature in degree Farenheit or Kelvin to know its equivalent in degree Celsius.</p>

	{#if alert}
		<div class="wrap-alert">
			<Alert />
		</div>
	{/if}

	<div class="wrap-form">
		<Form on:submit={handleSubmit} />
	</div>

	<div class="wrap-result">
		<Result result={result} />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #171e29;
		font-size: 40px;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}

		h1 {
			font-size: 56px;
		}
	}

	.wrap-alert,
	.wrap-form,
	.wrap-result {
		margin-top: 32px;
	}

	.wrap-alert + .wrap-form {
		margin-top: 16px;
	}
</style>