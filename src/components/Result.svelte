<script lang="ts">
	export let result: number | null | undefined;
</script>

<div>
    {#if result}
        {result} °C
    {:else}
        ...
    {/if}
</div>

<style>
	div {
        padding: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 168px;
        margin: 0 auto;
        background-color: rgb(232, 244, 253);
        font-size: 28px;
	}
</style>