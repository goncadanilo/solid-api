import nodemaler from "nodemailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemaler.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "831af09036ec9b", //troque para seu usuário do Mailtrap
        pass: "f44af40bc211a3", //troque para sua senha do Mailtrap
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
