$(document).ready(function() {
    $(".content").css("display", "none");
    $(".content").fadeIn(1, function () {

        $(".content").animate({
            opacity: 1
        }, 2500);
    });
});

particlesJS('idHome',

    {
        particles: {
            color: '#fff',
            color_random: false,
            shape: 'circle', // "circle", "edge" or "triangle"
            opacity: {
                opacity: .5,
                anim: {
                    enable: true,
                    speed: 1.5,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: 0.8,
            size_random: true,
            nb: 100,
            line_linked: {
                enable_auto: true,
                distance: 150,
                color: '#fff',
                opacity: .7,
                width: .5,
                condensed_mode: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                }
            },
            anim: {
                enable: true,
                speed: 1
            }
        },
        interactivity: {
            enable: true,
            mouse: {
                distance: 300
            },
            detect_on: 'canvas',
            mode: 'grab',
            line_linked: {
                opacity: .5
            },
            events: {
                onclick: {
                    enable: false,
                    mode: 'push',
                    nb: 4
                },
                onresize: {
                    enable: true,
                    mode: 'out',
                    density_auto: false,
                    density_area: 800
                }
            }
        },
        retina_detect: true
    }
);