<script>
	import Block from '$components/block.svelte';
	import { gsap } from 'gsap';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger.js';
	import { onMount } from 'svelte';
	gsap.registerPlugin(ScrollTrigger);

	let blockClass = 'eeh-block';
	let id = 'EasterEggHunt';

	onMount(() => {
		const width = window.innerWidth;
		if (width >= 768) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.eeh',
					start: 'top bottom',
					end: 'top 200',
					scrub: true
				}
			});
			tl.from('.eeh p', {
				opacity: 0,
				duration: 0.75,
				y: 1000,
				stagger: 0.25,
				ease: 'ease-in-out'
			}).from('#eehDesc', { opacity: 0, duration: 0.75, ease: 'ease-in-out' });
		}
	});
</script>

<Block {blockClass} {id}>
	<div class="contentContainer .eehContainer">
		<div class="eeh">
			<p class="join">Join us for an</p>
			<p class="easter">Easter</p>
			<p class="eggHunt">Egg Hunt</p>
		</div>
		<div id="eehDesc">
			<p class="desc">Hop on over for a fun time and find some eggs!</p>

			<p class="desc">Join your neighbors for our annual Community Egg Hunt!</p>

			<p class="desc">Prizes, Games, Food and Fun for the whole family!</p>

			<p class="desc">Everyone is welcome!</p>
			<p class="desc">Saturday: April 16th, 10-11.30am</p>
		</div>
	</div>
</Block>

<style lang="scss">
	.contentContainer {
		overflow: hidden;
	}
	.eeh {
		color: #fff;
		p {
			text-align: center;
			text-transform: uppercase;
			margin: 0 auto 10px;
			line-height: 1;
		}
	}
	.join {
		font-size: clamp(46px, 8vw, 60px);
		font-style: italic;
	}
	.easter {
		font-size: clamp(110px, 12vw, 160px);
		font-weight: 900;
	}
	.eggHunt {
		font-size: clamp(55px, 7vw, 90px);
		font-weight: 700;
	}
	p {
		text-shadow: 3px 3px 8px #000;
	}
</style>
