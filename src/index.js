import { helloWorld } from "./helloWorld.js";
import { createImage } from "./addImage";
import { addContent } from "./addContent";
import { AddButton } from "./component/AddButton";

helloWorld();
createImage();
addContent();
new AddButton().render();
