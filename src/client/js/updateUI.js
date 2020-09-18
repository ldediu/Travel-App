export const updateUI = (data) => {
    let total_time = (new Date(data.ret_date) - new Date(data.dep_date)) / 1000 / 60 / 60 / 24;
    let countdown_time = Math.ceil((new Date(data.dep_date) - new Date()) / 1000 / 60 / 60 / 24);
    let newCard = document.createElement('div');
    newCard.classList.add('out_cont');
    newCard.innerHTML = `
                        <div class="dyn_pic"><img src="${data.pict}" alt="location-img" crossorigin="anonymous" object-fit="cover" width="100%" height="100%"; "/></div>
                        <div class="dyn_info">
                            <div class="dyn_general_name">
                                <span class="dyn_city">${data.dest_name},</span>
                                <span class="dyn_country">${data.country_name}</span>
                                <span class="dyn_flag" style="background: url(${data.flag});background-size: cover;background-position: center;background-repeat: no-repeat;"></span>
                            </div>
                            <div class="dyn_weather">Weather: &nbsp;&nbsp;${data.weather_temp}&deg;F - ${data.weather_descr}</div>
                            <hr>
                            <div class="dyn_about">
                                <div class="dyn_capital">Capital: &nbsp;&nbsp;&nbsp;&nbsp;${data.capital}</div>
                                <div class="dyn_popul">Population: &nbsp;&nbsp;&nbsp;&nbsp;${data.population}</div>
                                <div class="dyn_langs">Language: &nbsp;&nbsp;&nbsp;&nbsp;${data.lang}</div>
                                <div class="dyn_currenc">Currency: &nbsp;&nbsp;&nbsp;&nbsp;${data.currency}</div>
                            </div>
                            <hr>
                            <div class="dyn_starting">Your ${total_time} days trip from <span style="text-transform: capitalize;">${data.curr_city}</span> to ${data.dest_name} will start in ${countdown_time} days !</div>
                            <div class="dyn_dates">Dates: &nbsp;&nbsp;${data.dep_date} &nbsp;-&nbsp; ${data.ret_date}</div>

                            <div class="dyn_but">
                                <a class="dyn_save" href="#"></a>
                                <a class="dyn_del" href="#"></a>
                            </div>
                        </div>`
    return newCard;
}