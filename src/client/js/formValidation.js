export const formValidation = (cur_city, dest_city, dep_time, ret_time, button) => {
    let submit_form_button = document.getElementById('submit');
    submit_form_button.style.color="#eeeeee";
    submit_form_button.innerText = "Send";
    if (!cur_city.match(/[a-zA-Z]+/) || !dest_city.match(/[a-zA-Z]+/))
    {
        submit_form_button.style.color="orange";
        submit_form_button.innerText = "Invalid City";
        return false;
    }
    let total_time = new Date(ret_time) - new Date(dep_time);
    let countdown_time = new Date(dep_time) - new Date();
    let matching = /^(202\d{1})-(\d{1,2})-(\d{1,2})$/g;
    if (!dep_time.match(matching) || !ret_time.match(matching) || total_time < 0 || countdown_time < 0)
    {
        submit_form_button.style.color="orange";
        submit_form_button.innerText = "Invalid Date";
        return false;
    }
    return true;
}