import { updateUI } from './updateUI';

async function main(event) {
    event.preventDefault();

    let current_city = document.getElementById('curr_place');
    let destination_city = document.getElementById('destination').value;
    let dep_time = document.getElementById('date_from').value;
    let ret_time = document.getElementById('date_return').value;
    let dyn_cont = document.getElementById('dyn_all');

    let newCard;

    const api_response = await fetch("/results", {
        method: "POST",
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({destination: destination_city,
                                    departure_time: dep_time,
                                    return_time: ret_time})
    });
    try {
        const data = await api_response.json();
        console.log('client = ', data);
        newCard = updateUI(data);
        dyn_cont.appendChild(newCard);
    } catch (error) {
        console.log('error', error);
    }
}

export { main }