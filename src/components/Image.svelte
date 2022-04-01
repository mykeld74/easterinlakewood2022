<script lang="ts">
	// import { image, initialize } from 'svelte-cloudinary';
	export let source: string;
	export let altTag: string;

	// initialize({ cloud_name: 'mykeld74' });

	let src = `https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/easterinlakewood/${source}`;
</script>

<!-- <img use:image={{ src, bind: true, lazy: true }} alt={altTag} class={source} /> -->

<img {src} alt={altTag} class={source} loading="lazy" />
