
function Persona(nombre, nacimiento) {
  if (!(this instanceof Persona)) {
    return new Persona(nombre)
  }
  this.nombre = nombre || ""
  this.nacimiento = nacimiento
}

Persona.prototype.saludar = function() {
  console.log("Hola mi nombre es " + this.nombre)
};

// ES 2015 Classes
function Estudiante(nombre, nacimiento, amigos) {
  if (!(this instanceof Estudiante)) {
    return new Estudiante(nombre, nacimiento)
  }

  Persona.call(this, nombre, nacimiento)
  this.amigos = amigos || [] // default parameter value
}

Estudiante.prototype = new Persona()

Estudiante.prototype.listarAmigos = function() {
  var _this = this
  // Arrow function
  this.amigos.forEach(function(amigo) {
    console.log(_this.nombre + " es amigo de " + amigo)
  })
}

Estudiante.prototype.agregarAmigos = function() {
  var amigos = Array.prototype.slice.call(arguments);
  var _this = this
  amigos.forEach(function(amigo) {
    _this.amigos.push(amigo)
  })
}

Estudiante.prototype.listarCursos = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var cursos = [
        "Fundamentos de JavaScript",
        "JavaScript Definitivo",
        "JavaScript y jQuery",
        "Node.js"
      ]
      resolve(cursos)
    }, 2000)
  })
}

Persona.prototype.edad = function() {
  var ageDifMs = Date.now() - this.nacimiento.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  var edad = Math.abs(ageDate.getUTCFullYear() - 1970);
  return { edad: edad }
}

// const
var sacha = new Estudiante("Sacha", new Date(1990, 7, 12), [ "Alan", "Dario", "Martin" ])

var edad = sacha.edad().edad
console.log(sacha.nombre + " tiene " + edad + " años")


