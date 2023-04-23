const qr = require("qrcode")
// let data = {
//    link:"localhost:5000/"
//     email:
//         "khababa@gmdf.com"
// }

// let stJson = JSON.stringify(data)

const id = "64246ca39549b99c5d1bcf1e"
data = "http://localhost:5000/user/" + id

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


qr.toFile("./images/img1.png", data, function (error) {
    if (error)
        return console.log(error)

})
