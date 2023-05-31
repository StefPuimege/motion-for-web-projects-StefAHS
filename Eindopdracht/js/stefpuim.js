console.log("stefpuim.js: loaded");

function stefpuim(fase) {
    console.log("stefpuim.js: fase = " + fase);
    let section = document.getElementById("stefpuim");

    if( ! section.init) {
        section.init = true;
        console.log("stefpuim.js: init");
        section.tl
        // 0
        .to("#stefpuim .hour", {
            rotation: 720,
            duration: 24,
            ease: "none"
        }, 0)
        .to("#stefpuim .minute", {
            rotation: 8640,
            duration: 24,
            ease: "none"
        }, 0)
        .to("#stefpuim .box", {
            borderRadius: "50%",
            backgroundColor: "#dddddd",
            rotation: 360,
            left: "35vw",
            top: "calc(50vh - 15vw)",
            width: "30vw",
            height: "30vw",
            border: "0px solid white",
            duration: 3,
            ease: "none"
        }, 0)
        .to("#stefpuim .bg", {
            background: "rgb(13,45,92)",
            background: "linear-gradient(0deg, rgba(13,45,92,1) 0%, rgba(0,0,0,1) 100%)",
            duration: 0.01,
            ease: "none"
        }, 0)
        .to("#stefpuim .bg #stars", {
            transform: "translate3d(0, 50vh, 0) scale(2.5)",
            duration: 0.01,
            ease: "none"
        }, 0)
        .to("#stefpuim .dot", {
            opacity: "100%",
            duration: 1,
            ease: "none"
        }, 0)
        .to("#stefpuim .bg #stars", {
            opacity: "1",
            duration: 3,
            ease: "none"
        }, 0)
        .to("#stefpuim .bg #stars", {
            rotation: "90deg",
            duration: 8,
            ease: "none"
        }, 0)
        // 1
        .to("#stefpuim .hour", {
            opacity: "100%",
            duration: 2,
            ease: "none"
        }, 1)
        .to("#stefpuim .minute", {
            opacity: "100%",
            duration: 2,
            ease: "none"
        }, 1)
        .to("#stefpuim .mark", {
            opacity: "100%",
            duration: 2,
            ease: "none"
        }, 1)
        .to("#stefpuim .label", {
            opacity: "100%",
            duration: 2,
            ease: "none"
        }, 1)
        // 3
        .to("#stefpuim .box", {
            border: "40px solid white",
            boxShadow: "0.4vh 0.6vh 1.6vh 0 rgba(0, 0, 0, 0.3) inset, 0.4vh 0.6vh 1.6vh 0 rgba(0, 0, 0, 0.3)",
            duration: 1,
            ease: "none"
        }, 3)
        .to("#stefpuim .hour", {
            boxShadow: "0 0 1.6vh 0 rgba(0, 0, 0, 0.3)",
            duration: 1,
            ease: "none"
        }, 3)
        .to("#stefpuim .minute", {
            boxShadow: "0 0 1.6vh 0 rgba(0, 0, 0, 0.3)",
            duration: 1,
            ease: "none"
        }, 3)
        .to("#stefpuim .dot", {
            boxShadow: "0 0 1.6vh 0 rgba(0, 0, 0, 0.3)",
            duration: 1,
            ease: "none"
        }, 3)
        // 5
        .to("#stefpuim .bg #stars", {
            opacity: "0",
            duration: 3,
            ease: "none"
        }, 5)
        .to("#stefpuim .bg", {
            background: "rgb(78,33,76)",
            background: "linear-gradient(0deg, rgba(78,33,76,1) 0%, rgba(13,45,92,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 5)
        .to("#stefpuim .bg", {
            background: "rgb(78,33,76)",
            background: "linear-gradient(0deg, rgba(78,33,76,1) 0%, rgba(176,15,64,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 5.5)
        // 6
        .to("#stefpuim .bg", {
            background: "rgb(182,77,109)",
            background: "linear-gradient(0deg, rgba(182,77,109,1) 0%, rgba(255,193,138,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 6)
        .to("#stefpuim .bg", {
            background: "rgb(236,221,202)",
            background: "linear-gradient(0deg, rgba(236,221,202,1) 0%, rgba(186,226,233,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 6.5)
        // 7
        .to("#stefpuim .bg", {
            background: "rgb(255,255,255)",
            background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(198,239,246,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 7)
        .to("#stefpuim .bg #stars", {
            opacity: "1",
            duration: 3,
            ease: "none"
        }, 18.5)
        .to("#stefpuim .bg", {
            background: "rgb(236,221,202)",
            background: "linear-gradient(0deg, rgba(236,221,202,1) 0%, rgba(186,226,233,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 18.5)
        .to("#stefpuim .bg", {
            background: "rgb(182,77,109)",
            background: "linear-gradient(0deg, rgba(182,77,109,1) 0%, rgba(255,193,138,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 19)
        .to("#stefpuim .bg", {
            background: "rgb(78,33,76)",
            background: "linear-gradient(0deg, rgba(78,33,76,1) 0%, rgba(176,15,64,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 19.5)
        .to("#stefpuim .bg", {
            background: "rgb(78,33,76)",
            background: "linear-gradient(0deg, rgba(78,33,76,1) 0%, rgba(13,45,92,1) 100%)",
            duration: 0.5,
            ease: "none"
        }, 20)
        .to("#stefpuim .bg", {
            background: "rgb(13,45,92)",
            background: "linear-gradient(0deg, rgba(13,45,92,1) 0%, rgba(0,0,0,1) 100%)",
            duration: .5,
            ease: "none"
        }, 20.5)
        // 21
        .to("#stefpuim .bg", {
            background: "rgb(34, 34, 34)",
            background: "linear-gradient(0deg, rgba(13,45,92,0) 100%, rgba(0,0,0,0) 100%)",
            duration: 3,
            ease: "none"
        }, 21)
        .to("#stefpuim .bg #stars", {
            opacity: "0",
            duration: 3,
            ease: "none"
        }, 21)
        .to("#stefpuim .box", {
            borderRadius: 0,
            backgroundColor: "white",
            rotation: 720,
            left: "40vw",
            top: "calc(50vh - 10vw)",
            width: "20vw",
            height: "20vw",
            duration: 3,
            ease: "none"
        }, 21);
    }
}