<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
</script>

<h2 class="text-primary text-3xl font-extralight pl-10 pt-10">Contact Us</h2>
<div class="flex justify-center mt-10">
	<Card.Root class="w-full max-w-lg">
		<Card.Header>
			<Card.Title class="text-2xl text-center">Contact</Card.Title>
		</Card.Header>
		<Card.Content class="grid gap-4">
			<div class="grid gap-2">
				<Label for="text">Name</Label>
				<Input id="text" type="text" placeholder="Joe" required />
			</div>
			<div class="grid gap-2">
				<Label for="email">Email</Label>
				<Input id="email" type="email" placeholder="Joe@gmail.com" required />
			</div>
			<div class="grid gap-2">
				<Label for="number">Phone Number</Label>
				<Input id="number" type="number" required />
			</div>
		</Card.Content>
		<Card.Footer>
			<Button class="w-full">Submit</Button>
		</Card.Footer>
	</Card.Root>
</div>
