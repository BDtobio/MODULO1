class Activity {
  constructor({ id, title, description, imgUrl }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.currentId = 1;
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity({ title, description, imgUrl }) {
    const newActivity = new Activity({
      id: this.currentId,
      title,
      description,
      imgUrl,
    });

    this.activities.push(newActivity);

    this.currentId++;

    return newActivity;
  }
}

const repository = new Repository();

function createActivity2(activity) {
  const { title, description, imgUrl } = activity;
  const titulo = document.createElement("h3");
  titulo.innerHTML = title;

  const descripcion = document.createElement("p");
  descripcion.innerHTML = description;

  const imagen = document.createElement("img");
  imagen.src = imgUrl;

  const contenedorCard = document.createElement("div");
  contenedorCard.classList.add("activity_card");

  //activity_list

  contenedorCard.append(titulo,descripcion, imagen);
  return contenedorCard;
}

function listado(repository) {
  const activity_list = document.getElementById("activity_list");
  activity_list.innerHTML = "";

  const AllActivities = repository.getAllActivities();

  const ActsElements = AllActivities.map(createActivity2);

  ActsElements.forEach((actElement) => {
    activity_list.appendChild(actElement);
  });
}

function handler(event) {
  event.preventDefault();
  const title = document.getElementById("titulo").value;
  const description = document.getElementById("descripcion").value;
  const imgUrl = document.getElementById("img").value;

  if (title == "" || description == "" || imgUrl == "") {
    alert("Complete el formulario");
    return;
  }

  repository.createActivity({ title, description, imgUrl });


  listado(repository);
}

const loginboton=document.getElementById("boton");
loginboton.addEventListener("click",handler);

