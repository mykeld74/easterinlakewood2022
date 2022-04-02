<script>
	import Block from '$components/block.svelte';
	import Img from '$components/Image.svelte';
	let blockClass = 'GoodFriday';
	let id = 'GoodFriday';
</script>

<Block {blockClass} {id}>
	<div class="GFcontainer">
		<div class="headlineContainer"><h1>Good<br /> Friday</h1></div>
		<div class="textContainer">
			<p class="desc">
				Join us as we press into Good Friday by experiencing the stations of the Cross. It will be
				an interactive cross-section of elements, ideas, and objects from Jesus' journey to the
				cross. As you work through the stations.
			</p>
		</div>
		<div class="stationsContainer">
			<div class="imgContainer"><Img source="station2" altTag="Good Friday" /></div>
			<div class="imgContainer"><Img source="station10" altTag="Good Friday" /></div>
			<div class="imgContainer"><Img source="station11" altTag="Good Friday" /></div>
		</div>
		<p class="desc">Friday: April 15th, 12-8pm - come anytime</p>
		<p class="desc">The experience will take 30-45 minutes.</p>
	</div>
</Block>

<style lang="scss">
	.headlineContainer {
		width: 100%;
		display: flex;
		justify-content: center;
		h1 {
			text-align: center;
			font-size: clamp(36px, 9vw, 128px);
			text-transform: uppercase;
			margin: 0;
		}
	}
	.stationsContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90%;
		max-width: 860px;
		margin: 0 auto;
		padding: 0;
		gap: 5vw;

		@media (max-width: 620px) {
			flex-direction: column;
			gap: 30px;
		}
	}
</style>
