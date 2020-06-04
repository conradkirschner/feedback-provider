import { elements } from './elements';
import moveable from './util/moveable';
window.config = {url: "http://localhost:3000"};

moveable(elements.feedbackProvider)
document.body.appendChild(elements.feedbackProvider);