import "./addButton.css";

class AddButton {
  render() {
    const otherContainer = document.querySelector("#other");
    const button = this.createElement("button");
    button.innerHTML = "click me";
    button.classList.add("btn");
    button.onclick = () => {
      const para = this.createElement("p");
      para.innerHTML = "you clicked";
      para.classList.add("para");
      otherContainer.appendChild(para);
    };
    otherContainer.appendChild(button);
  }
  createElement(elementName) {
    return document.createElement(elementName);
  }
}

export { AddButton };
