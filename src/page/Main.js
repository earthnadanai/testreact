import Image from '../components/UnsplashImage';
import React, { useState } from 'react'
import axios from 'axios';
import '../index.css';
import '../App.css';

function Main(props) {
    const [imagefind, setImage] = useState();
    const clientId = "hSRLLoas8sVquoRITdA0x2znbka-IMJD8cieZjfEe4M";
    const [result, setResult] = useState([]);
    const handleChange = (event) => {
        setImage(event.target.value);
        const imageurls = "https://api.unsplash.com/search/photos?page=1&query=" +
            imagefind + "&client_id=" + clientId;
        axios.get(imageurls).then((response) => {
            setResult(response.data.results);
        })

    };

    //////////////////////////////////////////////

    return (

        <body>
            <div class="containers">
                <div class="text-box">

                </div>
                <center>
                    

                </center>

                <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                <input type="text" name="image" class="search" onClick={handleChange} placeholder="search" />


                {
                    result.map(image => (

                        <Image image={image} />


                    ))
                }

            </div>

        </body >
    );
}
export default Main;