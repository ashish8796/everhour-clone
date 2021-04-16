import { useSelector } from 'react-redux'
import Bottom from '../Components/Client/Bottom'
import WithoutBottomData from '../Components/Client/WithoutBottomData'
import Mainbox from '../Components/Client/Mainbox'
import Middlebox from '../Components/Client/Middlebox'
import MainPageNav from "../Components/MainpageNavbar/MainpageNav"

const Client = () => {
    const client = useSelector(state => state.client.client)
    console.log(client)
    return (
        <div>
            <MainPageNav/>
            <Mainbox />
            <Middlebox/>
            {
                client.length === 0 ? <WithoutBottomData/> : <Bottom/>
            }
        </div>
    )
}

export default Client
