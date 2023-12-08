//whatsapp

window.onload = function () {
  (function (d, script) {
    script = d.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://w.app/widget-v1/OP71mQ.js";
    d.getElementsByTagName("head")[0].appendChild(script);
  })(document);
};

//chat
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/656625011db16644c5558a42/1hgbg1416";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

//accion clima
let boton = document.querySelector(".botonClima");

boton.addEventListener("click", () => {
  let clima = document.querySelector(".contentIframe");
  clima.style.display = "block";
  clima.classList.add("mostrarClima");
  boton.style.display = "none";
});

//formulario

const botonEnviar = document.querySelector(".botonForm");
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
 
});
botonEnviar.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const consulta = document.getElementById("consulta").value;
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validacion = expresionRegular.test(email);

  if (validacion && telefono.trim() !== "" && consulta.trim() !== "") {
    formulario.submit(); 
  } else {
    if (validacion) {
      const alertaEmail = document.querySelector(".emailAlert");
      alertaEmail.style.display = "none";
    } else {
      const alertaEmail = document.querySelector(".emailAlert");
      alertaEmail.style.display = "block";
    }

    if (telefono.trim() !== "") {
      const telefonoAlert = document.querySelector(".telefonoAlert");
      telefonoAlert.style.display = "none";
    } else {
      const telefonoAlert = document.querySelector(".telefonoAlert");
      telefonoAlert.style.display = "block";
    }
    if (consulta.trim() !== "") {
      const consultaAlert = document.querySelector(".consultaAlert");
      consultaAlert.style.display = "none";
      formulario.submit();
    } else {
      const consultaAlert = document.querySelector(".consultaAlert");
      consultaAlert.style.display = "block";
    }
  }
});
