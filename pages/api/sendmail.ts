import nodemailer from 'nodemailer';

const SendMail = async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, password } = req.body;
    const transporter: any = nodemailer.createTransport({
      host: 'email-smtp.us-east-1.amazonaws.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const message = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Datos de acceso  `,
      html: ` 
          <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family:arial, 'helvetica neue', helvetica, sans-serif">
          <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta content="telephone=no" name="format-detection">
          <title>Bienvenido a Instituto Gastroclínico</title><!--[if (mso 16)]>
          <style type="text/css">
          a {text-decoration: none;}
          </style>
          <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
          <xml>
          <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <style type="text/css">
          #outlook a {
          padding:0;
          }
          .es-button {
          mso-style-priority:100!important;
          text-decoration:none!important;
          }
          a[x-apple-data-detectors] {
          color:inherit!important;
          text-decoration:none!important;
          font-size:inherit!important;
          font-family:inherit!important;
          font-weight:inherit!important;
          line-height:inherit!important;
          }
          .es-desk-hidden {
          display:none;
          float:left;
          overflow:hidden;
          width:0;
          max-height:0;
          line-height:0;
          mso-hide:all;
          }
          .es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
          background:#56d66b!important;
          }
          .es-button-border:hover {
          border-color:#42d159 #42d159 #42d159 #42d159!important;
          background:#56d66b!important;
          }
          td .es-button-border:hover a.es-button-1 {
          background:#381ac0!important;
          }
          @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120% } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important; text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:24px!important; text-align:left } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important; text-align:left } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:14px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:inline-block!important } a.es-button, button.es-button { font-size:18px!important; display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } .h-auto { height:auto!important } }
          </style>
          </head>
          <body style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
          <div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
          </v:background>
          <![endif]-->
          <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
          <tr>
          <td valign="top" style="padding:0;Margin:0">
          <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
          <tr>
          <td align="center" style="padding:0;Margin:0">
          <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#4D2CE2" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#4d2ce2;width:600px">
          <tr>
          <td align="left" style="padding:20px;Margin:0"><!--[if mso]><table style="width:560px" cellpadding="0"
          cellspacing="0"><tr><td style="width:180px" valign="top"><![endif]-->
          <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
          <tr>
          <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding:0;Margin:0;width:180px">
          <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://gfsceh.stripocdn.email/content/guids/CABINET_1578d0df9a8184ff3b7024655285e20e354566265e4c358ddff76be4fdc9273f/images/logo_hb4.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="180"></td>
          </tr>
          </table></td>
          </tr>
          </table><!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
          <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
          <tr>
          <td align="left" style="padding:0;Margin:0;width:360px">
          <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:0;Margin:0;display:none"></td>
          </tr>
          </table></td>
          </tr>
          </table><!--[if mso]></td></tr></table><![endif]--></td>
          </tr>
          </table></td>
          </tr>
          </table>
          <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
          <tr>
          <td align="center" style="padding:0;Margin:0">
          <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;border-top:10px solid transparent;border-right:10px solid transparent;border-left:10px solid transparent;width:600px;border-bottom:10px solid transparent">
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px">
          <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td valign="top" align="center" style="padding:0;Margin:0;width:540px">
          <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" class="h-auto es-m-txt-c" height="80" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:40px;color:#4d2ce2;font-size:40px">Hola ${name}, bienvenido/a</p></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td align="left" style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
          <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;width:540px">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="left" class="h-auto" height="324" style="padding:30px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:24px;color:#000000;font-size:16px">Tu cuenta ha sido activada exitosamente con el siguiente usuario y contraseña: <br><br><strong>Usuario:</strong> ${email}<br><strong>Contraseña:</strong> ${password}<br><br>Inicia sesión utilizando estas credenciales por medio del siguiente botón<br><br>Si tienes problemas con este proceso, comunícate con nosotros</p></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          <tr>
          <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px">
          <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td valign="top" align="center" style="padding:0;Margin:0;width:540px">
          <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:0;Margin:0"><!--[if mso]><a href="https://" target="_blank" hidden>
          <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="https://"
          style="height:39px; v-text-anchor:middle; width:135px" arcsize="50%" stroke="f" fillcolor="#4d2ce2">
          <w:anchorlock></w:anchorlock>
          <center style='color:#ffffff; font-family:tahoma, verdana, segoe, sans-serif; font-size:14px; font-weight:400; line-height:14px; mso-text-raise:1px'>Iniciar Sesión</center>
          </v:roundrect></a>
          <![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-1 es-button-border" style="border-style:solid;border-color:#2CB543;background:#4d2ce2;border-width:0px 0px 2px 0px;display:inline-block;border-radius:30px;width:auto;mso-border-alt:10px;mso-hide:all;border-bottom-width:0px"><a href="https://gastroclinico.vercel.app/" class="es-button es-button-1" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;display:inline-block;background:#4d2ce2;border-radius:30px;font-family:tahoma, verdana, segoe, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 20px;border-color:#4d2ce2">Iniciar Sesión</a></span><!--<![endif]--></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
          <tr>
          <td align="center" style="padding:0;Margin:0">
          <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#4d2ce2" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#4d2ce2;width:600px">
          <tr>
          <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px"><!--[if mso]><table style="width:560px" cellpadding="0"
          cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
          <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
          <tr>
          <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
          <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr class="es-mobile-hidden">
          <td align="center" style="padding:5px;Margin:0;font-size:0px"><img class="adapt-img" src="https://gfsceh.stripocdn.email/content/guids/CABINET_1578d0df9a8184ff3b7024655285e20e354566265e4c358ddff76be4fdc9273f/images/logblanco.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="50"></td>
          </tr>
          </table></td>
          </tr>
          </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
          <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
          <tr>
          <td align="left" style="padding:0;Margin:0;width:270px">
          <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" style="padding:25px;Margin:0;font-size:0">
          <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
          <tr>
          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:10px"><a target="_blank" href="https://www.facebook.com/people/IG-Gastroenterolog%C3%ADa/pfbid0o87JKdLc4H5wEreaDD9XpEXnnJFg6pUJp8ebW6sZkjWtB24XYMK4dL63MSxonxJFl/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="https://gfsceh.stripocdn.email/content/assets/img/social-icons/logo-white/facebook-logo-white.png" alt="Fb" title="Facebook" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
          <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://www.instagram.com/institutogastroclinico/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#FFFFFF;font-size:14px"><img src="https://gfsceh.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png" alt="Ig" title="Instagram" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table><!--[if mso]></td></tr></table><![endif]--></td>
          </tr>
          </table></td>
          </tr>
          </table></td>
          </tr>
          </table>
          </div>
          </body>
          </html>
      `,
    };
    try {
      await transporter.sendMail(message);
      return res.status(200).json({ status: 'message sent' });
    } catch (error) {
      return res
        .status(500)
        .json({ status: `'error sending message' ${error}` });
    }
  }
  return res.status(500).json({ status: 'error sending message' });
};

export default SendMail;
