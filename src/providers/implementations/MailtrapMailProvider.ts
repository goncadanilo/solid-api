import nodemaler from "nodemailer";
import { IMailProvider, IMessage } from "../IMailProvider";
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemaler.createTransport({
      host: "<HOST>",
      port: 2525,
      auth: {
        user: "<USER>",
        pass: "<PASSWORD>",
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
