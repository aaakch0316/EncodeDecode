import EncodePage from '../../container/urlencode'
import EncodeService from '../../services/encode_service'

const encodeService = new EncodeService()
const Encode = () => {
    return (
        <EncodePage encodeService={encodeService} />
    )
}

export default Encode;