
import GoogleImg from '../../assets/Google_Icon.png'
const url = import.meta.env.VITE_SERVER;



const handleClick = ()=>{
    window.open(`${url}/auth/google/callback`, "_self")
}


export default function GoogleSI() {
    return (
        <div onClick={handleClick}  className='webimg' style={{cursor : "pointer"}}>
            <img src={GoogleImg} alt="Google" />
        </div>
    )
}