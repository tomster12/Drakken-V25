

import * as p5 from "p5";
import Input from "./utility/Input";


export class Canvas extends p5 {

  in: Input;
  focused: boolean;
  element: HTMLElement;
}