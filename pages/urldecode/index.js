import DecodePage from '../../container/urldecode'
import DecodeService from '../../services/decode_service'

const decodeService = new DecodeService()
const Encode = () => {
    return (
        <DecodePage decodeService={decodeService} />
    )
}

export default Encode;