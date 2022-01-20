import './styles/base.scss'
import './styles/navi.scss'
import './styles/topic.scss'
import './styles/lesson.scss'
import './styles/index.scss'

//Add sidebar template to the startpage.html
//addSidebarTemplate();

const toggleButton = document.getElementById('toggle-btn')
const naviItems = document.getElementsByClassName('navi-items')[0]

toggleButton.addEventListener('click', ()=> {
    naviItems.classList.toggle('active')
}
)
