// TODO: Find some sort of logic to group pre-defined ingredients: vegan/vegetarian/meat? or spices/side/main?

export function renderCheckboxes() {
  let preDefined1 = [
    "olive oil",
    "vegetable oil",
    "flour",
    "sugar",
    "salt",
    "rice",
  ];
  let preDefined2 = ["butter", "cheese", "egg", "beef", "chicken", "pork"];

  for (let preDef of preDefined1) {
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = preDef;
    newCheckbox.id = preDef;

    let newLabel = document.createElement("label");
    newLabel.setAttribute("for", preDef);
    newLabel.innerText = preDef;

    document.querySelector(".top12-vegatarian").append(newCheckbox);
    document.querySelector(".top12-vegatarian").append(newLabel);
  }

  for (let preDef of preDefined2) {
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = preDef;
    newCheckbox.id = preDef;

    let newLabel = document.createElement("label");
    newLabel.setAttribute("for", preDef);
    newLabel.innerText = preDef;

    document.querySelector(".top12-meat").append(newCheckbox);
    document.querySelector(".top12-meat").append(newLabel);
  }

  if (document.querySelector("#all")) {
    document.querySelector("#all").addEventListener("click", () => {
      for (let checkbox of document.querySelectorAll("input[type=checkbox]")) {
        if (document.querySelector("#all").checked == true) {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }
      }
    });
  }
}
