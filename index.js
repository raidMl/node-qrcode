const qr = require("qrcode")
let data = {
    name:
        "khaba ba",
    email:
        "khababa@gmdf.com"
}
let stJson = JSON.stringify(data)
qr.toString(stJson, { type: "terminal" }, function (error, code) {
    if (error)
        return console.log(error)
    console.log(code)

})