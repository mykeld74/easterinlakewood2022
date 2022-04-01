<script>
	export let blockClass = '';
	export let id;
</script>

<div class="block {blockClass}" {id}>
	<slot />
</div>

<style lang="scss">
	.block {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
		margin: 0;
		padding: 20px 0;
	}

	.easterSunday {
		background: url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/easterinlakewood/EasterSundayBG')
			50% 50% / cover no-repeat fixed;
		color: #fff;
		justify-content: space-around;
	}
	.eeh-block {
		background: url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/easterinlakewood/easterEggBG')
			50% 50% / cover no-repeat fixed;
	}
	.GoodFriday {
		background: url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/easterinlakewood/GoodFridayBG')
			50% 50% / cover no-repeat fixed;
	}
	.directions {
		background: radial-gradient(circle, rgba(20, 57, 62, 1) 0%, rgba(8, 5, 40, 1) 100%);
		position: relative;
		&:after {
			position: absolute;
			content: '';
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/easterinlakewood/grungeoverlay')
				50% 50% / cover no-repeat fixed;
			opacity: 0.1;
			pointer-events: none;
		}
	}
</style>
