import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { nombre, apellidos, email, asunto, mensaje } = req.body;

  const transporter = nodemailer.createTransport({
    service: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "moisesmoyanoc@gmail.com",
      pass: "generar una",
    },
  });

  transporter.verify().then(() => {
    console.log("Listo para mandar emails")
  })

  const mailOptions = {
    from: email,
    to: `moisesmoyanoc@gmail.com, ${email}`,
    subject: asunto,
    text: `${nombre} ${apellidos} ha enviado un mensaje desde el formulario de contacto:\n\n${mensaje}`,
  };
  console.log(nombre, apellidos, email, asunto, mensaje);

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ha ocurrido un error al enviar el correo electrónico" });
  }
}
