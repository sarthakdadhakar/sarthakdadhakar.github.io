import { Component } from '@angular/core';
declare var particlesJS:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'githubio-sarthak';

  ngOnInit(){
    var getDispl = localStorage.getItem("particles");
    if(getDispl == null){
      var particles = true;
      localStorage.setItem("particles",'true');
      getDispl = localStorage.getItem("particles");
    }

    if(getDispl != 'false'){
      var value = 20;
      var linkWidth = 1.5;
      var dotRad = 5;
      var linkMax = 200;
      if(window.innerWidth > 900 && (window.innerWidth > window.innerHeight)){
        value = 100;
        linkWidth = 1;
        dotRad = 3;
        linkMax = 150;
      }
      //console.log(value);
      particlesJS(
        "particles-js", {
        "particles": {
        "number": {
        "value": value,
        "density": {
        "enable": false,
        "value_area": 800
        }
        },
        "color": {
          "value": "#00ff69"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 6
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": dotRad,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": linkMax,
          "color": "#00ff2d",
          "opacity": 0.4,
          "width": linkWidth
        },
        "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": true,
        "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
        }
        }
        },
        "interactivity": {
        "detect_on": "window",
        "events": {
        "onhover": {
        "enable": true,
        "mode": "repulse"
        },
        "onclick": {
        "enable": true,
        "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
        },
        "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
        },
        "repulse": {
        "distance": 200,
        "duration": 0.4
        },
        "push": {
        "particles_nb": 4
        },
        "remove": {
        "particles_nb": 2
        }
        }
        },
        "retina_detect": true
      });
  }
}
}