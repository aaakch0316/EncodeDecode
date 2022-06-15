class EncodeService {
    urlencode(context) {
        return encodeURI(context)
    }
    base64encode(context) {
        try {
            return btoa(context)
        } catch(e) {
            console.error(e)
            return btoa(unescape(encodeURIComponent(context)))
        }
    }
    utf8encode(context) {
        return encodeURIComponent(context)
    }
}

export default EncodeService