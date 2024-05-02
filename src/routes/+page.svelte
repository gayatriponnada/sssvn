<script lang="ts">
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';
	import Notifications from '$lib/components/notifications.svelte';
	import School from './images/school.jpg';
	import Chairman from './images/chairman.jpeg';
	import Director from './images/director.jpeg';
	const images = [
		{
			id: 1,
			src: './images/school.jpg',
			alt: 'School'
		},
		{
			id: 2,
			src: Chairman,
			alt: 'Chairman'
		},
		{
			id: 3,
			src: Director,
			alt: 'Director'
		}
	];
	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<svelte:head>
	<title>Sri Shiridi Sai Vidya Niketan</title>
</svelte:head>

<Carousel.Root
	plugins={[plugin]}
	class="w-full max-w-xs"
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content>
		<!-- {#each Array(5) as _, i (i)} -->
		{#each images as image (image.id)}
			<Carousel.Item>
				<div class="p-1">
					<Card.Root>
						<Card.Content class="flex aspect-square items-center justify-center p-6">
							<span class="text-4xl font-semibold">{image.src}</span>
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
<Notifications />
