<script>
	import '../app.css';
	import Icon from './images/icon.png';
	import Sssvn from './images/sssvn.jpeg';
	import Location from './location-icon.svelte';
	import Phone from './phone-icon.svelte';
	import Mail from './email-icon.svelte';
</script>

<div class="my-5 mx-5 flex justify-between">
	<div class="px-10"><img src={Sssvn} alt="sssvn" /></div>
	<div class="px-10"><img src={Icon} alt="icon" class="w-32 h-32" /></div>
</div>
<nav>
	<ul class="flex justify-evenly font-serif text-2xl">
		<li>
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
</nav>
<slot />
<footer class="flex justify-evenly bg-secondary mt-10">
	<div class="py-10">
		<b class="text-2xl">Quick Links</b>
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
		<b class="text-2xl">Info</b>
		<div class="flex justify-start">
			<Location />
			<p class="pl-5">A unit of Sri Shirdi Sai Vidya Niketan EM School</p>
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
