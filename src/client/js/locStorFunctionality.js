function locStorFunctionality() {
    let storedTrips;
    let dyn_container = document.getElementById('dyn_all');
    if (localStorage.getItem("storedTrips") === null) {
        storedTrips = [];
    } else {
        storedTrips = JSON.parse(localStorage.getItem("storedTrips"));
    }
    storedTrips.forEach((eachTrip) => {
        dyn_container.prepend(eachTrip);
    });

    document.querySelector('.dyn_all').addEventListener("click", (e) => {
        if (e.target.classList.contains('dyn_del'))
        {
            e.target.parentElement.parentElement.parentElement.classList.remove('saved');
            e.target.parentElement.parentElement.parentElement.remove();
            let savedElems = document.querySelectorAll(".saved");
            savedElems.forEach((eachElem) => {
                console.log(eachElem);
                storedTrips = [];
                storedTrips.push(eachElem);
                localStorage.setItem("storedTrips", JSON.stringify(storedTrips));
            });
        }

        if (e.target.classList.contains('dyn_save'))
        {
            console.log(e.target.parentElement.parentElement.parentElement);
            e.target.parentElement.parentElement.parentElement.classList.add('saved');
            let savedElems = document.querySelectorAll(".saved");
            savedElems.forEach((eachElem) => {
                console.log(eachElem);
                storedTrips = [];
                storedTrips.push(eachElem);
                localStorage.setItem("storedTrips", JSON.stringify(storedTrips));
            });
        }

    });
}

export { locStorFunctionality }