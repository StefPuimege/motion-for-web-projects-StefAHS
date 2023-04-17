console.log('app.js loaded');

/* 
gsap.to('h1', {duration: 1, x: 300, y: 200, rotation: 360});
gsap.to('.box', {duration: .5, x: 300, y: 200, rotation: 360, delay: 1});

gsap.from('li', {duration: .5, x: "-300px", opacity: 0, stagger: .5});
*/

let timeline = gsap.timeline({repeat: -1, yoyo: true});

timeline.to('h1', {duration: 1, x: 300, y: 200, rotation: 360});
timeline.to('.box', {duration: .5, x: 300, y: 200, rotation: 360, backgroundColor: "red", ease: "back"}); // backgroundColor (in camelCase) instead of background-color

timeline.from('li', {duration: .5, x: "-300px", opacity: 0, stagger: .5});