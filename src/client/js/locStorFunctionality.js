function locStorFunctionality(e) {
    console.log(e.target);
    if (e.target.classList.contains('dyn_del'))
        e.target.parentElement.parentElement.parentElement.remove();
}

export { locStorFunctionality }