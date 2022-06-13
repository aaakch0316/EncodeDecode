class Decode {
    urldecode(context) {
        return decodeURI(context)
    }
    base64decode(context) {
        return atob(context)
    }
    utf8decode(context) {
        return decodeURIComponent(context)
    }
}

export default Decode