<script lang="ts">
	import School from '$lib/images/school.jpg';
	import Chairman from '$lib/images/chairman.jpeg';
	import Director from '$lib/images/director.jpeg';
</script>

<main class="flex flex-col gap-10">
	<h2 class="text-primary text-3xl font-extralight pl-10 pt-10">About Us</h2>
	<div class="flex items-center flex-col gap-5">
		<div class="w-4/5 h-4/5">
			<img src={School} alt="School" />
		</div>
		<div class="px-10 bg-secondary py-10 md:py-0 md:bg-card">
			<p class="text-justify">
				<b class="text-primary"
					>Sri Shiridi Sai Vidya Niketan is a 21st century school a "School with a Soul".
				</b><br />Leading together, we set out to be a model of excellence in learning. We provide
				an ambience where education is not judged on the basis of marks and ranks. We spot out the
				potential the child possesses and turn them to the face of their real talent because we
				believe that every child is born unique with different level of capabilities and talent. The
				only part left is, to recognize and appreciate it. Hence we work towards sustaining a
				conscious shift from making children study to letting children learn. The shift from rote
				learning to skill development is our prime focus. We instil deeper learning which occurs
				through the purposeful amalgamation of academic content with experiences that prudently
				cultivate skills, mindsets, and literacies essential for students to become lifelong
				learners and contributors in our rapidly changing world. To transform education, to realize
				the power and promise of 21st century learning for every student, WE cast off the anchor of
				our former ways of thinking, raise our sail of innovation, and embark together. But, guess
				what? We are not done. We want more in our students - more skills development, more
				meaningful learning, more values, and more leaders to build. safer and harmonious community-
				and we will get what we want!
			</p>
		</div>
	</div>
	<div class=" flex justify-center">
		<div class=" md:flex md:justify-evenly md:w-4/5 bg-secondary rounded-lg">
			<div class="md:w-3/5 px-5">
				<h4 class="text-2xl text-primary py-5">From Chairman's Desk</h4>
				<p class="text-justify pb-5">
					"A good ambience is a must for any student to learn. Sri Shiridi Sai has gifted this
					ambience to the students creating ideal conditions for studying. One would perhaps dream
					to go back to the past and intend to flourish in this serene atmosphere once again and
					experience the natural touch besides enjoying the sophisticated equipment provided for
					learning purpose. It is not an exaggeration to say that our institutions has all the
					necessary ingredients to be imbibed in the students to accomplish the Human Excellence and
					Personality Development which is the need of the hour. At a time when commercialization of
					education is the order of the day. we at Sri Shiridi Sai Group of Educational
					Institutions, dedicated as we are to quality education, within a short span, moved from
					relative obscurity to occupy an enviable place among the leading institutions in the
					State."
				</p>
			</div>
			<div class="py-10 md:flex md:items-center flex justify-center">
				<img src={Chairman} alt="Chairman" class="rounded-md" />
			</div>
		</div>
	</div>
	<div class="flex justify-center">
		<div
			class="flex md:justify-evenly md:flex-row flex-col-reverse md:w-4/5 bg-secondary rounded-lg"
		>
			<div class=" py-10 flex justify-center md:items-center">
				<img src={Director} alt="Director" class="rounded-md pl-5" />
			</div>
			<div class="md:w-3/5 px-5">
				<h4 class="text-2xl text-primary py-5">From Director's Desk</h4>
				<p class="text-justify pb-5">
					"Although we value academic success highly, however we also appreciate that other
					qualities are equally important to be successful in life. By creating a positive
					environment and a wide range of educational experiences, we provide opportunities for our
					pupils to achieve excellence in intellectual, practical, cultural and sporting pursuits.
					Each pupil has the ability to achieve success in some area of life, given suitable
					guidance and encouragement. We aim to cast the opportunities so wide so that every talent
					gets its chance to develop. The aim of the school has always been to develop the best to
					face the challenges of the changing world through emphasis on self- discipline, high
					intellectual achievements and physical fitness. The school aspires to groom the young boys
					and girls to play the vital role in the future development and administration of this vast
					country. Nothing succeeds like success. For this the very first condition is the will to
					succeed.
				</p>
			</div>
		</div>
	</div>
</main>
