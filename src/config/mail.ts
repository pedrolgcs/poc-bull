interface IMailConfig {
  mailtrap: {
    host: string;
    port: number;
    auth: {
      user: string;
      pass: string;
    };
  };
}

export default {
  mailtrap: {
    host: process.env.MAILTRAP_HOST,
    port: Number(process.env.MAILTRAP_PORT),
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  },
} as IMailConfig;
