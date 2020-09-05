console.log("Working !");
import './styles/base.scss'
import './styles/comps.scss'
import './styles/header.scss'
import './styles/main.scss'
import './styles/recommends.scss'
import './styles/dynam.scss'
import './styles/footer.scss'

import { main } from './js/main.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Here');
    document.getElementById('submit').onclick = main;
});

export {
    main
}