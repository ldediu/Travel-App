console.log("Working !");
import './styles/base.scss'
import './styles/comps.scss'
import './styles/header.scss'
import './styles/main.scss'
import './styles/recommends.scss'
import './styles/dynam.scss'
import './styles/footer.scss'

import { locStorFunctionality } from './js/locStorFunctionality.js';
import { main } from './js/main.js';

document.addEventListener('DOMContentLoaded', () => {
    locStorFunctionality();
    document.getElementById('submit').onclick = main;
});

export {
    main
}