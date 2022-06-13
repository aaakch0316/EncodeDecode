let uri = 'https://www.hanpy.com/encode?a=b&b=배고프다'
console.log(encodeURI( uri ))
console.log(encodeURIComponent( uri ))
console.log(decodeURI( uri ))
console.log(decodeURIComponent( uri ))
// console.log(btoa('webisfree'))
// console.log(atob('d2ViaXNmcmVl'))
// console.log(btoa(unescape(encodeURIComponent(uri))))
// console.log(atob('aHR0cHM6Ly93d3cuaGFucHkuY29tL2VuY29kZT9hPWImYj3rsLDqs6DtlITri6Q='))