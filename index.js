gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
	'.advert',
	{ xPercent: 30 },
	{ duration: 3, xPercent: 0, ease: 'bounce' }
);

gsap
	.timeline()
	.from('.img-div img', {
		xPercent: -100,
		duration: 1,
		scrollTrigger: {
			trigger: '.img-div',
			start: 'top center',
			end: 'bottom center',
			scrub: true,
		},
	})
	.fromTo(
		'.interactive-div',
		{ yPercent: -30, scale: 0.5 },
		{
			opacity: 1,
			yPercent: 0,
			scale: 1,
			scrollTrigger: {
				trigger: '.interactive-div',
				start: 'top center',
				end: 'bottom center',
				scrub: true,
			},
		}
	);

gsap.utils.toArray('.layer').forEach((layer, i) => {
	ScrollTrigger.create({
		trigger: layer,
		start: 'top top',
		pin: true,
		pinSpacing: false,
	});
});

// Animation for article images

gsap.to('.box', 1, {
	scale: 0.3,
	y: 60,
	yoyo: true,
	repeat: -1,
	ease: 'power1.inOut',
	delay: 2,
	stagger: {
		amount: 1.5,
		grid: 'auto',
		from: 'center',
	},
});

gsap.to('.layer-1', { y: '-100vh', delay: .5 });
gsap.to('.layer-2', { y: '-100vh', delay: .7 });
gsap.to('.layer-3', { y: '-100vh', delay: .9 });
gsap.to('.overlay', { y: '-100vh', delay: 1.5 });

gsap.fromTo('.text',
	{ x: '30rem', opacity: 0 },
	{ x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1.9 });

gsap.fromTo('.watch-wrapper',
	{ x: '30rem', opacity: 0 },
	{ x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2.3 });

gsap.fromTo('.circle-small',
	{ x: '-30rem', opacity: 0 },
	{ x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1 });

gsap.fromTo('.circle-large',
	{ x: '30rem', opacity: 0 },
	{ x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 1.5 });