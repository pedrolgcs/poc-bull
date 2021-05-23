import { mail } from '../lib/Mail';

interface IRegistrationMail {
  key: string;
  handle({ data }: { [key: string]: any }): Promise<void>;
  options: {
    [key: string]: any;
  };
}

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
  },
  async handle({ data }: { [key: string]: any }) {
    const { name, email } = data;

    await mail.sendMail({
      from: 'Poc-Bull <bull@gmail.com>',
      to: `${name} <${email}>`,
      subject: `Cadastro de usuários`,
      html: `Olá, ${name}, bem-vindo ao sistema de filas da Rocketseat :D`,
    });
  },
} as IRegistrationMail;
