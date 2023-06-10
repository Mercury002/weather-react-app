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
            <div>
                <b>{determineWeekday(dailyForecast.date)}</b>
                <img src={dailyForecast.day.condition.icon} alt="" />

                <div>
                    <span>{dailyForecast.day.mintemp_c}°</span> 
                    <span>{dailyForecast.day.maxtemp_c}°</span>
                </div>
            </div>
        )

}


export default ForecastDaily