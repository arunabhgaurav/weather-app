import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1691848746386-d5de9f5c05a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1567688993206-43c34131b21f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55fGVufDB8fDB8fHww";

    return(
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 30 ? HOT_URL : info.temp >= 19 && info.temp <=30 ? INIT_URL : COLD_URL}
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 30 ? <SunnyIcon/> : info.temp >= 19 && info.temp <=30 ? <SunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
             <div>Temperature = {info.temp}&deg;C</div>
             <div>Humidity = {info.humidity}</div>
             <div>Minimum Temp = {info.tempMin}&deg;</div>
             <div>Maximum Temp = {info.tempMax}&deg;</div>
             <div>The weather can be described as "{info.weather}" and feels like {info.feelsLike}&deg;</div>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}