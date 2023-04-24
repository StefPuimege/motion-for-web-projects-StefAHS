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

gsap.from(".timeline ul"), {
    duration: 0.3,
    scale: 0.6,
    opacity: 0,
    x: -100,
    stagger: 1
};

gsap.from("#title .ch"), {
    duration: 0.3,
    scale: 0.6,
    opacity: 0,
};
