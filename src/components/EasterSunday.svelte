<script>
	import Block from '$components/block.svelte';
	let blockClass = 'easterSunday';
	let id = 'EasterSunday';
	import Img from '$components/Image.svelte';
</script>

<Block {blockClass} {id}>
	<div class="contentContainer">
		<h1>Easter Sunday, You are invited!</h1>
		<div class="bfaContainer">
			<div class="imgContainer">
				<Img source="EasterSkull" altTag="Easter Sunday" />
			</div>
			<div class="imgContainer bfaText">
				<Img source="bfa" altTag="Beauty From Ashes" />
			</div>
		</div>
		<div class="timeContainer">
			<p class="desc">
				Join us in worship and celebration of the resurrection of Jesus! We will be singing songs
				that declare he has conquered the grave and starting a new series, from Beauty to Ashes.
			</p>
			<p class="desc">Sunday: April 17th, 9 and 10.30am</p>
		</div>
	</div>
</Block>

<style lang="scss">
	h1 {
		font-size: clamp(46px, 8vw, 60px);
		text-align: center;
	}

	.bfaContainer {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 100%;
		margin: 0;
		padding: 0;
		gap: 5vw;

		@media (max-width: 620px) {
			flex-direction: column;
			gap: 30px;
		}
	}
	.imgContainer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: clamp(250px, 30vw, 425px);
		margin: 0;
	}
	.bfaText {
		width: clamp(300px, 45vw, 600px);
	}
</style>
