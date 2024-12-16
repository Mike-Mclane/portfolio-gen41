import parallax from './Components/parallax.js';
import activeMenu from './Components/selected_menu.js';
import updateCopyRightYear from './Helpers/date_updater.js';
import loader from './Helpers/loader.js';
import resetToHome from './Helpers/reload_page.js';
import sendEmail from './Helpers/send_form.js';

loader();
resetToHome();
parallax();
activeMenu();
updateCopyRightYear();
sendEmail();
