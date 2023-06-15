import './styles.css'

const ForecastDaily = (props) => {
    const {dailyForecast} = props;
    console.log(dailyForecast);

    function determineWeekday(dateString) {
        const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
        const date = new Date(dateString);
        const day = date.getDay();
        return daysOfWeek[day];
    }

    return(
            <div className='forecast'>
                <b className='forecast__day'>{determineWeekday(dailyForecast.date)}</b>
                <span className='forecast__pic'>
                    <img src={dailyForecast.day.condition.icon} alt="" />
                </span>

                <div className='forecast__weather'>
                    <span className='forecast__weather--sohib forecast__weather--day'>{dailyForecast.day.maxtemp_c}°</span>
                    <span className='forecast__weather--sohib forecast__weather--night'>{dailyForecast.day.mintemp_c}°</span> 
                </div>
            </div>
        )

}


export default ForecastDaily