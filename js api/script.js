window.addEventListener("load", () => {
  let lon;
  let lat;
  let hr = new Date();
  let reloj = hr.getHours();
  console.log(reloj);

  let tempValor = document.getElementById("tempValor");
  let tempDescrip = document.getElementById("tempDescrip");

  let ubicacion = document.getElementById("ubicacion");
  let icono = document.getElementById("icono");

  let velocidadViento = document.getElementById("vientoVelocidad");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      lon = posicion.coords.longitude;
      lat = posicion.coords.latitude;

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=242b3e2e5181c8534c987d6308d391e0

        `;

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //temperatura
          let temperatura = Math.round(data.main.temp);
          tempValor.textContent = `${temperatura}°C`;

          // caracteristica del estado del tiempo
          let descripcion = data.weather[0].description;
          console.log(descripcion);
          let descripcion1 =
            descripcion.charAt(0).toUpperCase() + descripcion.slice(1);
          tempDescrip.textContent = descripcion1;

          //ubicacion
          let nombre = data.name;
          ubicacion.textContent = nombre;

          //velocidad del viento
          let vientoMs = data.wind.speed;
          let vientoKmh = Math.round(vientoMs * 3.6);
          velocidadViento.textContent = `${vientoKmh}km/h`;

          switch (data.weather[0].description) {
            case "nubes":
              if (reloj >= 8 && reloj < 20) {
                icono.src = "/svg/cloudy-day-3.svg";
              } else {
                icono.src = "/svg/cloudy-night-3.svg";
              }
              break;
            case "nubes dispersas":
              if (reloj >= 8 && reloj < 20) {
                icono.src = "/svg/cloudy-day-3.svg";
              } else {
                icono.src = "/svg/cloudy-night-3.svg";
              }
              break;
            case "pocas nubes":
              if (reloj >= 8 && reloj < 20) {
                icono.src = "/svg/cloudy-day-3.svg";
              } else {
                icono.src = "/svg/cloudy-night-3.svg";
              }
              break;
            case "nubes rotas":
              if (reloj >= 8 && reloj < 20) {
                icono.src = "/svg/cloudy-day-3.svg";
              } else {
                icono.src = "/svg/cloudy-night-3.svg";
              }
              break;

            case "tormenta":
              icono.src = "/svg/thunder.svg";

              break;

            case "llovizna":
              icono.src = "/svg/rainy-4.svg";

              break;
            case "aguacero":
              icono.src = "/svg/rainy-4.svg";

              break;

            case "lluvia":
              icono.src = "/svg/rainy-7.svg";

              break;

            case "nieve":
              icono.src = "/svg/snowy-6.svg";

              break;

            case "neblina":
              icono.src = "/svg/snowy-4.svg";

              break;

            case "bruma":
              icono.src = "/svg/rainy-5";

              break;

            case "chubasco":
              icono.src = "/svg/rainy-5";

              break;

            case "soleado":
              if (reloj >= 8 && reloj < 20) {
                icono.src = "/svg/day.svg";
              } else {
                icono.src = "/svg/night.svg";
              }
              break;
            case "despejado":
              if (reloj >= 8 && reloj < 20) {
                icono.src = "/svg/day.svg";
              } else {
                icono.src = "/svg/night.svg";
              }
              break;
            case "cielo claro":
              if (reloj >= 8 && reloj < 20) {
                icono.src = "/svg/day.svg";
              } else {
                icono.src = "/svg/night.svg";
              }
              break;
            case "cielo limpio":
              if (reloj >= 8 && reloj < 20) {
                icono.src = "/svg/day.svg";
              } else {
                icono.src = "/svg/night.svg";
              }
              break;
          }
        })
        .catch((error) => {
          console.error("No es posible conectar");
        });
    });
  }
});
