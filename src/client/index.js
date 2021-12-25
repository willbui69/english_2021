import { checkUserCreds } from './js/handleUserCredentials';
import { signOut } from './js/UserLogoutFromGoogle';
import './styles/index.scss'
import google from './media/google.png'
import background from './media/background.png'

document.getElementById('loginBtn').addEventListener('click', checkUserCreds);
document.getElementById('signOutBtn').addEventListener('click',signOut);

export {
    checkUserCreds,
    signOut
}
