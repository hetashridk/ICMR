import GoogleImg from '../../assets/Google_Icon.png';
import { useEffect } from 'react';
import axios from "axios"
const url = import.meta.env.VITE_SERVER;

export default function Google() {

    // const getUser = async () => {
    //     try {
    //         const { data } = await axios.get("http://localhost:3000/login/success",
    //             { withCredentials: true });
    //         console.log(data.user);

    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     getUser();
    // }, [])

    
    const handleClick = ()=>{
        window.open(`${url}/auth/google/callback`, "_self")
    }


    return <>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
            <img src={GoogleImg} alt="Google" />
        </div>
    </>
}