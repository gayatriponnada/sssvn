<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="flex justify-evenly mt-10">
	<Card.Root class="w-2/6 h-2/6 py-5">
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
						<p class="text-1xl font-medium leading-none">Polycet'21</p>
						<p class="text-sm text-muted-foreground">Polycet</p>
					</a>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
	<Card.Root class="w-2/6 h-2/6 py-5">
		<Card.Header class="pb-3 ">
			<Card.Title class="text-primary text-2xl font-serif">Events</Card.Title>
			<Card.Description>Check all the events!!!</Card.Description>
		</Card.Header>
		<Card.Content class="grid gap-1">
			<div
				class="-mx-2 flex items-start space-x-4 rounded-md p-3 transition-all hover:bg-accent hover:text-accent-foreground"
			>
				<div class="space-y-1">
					<a href="/events">
						<p class="text-1xl font-medium leading-none">Kreedosthav</p>
						<p class="text-sm text-muted-foreground">Soprts Day'24</p>
					</a>
				</div>
				<!-- <p class="flex justify-end">2021</p> -->
			</div>
			<div
				class="-mx-2 flex items-start space-x-4 rounded-md hover:bg-accent p-3 text-accent-foreground transition-all"
			>
				<div class="space-y-1">
					<a href="/events">
						<p class="text-1xl font-medium leading-none">Arts Exhibition</p>
						<p class="text-sm text-muted-foreground">2023</p>
					</a>
				</div>
			</div>
			<div
				class="-mx-2 flex items-start space-x-4 rounded-md p-3 transition-all hover:bg-accent hover:text-accent-foreground"
			>
				<div class="space-y-1">
					<a href="/events">
						<p class="text-1xl font-medium leading-none">Group Formation</p>
						<p class="text-sm text-muted-foreground">2021</p>
					</a>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>
