<script>
	import '../app.css';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Button } from '$lib/components/ui/button/index';
	import Sssvn from '$lib/images/sssvn.jpeg';
	import Location from './location-icon.svelte';
	import Phone from './phone-icon.svelte';
	import Mail from './email-icon.svelte';
	import MenuIcon from './menu-icon.svelte';

	let menuOpen = false;
</script>

<div class=" mt-2 flex justify-center">
	<div class=" pl-5"><img src={Sssvn} alt="sssvn" /></div>
</div>
<nav class="sticky top-0 bg-card">
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button
				on:click={() => (menuOpen = !menuOpen)}
				builders={[builder]}
				variant="outline"
				class="md:hidden flex justify-end ml-3 "
			>
				{#if menuOpen}
					<strong>&times</strong>
				{/if}
				{#if !menuOpen}
					<span><MenuIcon /></span>
				{/if}</Button
			>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-full h-full">
			<DropdownMenu.Group>
				<DropdownMenu.Item><a href="/"> Home </a></DropdownMenu.Item>
				<DropdownMenu.Item><a href="/aboutus">About us</a></DropdownMenu.Item>
				<DropdownMenu.Item><a href="/academics">Academics</a></DropdownMenu.Item>
				<DropdownMenu.Item><a href="/newsroom">Newsroom</a></DropdownMenu.Item>
				<DropdownMenu.Item><a href="/events">Evnets</a></DropdownMenu.Item>
				<DropdownMenu.Item><a href="/contact">Contact</a></DropdownMenu.Item>
			</DropdownMenu.Group>
			<DropdownMenu.Separator />
		</DropdownMenu.Content>
	</DropdownMenu.Root>
	<ul
		class="md:flex md:flex-row md:justify-evenly font-serif text-2xl border-b-2 p-5 hidden target:bg-primary"
	>
		<li>
			<a class="" href="/">Home</a>
		</li>
		<li>
			<a href="/aboutus">About us</a>
		</li>
		<li>
			<a href="/academics">Academics</a>
		</li>
		<li>
			<a href="/newsroom">Newsroom</a>
		</li>
		<li>
			<a href="/events">Events</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
	</ul>
</nav>
<slot />
<footer class="flex md:justify-evenly justify-between bg-secondary mt-10 px-5">
	<div class="py-10">
		<b class="text-2xl text-primary">Quick Links</b>
		<ul class="flex flex-col gap-3 text-1xl">
			<li class="pt-3">
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/aboutus">About us</a>
			</li>
			<li>
				<a href="/academics">Academics</a>
			</li>
			<li>
				<a href="/newsroom">Newsroom</a>
			</li>
			<li>
				<a href="/events">Events</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</div>
	<div class="flex flex-col gap-3 py-10">
		<b class="text-2xl text-primary">Info</b>
		<div class="flex justify-start">
			<Location />
			<p class="pl-5">Kadiyam</p>
		</div>
		<div class="flex justify-start">
			<Phone />
			<a href="tel:0883-2555955" class="pl-5">0883-2555955</a>
		</div>
		<div class="flex justify-start">
			<Mail />
			<a href="mailto:shirdisaischools@gmail.com" class="pl-5">shirdisaischools@gmail.com</a>
		</div>
	</div>
</footer>
<div class="bg-secondary text-center">© 2022 Sri Shirdi Sai Vidya Niketan</div>
