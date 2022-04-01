<script>
	import Block from '$components/block.svelte';
	let blockClass = 'eeh-block';
	let id = 'EasterEggHunt';
</script>

<Block {blockClass} {id}>
	<div class="contentContainer">
		<div class="eeh">
			<p class="join">Join us for an</p>
			<p class="easter">Easter</p>
			<p class="eggHunt">Egg Hunt</p>
		</div>
		<p class="desc">Hop on over for a fun time and find some eggs!</p>

		<p class="desc">Join your neighbors for our annual Community Egg Hunt!</p>

		<p class="desc">Prizes, Games, Food and Fun for the whole family!</p>

		<p class="desc">Everyone is welcome!</p>
		<p class="desc">Saturday: April 16th, 10-11.30am</p>
	</div>
</Block>

<style lang="scss">
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
