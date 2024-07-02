<script lang="ts">
	import { Button } from '$lib/components/ui/button/index';
	export let form;
</script>

<h2 class="text-primary text-3xl font-extralight pl-10 pt-10">Contact Us</h2>
<form action="?/add" method="post" class="flex justify-center mt-10">
	<div class=" md:w-2/5 border-2 rounded-md">
		<fieldset>
			<header class="flex justify-center text-3xl font-extralight p-5">Contact</header>
			<div class="flex flex-col gap-5 py-2 px-5">
				<label for="name">Name:</label>
				<input type="text" name="name" class="h-10 border-2 rounded-md" placeholder="Joe" />
			</div>
			<div class="flex flex-col gap-5 py-2 px-5">
				<label for="email">Email:</label>
				<input type="email" name="email" class="h-10 border-2 rounded-md" placeholder="Joe@gmail" />
			</div>
			<div class="flex flex-col gap-5 py-2 px-5">
				<label for="phone">Phone:</label>
				<input type="tel" name="phone" class="h-10 border-2 rounded-md" placeholder="+91" />
			</div>
			<div class="flex flex-col gap-5 py-2 px-5">
				<label for="message">Message</label>
				<textarea name="message" class="border-2 rounded-md" placeholder="Type here..."></textarea>
			</div>
			<div class="p-5">
				<Button type="submit" class="p-5 w-full ">Submit</Button>
			</div>
			<p>{form?.success || ''}</p>
		</fieldset>
	</div>
</form>
