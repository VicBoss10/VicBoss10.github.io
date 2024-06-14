let balls = [];
let primeraBolaCreada = false;
let orbitandoTextoVisible = false;
let contadorOrbita = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220, 20); // Fondo con baja opacidad para crear el efecto de estela

  // Llamar a la función para eliminar bolas con una probabilidad baja
  if (random() < 0.001) {
    eliminarBolaAleatoria();
  }

  if (balls.length == 1) {
    mostrarTexto("Una vida"); // Mostrar texto cuando aparece la primera bola
  }

  // if (balls.length == 2) {
  //   mostrarTexto("Una vida"); // Mostrar texto cuando aparece la primera bola
  //   // primeraBola = balls[1]; // Almacenar la primera bola creada
  //   // primeraBola.x = -2;
  //   // primeraBola.y = height/2;
  //   // primeraBola.xSpeed = 3;
  //   // primeraBola.ySpeed = 0;

  // }
  // if(contadorOrbita>1){
  //   primeraBola.xSpeed = 3;
  //   primeraBola.ySpeed = 3;
  // }
  if (orbitandoTextoVisible && (contadorOrbita == 1)) {
    mostrarTexto("Dos caminos que se cruzan");
  }

  if (balls.length == 2) {
    primeraBolaCreada = true;
  }

  if (contadorOrbita == 2) {
    mostrarTexto("¿Casualidad?");
  }
  for (let ball of balls) {
    ball.move();
    ball.checkCollision(balls);
    ball.display();
    ball.updateTrail();
  }

  // Llamar a la función para agregar bolas en intervalos de tiempo aleatorios
  if (frameCount % floor(300) === 0) {
    if (balls.length < 8) {
      agregarBolaAleatoria();
    }
  }
}

function mostrarTexto(mensaje) {
  fill(0, 255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(mensaje, width / 2, height / 2);
}

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.opacity = 20; // Opacidad inicial
    this.fadeSpeed = 2; // Velocidad de desvanecimiento
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.color = color(random(255), random(255), random(255));
    this.orbiting = false;
    this.orbitCenter = null;
    this.orbitAngle = 0;
    this.orbitStartTime = 0;
    if (contadorOrbita == 0) {
      this.orbitDuration = 3000; // Duración del orbitado en milisegundos
    }
    else {
      this.orbitDuration = 1000 * random(10); // Duración del orbitado en milisegundos
    }
    this.trail = [];
  }

  move() {
    if (!this.orbiting) {
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      if (this.x+20 > (width) || this.x-20 < 0) {
        this.xSpeed *= -1;
      }
      if (this.y+20 > (height) || this.y-20 < 0) {
        this.ySpeed *= -1;
      }
    } else {
      let currentTime = millis();
      if (currentTime - this.orbitStartTime > this.orbitDuration) {
        this.orbiting = false;
        // Separación de las bolas con velocidades opuestas
        let angle = random(TWO_PI);
        this.xSpeed = 2 * cos(angle);
        this.ySpeed = 2 * sin(angle);

        this.primeraVezOrbitando = false; // Marcar que ya no está orbitando por primera vez
        orbitandoTextoVisible = false; // Ocultar el texto de orbitando
      } else {
        this.x = this.orbitCenter.x + cos(this.orbitAngle) * (this.orbitCenter.distance / 2);
        this.y = this.orbitCenter.y + sin(this.orbitAngle) * (this.orbitCenter.distance);
        this.orbitAngle += 0.05;
      }
    }
    this.addTrail();
  }

  checkCollision(balls) {
    for (let other of balls) {
      if (other !== this && !this.orbiting && !other.orbiting) {
        let d = dist(this.x, this.y, other.x, other.y);
        if (d < this.r + other.r) {
          this.orbiting = true;
          other.orbiting = true;
          this.orbitCenter = { x: (this.x + other.x) / 2, y: (this.y + other.y) / 2, distance: d };
          other.orbitCenter = this.orbitCenter;
          this.orbitAngle = atan2(this.y - this.orbitCenter.y, this.x - this.orbitCenter.x);
          other.orbitAngle = atan2(other.y - this.orbitCenter.y, other.x - this.orbitCenter.x);
          this.orbitStartTime = millis();
          other.orbitStartTime = this.orbitStartTime;
          this.xSpeed = 0;
          this.ySpeed = 0;
          other.xSpeed = 0;
          other.ySpeed = 0;
          contadorOrbita += 1;
          // Si es la primera vez que orbitan, mostrar el texto
          if (!this.primeraVezOrbitando && !other.primeraVezOrbitando) {
            this.primeraVezOrbitando = true;
            other.primeraVezOrbitando = true;
            orbitandoTextoVisible = true; // Mostrar el texto de orbitando
          }
        }
      }
    }
  }

  addTrail() {
    this.trail.push(new Trail(this.x, this.y, this.color));
    if (this.trail.length > 50) {
      this.trail.shift();
    }
  }

  updateTrail() {
    for (let t of this.trail) {
      t.update();
      t.display();
    }
  }

  display() {
    noStroke();
    // Sombra
    fill(0, 50);
    ellipse(this.x + this.r * 0.1, this.y + this.r * 0.1, this.r * 2.2, this.r * 2.2);

    // Cuerpo de la bola con borde
    //fill(this.color);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y, this.r * 2);

    // Brillo
    noStroke();
    fill(255, 150);
    ellipse(this.x - this.r * 0.3, this.y - this.r * 0.3, this.r);
  }
}

class Trail {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.alpha = 20;
    this.color = color;
  }

  update() {
    this.alpha -= 5;
  }

  display() {
    fill(red(this.color), green(this.color), blue(this.color), this.alpha);
    noStroke();
    ellipse(this.x, this.y, 6, 6);
  }
}

function eliminarBolaAleatoria() {
  if (balls.length > 5) {
    let index = floor(random(balls.length));
    let bolaEliminada = balls.splice(index, 1)[0];

    // Desactivar el orbitado para cualquier bola que esté orbitando con la bola eliminada
    for (let ball of balls) {
      if (ball.orbiting && ball.orbitCenter === bolaEliminada.orbitCenter) {
        ball.orbiting = false;
        ball.xSpeed = random(-5, 5);
        ball.ySpeed = random(-5, 5);
      }
    }
  }
}

function agregarBolaAleatoria() {
  let nuevaBola = new Ball(random(width), random(height), 10);
  balls.push(nuevaBola);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
