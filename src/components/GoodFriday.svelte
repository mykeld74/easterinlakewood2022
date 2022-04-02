<script>
	import Block from '$components/block.svelte';
	import Img from '$components/Image.svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);
	let blockClass = 'GoodFriday';
	let id = 'GoodFriday';

	onMount(() => {
		const width = window.innerWidth;
		if (width >= 768) {
			let gftl = gsap.timeline({
				scrollTrigger: {
					trigger: '#GFContainer',
					start: 'top bottom',
					end: 'top 200',
					scrub: true
				}
			});
			gftl
				.from('.headlineContainer h1', {
					opacity: 0,
					duration: 0.75,
					stagger: 0.25,
					y: 1000,
					ease: 'ease-in-out'
				})
				.from('.gfDesc', { opacity: 0, duration: 0.75, ease: 'ease-in-out' });
			let gfImg = gsap.timeline({
				scrollTrigger: {
					trigger: '.gfDesc',
					start: 'top bottom',
					end: 'top 200',
					scrub: true
				}
			});
			gfImg.from('.stationsContainer img', {
				opacity: 0,
				duration: 0.75,
				x: 1500,
				stagger: 0.25,
				y: 1000,
				ease: 'ease-in-out'
			});
		}
	});
</script>

<Block {blockClass} {id}>
	<div class="GFcontainer" id="GFContainer">
		<div class="headlineContainer">
			<h1>Good</h1>
			<h1>Friday</h1>
		</div>
		<div class="textContainer">
			<p class="desc gfDesc">
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
		align-items: center;
		flex-direction: column;
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
