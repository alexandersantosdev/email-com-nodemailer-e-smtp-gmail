const fs = require('fs');
const nodemailer = require('nodemailer');
require('dotenv').config()

const lista_csv = fs.readFileSync(__dirname + '/lista_emails.csv', 'utf-8')

const lista = lista_csv.split(/\r?\n|\r/g)

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
})

const attachments_list = fs.readdirSync(__dirname + '/attachments')

const attachments = attachments_list.map(attachment => {
    return {
        filename: attachment,
        path: `./attachments/${attachment}`
    }
})

for (contato of lista) {

    let [nome, email] = contato.split(',')
    let subject = 'Email de teste'
    let text = fs.readFileSync(__dirname + '/message.txt', 'utf-8').replace('${nome}', nome)

    const mailOptions = {
        from: process.env.USER,
        to: `${email}`,
        subject,
        text,
        attachments
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(`Email enviado com sucesso para ${nome} `)
        }
    })

}

