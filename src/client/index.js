import { checkUserCreds } from './js/handleUserCredentials';
import './styles/index.scss'
import google from './media/google.png'
import background from './media/background.png'

document.getElementById('loginBtn').addEventListener('click', checkUserCreds);

export {
    checkUserCreds
}
