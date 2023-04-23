const qr = require("qrcode")
let data = {
    name:
        "khaba ba",
    email:
        "khababa@gmdf.com"
}
let stJson = JSON.stringify(data)
// qr.toString(stJson, { type: "terminal" }, function (error, code) {
//     if (error)
//         return console.log(error)
//     console.log(code)

// })

//________________________USING DATA URL
// qr.toDataURL(stJson, function (error, code) {
//     if (error)
//         return console.log(error)
//     console.log(code)

// })

// ++++++++++++++++++USING FILE IMG++++++++++++


qr.toFile("./images/img.png",stJson, function (error) {
    if (error)
        return console.log(error)

})
