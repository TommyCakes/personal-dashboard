import Moment from 'moment';
import countryFlagEmoji from "country-flag-emoji";

const getTimeOfDay = () => {
    let hour  = Moment().get('hour');
    
    if (hour >= 6) {
        return 'this evening';
    }

    return 'today';
}

const getCountryFlag = (country) => {
    return countryFlagEmoji.get(country).emoji;
}

export {
    getTimeOfDay,
    getCountryFlag,
}