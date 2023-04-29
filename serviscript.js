function ampliarImagen(img) {
    var imagenAmpliada = document.getElementById("imagen-ampliada");
    imagenAmpliada.src = img.src;
    document.getElementById("fondo-modal").style.display = "block";
    document.getElementById("modal").style.display = "block";
  }
  
  function cerrarModal() {
    document.getElementById("fondo-modal").style.display = "none";
    document.getElementById("modal").style.display = "none";
  }
  