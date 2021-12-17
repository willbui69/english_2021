import { addSidebarTemplate } from './js/sidebarTemplate.js';
import { fixNaviBar } from './js/horizonBarFixed.js';
import { toTheTop } from './js/scrollToTopButton.js';
import './styles/base.scss'
import './styles/navi.scss'
import './styles/week_notes.scss'
import './styles/lesson.scss'

//Add sidebar template to the index.html
addSidebarTemplate();
document.addEventListener('DOMContentLoaded', toTheTop);

export {
    addSidebarTemplate,
    fixNaviBar,
    toTheTop
}