(() => {
  // El Objeto avion (se va a copiar tantas veces como sea necesario) le declaro una propiedad estado
  // que puede estar abierto o cerrado
  // y una propiedad asientos que es un array bidimensional de asientos que pueden estar libres u ocupados
  let AVION = {
    estado: "abierto",
    asientos: [
      ["libre", "libre", "libre", "libre"],
      ["libre", "libre", "libre", "libre"],
      ["libre", "libre", "libre", "libre"],
      ["libre", "libre", "libre", "libre"],
      ["libre", "libre", "libre", "libre"],
      ["libre", "libre", "libre", "libre"],
    ],
  };

  // Array de aviones
  let flotaAviones = [JSON.parse(JSON.stringify(AVION))]; //parse y stringify es para hacer una copia del avion y evitar una referencia

  const CANT_AVIONES = 10; // Cantidad de aviones de la flota
  let avionActual = 0; // avion en el que me posiciono
  let filaActual = 0; // fila en la que me posiciono
  let columnaActual = 0; //columna en el que me posiciono

  // sirve para posicionarse en el asiento a ocupar
  function asiento(fila, columna) {
    filaActual = fila;
    columnaActual = columna;
  }

  // agrega un pasajero
  function agregarPasajero() {
    let asiento = flotaAviones[avionActual].asientos[filaActual][columnaActual];
    if (asiento === "ocupado") {
      console.log("El asiento esta ocupado");
    } else {
      flotaAviones[avionActual].asientos[filaActual][columnaActual] = "ocupado";
      proximoAsiento();
    }
  }

  // va al proximo asiento de la fila y si esta completa sigue a la proxima fila
  function proximoAsiento() {
    if (!filaCompleta()) {
      columnaActual++;
    } else {
      proximaFila();
    }
  }

  // si la fila esta completa devuelve un booleano true
  function filaCompleta() {
    return (
      flotaAviones[avionActual].asientos[filaActual].length ===
      columnaActual + 1
    );
  }

  // va a la próxima fila y a la primer columna
  function proximaFila() {
    filaActual++;
    columnaActual = 0;
  }

  // asigna cerrado a la propiedad estado
  function cerrarAvion() {
    flotaAviones[avionActual].estado = "cerrado";
  }

  // asigna un nuevo avion a la flota
  function nuevoAvion() {
    if (avionActual < CANT_AVIONES) {
      flotaAviones.push(JSON.parse(JSON.stringify(AVION))); // creo una copia del objeto avion
      avionActual++;
    } else {
      console.log("No hay mas aviones disponibles");
    }
  }

  /*::::::::::::: PRUEBA :::::::::::::::*/
  //lleno el primer avion
  for (let i = 0; i < 24; i++) {
    agregarPasajero();
  }
  //lo cierro y abro uno nuevo
  cerrarAvion();
  nuevoAvion();

  //Asi hasta completar la cantidad maxima de aviones

  console.log(JSON.stringify(flotaAviones));
})(); // IIFE
