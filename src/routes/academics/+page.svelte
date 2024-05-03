<script lang="ts">
	import Connect from '../connect.svelte';
	import Success from '../success.svelte';
	import Thrive from '../thrive.svelte';
	import World from '../world.svelte';
	import Curriculum from '$lib/images/curriculum.png';
	import Makingdifference from '$lib/images/making-difference.png';
	import Unique from '$lib/images/unique.png';
</script>

<h2 class="text-primary text-3xl font-extralight pl-10 pt-10">Academics</h2>
<div class="flex justify-center py-5 mt-10 bg-secondary m-10">
	<div class="w-3/5">
		<h4 class=" text-2xl text-primary py-5">Curriculum</h4>
		<p>Professional. Practiced. Prepared.</p>
		<p class="text-justify">
			We have designed the curriculum in such a way that you will find yourself amidst plethora of
			opportunities; from flexible choice based courses to project based experiential learning
			platforms where you will be encouraged to explore areas of grand challenges that will shape
			the future. The learning experiences that our students are continuously exposed to is designed
			to groom future leaders, innovators and professionals who are not only academically qualified
			but also have a heart for their profession. Students consider and express their own opinions
			on a range of ‘ultimate questions’. They know, understand and exercise their rights and
			responsibilities. While they make choices, take risks and consider their safety when making
			choices. Students learn about the importance of respect, tolerance and celebration of
			discipline through our whole-school activities. There is no room for prejudice or
			discrimination.
		</p>
	</div>
	<div class="pl-5 w-1/4 h-1/4">
		<img src={Curriculum} alt="curriculum" />
	</div>
</div>
<div class="flex justify-center bg-secondary py-5">
	<div class=" w-1/5 h-1/5">
		<img src={Unique} alt="unique" />
	</div>
	<div class="w-3/5 pl-5">
		<h4 class=" text-2xl text-primary py-5">Unique & Inspiring Academics</h4>
		<p class="text-justify">
			At Sri Shirdi Sai Vidya Niketan, we believe that every student should embrace their passion.
			We inspire our students to explore new ideas and immerse themselves in a journey of continuous
			learning and discovery.
		</p>
		<h4 class="text-2xl pt-5">THE FUTURE IS BRIGHT</h4>
		<ul class=" pt-5 grid grid-col-4 gap-3">
			<div class="flex justify-start">
				<Connect></Connect>
				<li class="pl-5">To Connect</li>
			</div>
			<div class="flex justify-start">
				<Success></Success>
				<li class="pl-5">To Succeed</li>
			</div>
			<div class="flex justify-start">
				<Thrive></Thrive>
				<li class="pl-5">To Thrive</li>
			</div>
			<div class="flex justify-start">
				<World></World>
				<li class="pl-5">To Own The Future</li>
			</div>
		</ul>
	</div>
</div>
<div class="flex justify-center py-5 bg-secondary">
	<div class="w-3/5">
		<h4 class=" text-2xl text-primary py-5">Making a Difference</h4>
		<p class="text-justify">
			At Sri Shirdi Sai Vidya Niketan, we believe our students should enter the workforce ready to
			make a difference — to succeed in whatever area of study they choose. It starts in the
			classroom, where our acclaimed educators teach not only the essentials of subjects, but
			practical applications for each subject. Our distinguished faculty includes practiced and
			dedicated members of the Teaching profession. Our concern is the individual student. We make
			sure that we fit our program to your child, not your child into our program. With this
			approach we can help students of all ages with all types of concerns.
		</p>
	</div>
	<div class="  pl-5 w-1/4 h-1/4">
		<img src={Makingdifference} alt="unique" />
	</div>
</div>
