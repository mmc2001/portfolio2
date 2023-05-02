/* const nodemailer = require("nodemailer");

// Configuración de nodemailer
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "moisesmoyanoc@gmail.com",
    pass: "contraseña_del_correo_de_origen",
  },
});

// Función para enviar el correo electrónico
const sendMail = async (data) => {
  try {
    await transporter.sendMail({
      from: "moisesmoyanoc@gmail.com",
      to: data.email,
      subject: "Nuevo mensaje de ${data.name} (${data.email})",
      html: `<p>Nombre: ${data.name}</p>
             <p>Apellidos: ${data.apellidos}</p>
             <p>Correo electrónico: ${data.email}</p>
             <p>Asunto: ${data.asunto}</p>
             <p>Mensaje: ${data.mensaje}</p>`,
    });
    console.log("Correo electrónico enviado");
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendMail;
 */