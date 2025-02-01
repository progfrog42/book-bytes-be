
export default function orderNumberTemplate(code: string): string {
    return (
        `<!DOCTYPE html
PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Заказ выполнен</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope&family=Notable&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    <style>
        body {
            width: 100% !important;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            margin: 0;
            padding: 0;
            line-height: 100%;
        }

        [style*="Open Sans"] {font-family: 'Open Sans', arial, sans-serif !important;}

        img {
            outline: none;
            text-decoration: none;
            border:none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%!important;
            margin: 0;
            padding: 0;
            display: block;
        }

        table td {
            border-collapse: collapse;
        }

        table {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        a {
            color: #1E88E5;
        }

        .header-td {
            padding-top: 25px;
            padding-bottom: 25px;
            border-bottom: 1px solid #431A20;
        }

        .thanks {
            margin-top: 80px;
            margin-bottom: 80px;
        }

        .thanks p {
            font-size: 18px;
            font-weight: bold;
        }

        .number-text p {
            font-size: 14px;
            padding-bottom: 12px;
        }

        .number-text a {
            font-size: 14px;
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #CB2903;
            border-radius: 10px;
            text-decoration: none;
            color: white;
        }

        .href {
            margin-top: 20px;
        }

        .order {
            margin-bottom: 76px;
        }

        .description-text p {
            font-size: 12px;
            width: 420px;
        }

        .footer {
            margin-top: 100px;
        }

        .footer-td {
            padding-top: 30px;
            padding-bottom: 30px;
            border-top: 1px solid #431A20;
        }

        .footer-td a {
            color: rgba(0, 0, 0, 0.50);
            font-size: 12px;
            margin-left: 100px;
            margin-right: 100px;
        }

        @media (max-width: 870px) {
            .table-850 {
                width: 600px !important;
            }
        }

        @media (max-width: 620px) {
            .table-850 {
                width: 400px !important;
            }

            .footer-td a {
                font-size: 10px;
                margin-left: 60px;
                margin-right: 60px;
            }

            .description-text p {
                font-size: 10px;
                width: 380px;
            }

            .number-text p {
                font-size: 12px;
            }

            .number-text a {
                font-size: 12px;
            }

            .thanks {
                margin-top: 50px;
                margin-bottom: 50px;
            }
        }

        @media (max-width: 420px) {
            .table-850 {
                width: 300px !important;
            }

            .footer-td a {
                margin-left: 40px;
                margin-right: 40px;
            }

            .description-text p {
                font-size: 8px;
                width: 300px;
            }
        }
    </style>
</head>

<body style="margin: 0; padding: 0;">
<table cellpadding="0" cellspacing="0" width="100%" bgcolor="#431A20">
    <tr>
        <td>
            <table class="main table-850" cellpadding="0" cellspacing="0" width="850" align="center">
                <tr>
                    <td height="30" width="850"></td>
                </tr>
                <tr>
                    <td bgcolor="#ffffff" class="header-td table-850">
                        <table class="table-850" cellpadding="0" cellspacing="0" width="850" align="center">
                            <tr>
                                <td align="center" class="logo">
                                    <img src="https://ce6b-2a00-1370-818e-31a8-bdad-2c57-cc03-d68d.ngrok-free.app/image/bookbytes.png" alt="">
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#ffffff">
                        <table class="thanks table-850" cellpadding="0" cellspacing="0" width="850" align="center">
                            <td align="center">
                                <p style="font-family: Georgia, serif;">Благодарим за покупку!</p>
                            </td>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td bgcolor="#ffffff" class="number">
                        <table class="order table-850" cellpadding="0" cellspacing="0" width="850" align="center">
                            <tr>
                                <td class="number-text" align="center">
                                    <p style="font-family: 'MS Sans Serif', Geneva, sans-serif;';">Номер заказа</p>
                                </td>
                            </tr>
                            <tr>
                                <td class="number-text" align="center">
                                    <a href="https://bookbytes/order/${code}" style="font-family: 'MS Sans Serif', Geneva, sans-serif;">${code}</a>
                                </td>
                            </tr>
                        </table>
                        <table class="description table-850" cellpadding="0" cellspacing="0" width="850" align="center">
                            <tr>
                                <td class="description-text" align="center">
                                    <p style="font-family: 'MS Sans Serif', Geneva, sans-serif;">
                                        Чтобы открыть заказ, перейдите на страницу <a href="https://bookbytes.ru/orders">https://bookbytes.ru/orders</a>
                                        и введите номер заказа или нажмите на номер заказа в данном письме.
                                    </p>
                                </td>
                            </tr>
                        </table>
                        <table class="footer table-850" cellpadding="0" cellspacing="0" width="850" align="center">
                            <tr>
                                <td class="footer-td" align="center">
                                    <a style="font-family: Verdana, Geneva, sans-serif;;" href="https://bookbytes/contact-us">Контакты</a>
                                    <a style="font-family: Verdana, Geneva, sans-serif;;" href="https://bookbytes/offer">Оферта</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td height="30" width="850"></td>
                </tr>
            </table>
        </td>
    </tr>
</table>
</body>

</html>`
    )
}