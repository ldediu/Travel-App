function locStorFunctionality() {

    // Local Storage functionality

    let storedTrips;
    let dyn_container = document.getElementById('dyn_all');
    if (localStorage.getItem("storedTrips") === null) {
        storedTrips = [];
    } else {
        storedTrips = JSON.parse(localStorage.getItem("storedTrips"));
    }
    storedTrips.forEach((eachTrip) => {
        let newCard = document.createElement('div');
        newCard.classList.add('out_cont');
        newCard.classList.add('saved');
        newCard.innerHTML = eachTrip;
        dyn_container.prepend(newCard);
    });

    document.querySelector('.dyn_all').addEventListener("click", (e) => {

        // Delete button functionality

        if (e.target.classList.contains('dyn_del'))
        {
            e.target.parentElement.parentElement.parentElement.classList.remove('saved');
            e.target.parentElement.parentElement.parentElement.remove();
            let savedElems = document.querySelectorAll(".saved");
            localStorage.clear();
            storedTrips = [];
            savedElems.forEach((eachElem) => {
                console.log(eachElem);
                storedTrips.push(eachElem.innerHTML);
            });
            localStorage.setItem("storedTrips", JSON.stringify(storedTrips));
        }

        // Save button functionality

        if (e.target.classList.contains('dyn_save'))
        {
            console.log(e.target.parentElement.parentElement.parentElement);
            e.target.parentElement.parentElement.parentElement.classList.add('saved');
            let savedElems = document.querySelectorAll(".saved");
            localStorage.clear();
            storedTrips = [];
            savedElems.forEach((eachElem) => {
                console.log(eachElem);
                storedTrips.unshift(eachElem.innerHTML);
            });
            localStorage.setItem("storedTrips", JSON.stringify(storedTrips));
        }
    });
}

export { locStorFunctionality }