const options = {
  name: "Link Triangles",
  particles: {
    number: {
      value: 80,
      density: {
        enable: true
      }
    },
    color: {
      value: "#4776e2",
      animation: {
        enable: true,
        speed: 4,
        sync: true
      }
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: {
        min: 1,
        max: 3
      }
    },
    links: {
      enable: true,
      distance: 150,
      color: "#2b94f4",
      opacity: 0.4,
      width: 1,
      triangles: {
        enable: true,
        opacity: 0.1
      }
    },
    move: {
      enable: true,
      speed: 3
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onHover: {
        enable: true,
        mode: "repulse"
      },
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        distance: 400,
        links: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8
      },
      repulse: {
        distance: 200
      },
      push: {
        quantity: 4
      },
      remove: {
        quantity: 2
      }
    }
  },
  background: {
    color: "#0d1117"
  }
};

export default options;
