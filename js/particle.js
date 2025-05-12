 particlesJS("particles-js", {
         background: {
        color: "#000000"
      },
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.5,
          random: true
        },
        size: {
          value: 3,
          random: true
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          outModes: {
            default: "bounce"
          }
        },
        links: {
          enable: true,
          distance: 100,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble"
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 150,
            size: 8,
            duration: 2,
            opacity: 1,
            color: {
              value: "#00ffff"
            }
          }
        }
      },
      retina_detect: true
    });