let chapters = gsap.utils.toArray(".ch");

chapters.forEach((chapter) => {
    gsap.from(chapter, {
        scrollTrigger: {
            trigger: chapter,
            scroller: ".parallax",
            toggleActions: "play reverse play reverse",
            start: "top 90%",
            end: "bottom 10%"
        },
        duration: 0.3,
        scale: 0.6,
        opacity: 0
    });
});

let timeline = gsap.timeline({});

timeline.from("h1", {
    duration: 0.5,
    scale: 0.6,
    opacity: 0,
});

timeline.from("h3", {
    duration: 0.5,
    scale: 0.6,
    opacity: 0,
})

timeline.from(".timeline", {
    duration: 0.5,
    scale: 1,
    opacity: 0,
    x: -100
});

timeline.fromTo("li", {
    scale: 0.1,
}, {
    scale: 1,
    stagger: 0.1,
    delay: -0.5
});


