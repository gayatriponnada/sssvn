<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Notifications from '$lib/components/notifications.svelte';
	import Homepageimage1 from '$lib/images/home-page-image1.png';
	import Homepageimage2 from '$lib/images/home-page-image2.jpg';
	import Homepageimage3 from '$lib/images/home-page-image3.jpg';

	const images = [
		{
			id: 1,
			src: Homepageimage1,
			alt: 'School'
		},
		{
			id: 2,
			src: Homepageimage2,
			alt: 'School'
		},
		{
			id: 3,
			src: Homepageimage3,
			alt: 'School'
		}
	];
	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<svelte:head>
	<title>Sri Shiridi Sai Vidya Niketan</title>
</svelte:head>
<h2 class="text-primary text-3xl font-extralight pl-10 pt-10">Home</h2>
<div class="flex justify-center">
	<Carousel.Root
		plugins={[plugin]}
		class="w-full max-w-xs "
		on:mousenter={plugin.stop}
		on:mouseleave={plugin.reset}
	>
		<Carousel.Content>
			{#each images as image (image.id)}
				<Carousel.Item>
					<div class="p-1">
						<Card.Root>
							<Card.Content class="flex aspect-square items-center justify-center p-6">
								<img src={image.src} alt="hey" class="h-4/5 w-4/5" />
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
		<Carousel.Previous />
		<Carousel.Next />
	</Carousel.Root>
</div>
<Notifications />
