export const updateUI = (data) => {
    let newCard = document.createElement('div');
    newCard.classList.add('out_cont');
    newCard.innerHTML = `
                        <div class="dyn_pic"></div>
                        <div class="dyn_info">
                            <div class="dyn_general_name">
                                <span class="dyn_city">Boston,</span>
                                <span class="dyn_country">United States</span>
                                <span class="dyn_flag"></span>
                            </div>
                            <div class="dyn_weather">Weather: &nbsp;&nbsp;&nbsp;&nbsp;60&deg;F - Few clouds</div>
                            <hr>
                            <div class="dyn_about">
                                <div class="dyn_capital">Capital: &nbsp;&nbsp;&nbsp;&nbsp;Washington</div>
                                <div class="dyn_popul">Population: &nbsp;&nbsp;&nbsp;&nbsp;10000000</div>
                                <div class="dyn_langs">Language: &nbsp;&nbsp;&nbsp;&nbsp;English</div>
                                <div class="dyn_currenc">Currency: &nbsp;&nbsp;&nbsp;&nbsp;US Dollar</div>
                            </div>
                            <hr>
                            <div class="dyn_starting">Your 10 days trip from Miami to Boston will start in 10 days !</div>
                            <div class="dyn_dates">Dates: 10.10.2020 - 10.20.2020</div>

                            <div class="dyn_but">
                                <a class="dyn_save" href="#"></a>
                                <a class="dyn_del" href="#"></a>
                            </div>
                        </div>`
    return newCard;
}