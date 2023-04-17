let articles = gsap.utils.toArray("article");

/* articles.forEach((article) => {
    gsap.from(article, {
        scrollTrigger: {
            trigger: article,
            toggleActions: "restart reset play none"
        },
        duration: .5,
        x: -300,
        opacity: 0
    });
}); */

articles.forEach((article) => {
    gsap.from(article, {
        scrollTrigger: {
            trigger: article,
            toggleActions: "play reverse play reverse",
            start: "top 90%",
            end: "bottom 10%"
        },
        duration: .5,
        x: -300,
        opacity: 0
    });
});