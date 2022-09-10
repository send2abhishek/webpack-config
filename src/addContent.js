import contentText from "./util/helper.txt";

function addContent() {
  const contentContainer = document.querySelector("#content");
  const paragraph = document.createElement("p");
  paragraph.innerHTML = contentText;
  contentContainer.appendChild(paragraph);
}

export { addContent };
