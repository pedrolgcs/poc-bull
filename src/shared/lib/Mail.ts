import nodemailer from 'nodemailer';

import mailConfig from '../../config/mail';

const mail = nodemailer.createTransport(mailConfig.mailtrap);

export { mail };
