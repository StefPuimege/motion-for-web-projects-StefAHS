let chapters = gsap.utils.toArray(".ch");

/* chapters.forEach((chapter) => {
    gsap.from(chapter, {
        scrollTrigger: {
            trigger: chapter,
            toggleActions: "play reverse play reverse",
            start: "top 90%",
            end: "bottom 10%"
        },
        duration: 1,
        y: -300,
        opacity: 0
    });
}); */

chapters.forEach((chapter) => {
    gsap.from(chapter, {
        duration: 3,
        y: -300,
        opacity: 0,
        stagger: 3
    });
});