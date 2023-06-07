import './styles.css'

const ForecastDaily = (props) => {
    const {dailyForecast} = props;
    console.log(dailyForecast);

    <div>{dailyForecast.date}</div>
    // <div>
    //     <img src={weatherObj.forecast.forecastday[1].day.condition.icon} alt="" />
    //     <b>{(new Date(weatherObj.forecast.forecastday[1].date)).toLocaleDateString()}</b>

    //     <div>
    //         <span>{weatherObj.forecast.forecastday[1].day.maxtemp_c}°</span> 
    //         <span>{weatherObj.forecast.forecastday[1].day.mintemp_c}°</span>
    //     </div>
    // </div>
}


export default ForecastDaily