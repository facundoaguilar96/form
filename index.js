function main() {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const formData = new FormData(evento.target);
    const objeto = Object.fromEntries(formData.entries());

    objeto["anime-box"] = formData.getAll("anime-box");
    console.log(objeto);

    if ((objeto.selec.value = "op2")) {
      location.href = "./pagina2.html";
    } else if ((objeto.selec.value = "op3")) {
      location.href = "./pagina3.html";
    } else if ((objeto.selec.value = "op4")) {
      location.href = "./pagina4.html";
    } else if ((objeto.selec.value = "op1")) {
      location.href = "./pagina5.html";
    }
  });
}

main();
