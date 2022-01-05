import React, {useEffect} from 'react'
import axios from 'axios'


const pinata_api_key = process.env.REACT_APP_PINATA_KEY
const pinata_secret_api_key = process.env.REACT_APP_PINATA_API_SECRET
// headers: {
//     pinata_api_key: pinata_api_key,
//     pinata_secret_api_key: pinata_secret_api_key
// }

export default function AboutMe() {
    useEffect(() => {
        // console.log(pinata_api_key)
        // axios.get('https://gateway.pinata.cloud/ipfs/QmeQeYFN2dtMfSqqaBPnTZqjjpesPG8hJtmyz5nKvzUY4x',{
        // axios.get('https://risidio.mypinata.cloud/ipfs/QmXXDoy3M9TRdv2x5sQddhwvdbVJRbu8eHGiYBaxUQ9d3j/nft-0.json',{
        // }).then(function (response) {
        //     console.log(response)
        // }).catch(function (error) {
        //     console.log(error)
        // })
    },[])

    return (
        <div className = "aboutMe">
            <div className = "aboutMeContainer">

            </div>
        </div>
    )
}
