<script>
	import Block from '$components/block.svelte';
	import Img from '$components/Image.svelte';
	let blockClass = 'directions';
	let id = 'Directions';
</script>

<Block {blockClass} {id}>
	<div class="directionContainer">
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.8329214253686!2d-105.08480848435234!3d39.675972808278864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b81ad73d8223d%3A0xef2d6fab8083844!2sWestwoods%20Community%20Church!5e0!3m2!1sen!2sus!4v1569100714699!5m2!1sen!2sus"
			frameBorder="0"
			allowFullScreen
			title="Westwoods Map"
			id="wwMap"
		/>
		<div class="directionText">
			<p class="churchName">Westwoods Community Church</p>
			<p>7700 Woodard Dr.</p>
			<p>Lakewood, CO 80227</p>
			<p>
				<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer"
					>www.WestwoodsCC.org</a
				>
			</p>
		</div>
	</div>
	<div class="logoContainer">
		<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer"
			><Img source="wwccLogo" altTag="Westwoods Community Church Logo" /></a
		>
	</div>
</Block>

<style lang="scss">
	.directionContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		width: 90%;
		max-width: 1170px;
		margin: 0 auto;
		padding: 0;
		gap: 30px;
	}
	.directionText {
		width: 100%;
		p {
			color: #fff;
			font-size: clamp(22px, 3vw, 34px);
			margin: 0 0 10px 0;

			&.churchName {
				font-size: clamp(28px, 5vw, 48px);
			}
			a {
				color: #fff;
				text-decoration: none;
				transition: all 0.3s ease-in-out;
				&:hover {
					text-decoration: underline;
					color: #ed1f25;
				}
			}
		}
	}
	#wwMap {
		width: 100%;
		aspect-ratio: 16/9;
	}
	.logoContainer {
		display: none;
		@media (max-width: 449px) {
			display: block;
			position: absolute;
			bottom: 20px;
			right: 20px;
			width: 150px;
		}
	}
</style>
