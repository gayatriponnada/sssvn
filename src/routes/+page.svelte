<script lang="ts">
	import Icon from './images/icon.png';
	import Sssvn from './images/sssvn.jpeg';
	import Autoplay from 'embla-carousel-autoplay';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Carousel from '$lib/components/ui/carousel/index.js';

	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<svelte:head>
	<title>Sri Shiridi Sai Vidya Niketan</title>
</svelte:head>

<div class="my-5 mx-5 flex justify-between">
	<div class="px-10"><img src={Sssvn} alt="sssvn" /></div>
	<div class="px-10"><img src={Icon} alt="icon" class="w-32 h-32" /></div>
</div>
<Carousel.Root
	plugins={[plugin]}
	class="w-full max-w-xs"
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.reset}
>
	<Carousel.Content>
		{#each Array(5) as _, i (i)}
			<Carousel.Item>
				<div class="p-1">
					<Card.Root>
						<Card.Content class="flex aspect-square items-center justify-center p-6">
							<span class="text-4xl font-semibold">{i + 1}</span>
						</Card.Content>
					</Card.Root>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<Carousel.Previous />
	<Carousel.Next />
</Carousel.Root>
