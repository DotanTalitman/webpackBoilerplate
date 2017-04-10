
import  _ from 'lodash';
import {msg} from "./message";

function component () {
    alert(msg.content);
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');
  element.innerHTML+=msg.content;
  return element;
}

document.body.appendChild(component());