<script>
	import Block from '$components/block.svelte';
	let blockClass = 'GoodFriday';
	let id = 'GoodFriday';
	import Img from '$components/Image.svelte';
</script>

<Block {blockClass} {id}>
	<div class="GFcontainer">
		<h1>Good Friday</h1>
		<div class="stationsContainer">
			<div class="imgContainer"><Img source="station2" altTag="Good Friday" /></div>
			<div class="imgContainer"><Img source="station10" altTag="Good Friday" /></div>
			<div class="imgContainer"><Img source="station11" altTag="Good Friday" /></div>
		</div>
	</div>
</Block>

<style lang="scss">
	.stationsContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		margin: 0 auto;
		padding: 0;
		gap: 5vw;

		@media (max-width: 620px) {
			flex-direction: column;
			gap: 30px;
		}
	}
</style>
