<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<Card.Root class="w-2/6 h-2/6 ml-5">
	<Card.Header class="pb-3">
		<Card.Title class="text-primary text-2xl font-serif">News Room</Card.Title>
		<Card.Description>Get all the updates here!!!</Card.Description>
	</Card.Header>
	<Card.Content class="grid gap-1">
		<div
			class="-mx-2 flex items-start space-x-4 rounded-md p-3 transition-all hover:bg-accent hover:text-accent-foreground"
		>
			<div class="space-y-1">
				<a href="newsroom">
					<p class="text-1xl font-medium leading-none">NTSE'21</p>
					<p class="text-sm text-muted-foreground">State 14th Rank</p>
				</a>
			</div>
			<!-- <p class="flex justify-end">2021</p> -->
		</div>
		<div
			class="-mx-2 flex items-start space-x-4 rounded-md hover:bg-accent p-3 text-accent-foreground transition-all"
		>
			<div class="space-y-1">
				<a href="newsroom">
					<p class="text-1xl font-medium leading-none">CEEP'20</p>
					<p class="text-sm text-muted-foreground">Polytechnic State 5th Rank</p>
				</a>
			</div>
		</div>
		<div
			class="-mx-2 flex items-start space-x-4 rounded-md p-3 transition-all hover:bg-accent hover:text-accent-foreground"
		>
			<div class="space-y-1">
				<a href="newsroom">
					<p class="text-1xl font-medium leading-none">Sports 24</p>
					<p class="text-sm text-muted-foreground">Kreedosthav</p>
				</a>
			</div>
		</div>
	</Card.Content>
</Card.Root>
