import { useEffect, useState } from 'react';
import ForecastDaily from '../forecast';
import './styles.css'

const Mainblock = () => {
    const [countryName, setCountryName] = useState('')
    const [weatherObj, setWeatherObj] = useState({})

    useEffect(() => {
        setCountryName(Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1]);

        if (countryName) {
            fetch(`http://api.weatherapi.com/v1/forecast.json?key=3db22371347c4f25a6982136230506&q=${countryName}&days=7`)
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        throw new Error('Request failed with status' + response.status)
                    }
                })
                .then(data => {
                    console.log(data);
                    setWeatherObj(data)
                })
                .catch(err => {
                    console.log(err)
                });

        }

    }, [countryName]);

    return (
        <div className='weather'>
            <div className='weather__head'>
                <h3 className='weather__head--title'>Результаты для города {countryName}</h3>
                <strong className='weather__head--date'>{weatherObj.current && new Date(weatherObj.current.last_updated).toLocaleDateString()}</strong>
            </div>

            <div className='weather__day'>
                <span className='weather__day--pic'>
                    <img src={weatherObj.current && weatherObj.current.condition.icon} alt="" />
                </span>
                <b>{weatherObj.current && weatherObj.current.temp_c} °C</b>
                <div className='weather__day--info'>
                    <span>Вероятность осадков: {weatherObj.current && weatherObj.current.cloud}%</span>
                    <span>Влажность: {weatherObj.current && weatherObj.current.humidity}%</span>
                    <span>Ветер: {weatherObj.current && weatherObj.current.wind_kph}%</span>
                </div>
            </div>
            <div className='weather__forecast'>
                {
                    weatherObj.forecast && weatherObj.forecast.forecastday.length > 0 
                    ? weatherObj.forecast.forecastday.map(item => <ForecastDaily dailyForecast={item} key={item.date}></ForecastDaily>) 
                    : null
                }
            </div>
        </div>
    )
}
export default Mainblock;