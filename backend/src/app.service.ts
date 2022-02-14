import { Injectable } from '@nestjs/common';
import nodemailer = require('nodemailer')

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  sendEmail() {
    const transport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: 'zenominhhoang@gmail.com',
        pass: 'Dalecarnegie521985',
      },
    });
    transport.sendMail({
      from: 'zenominhhoang@gmail.com',
      to: 'minhhoangzeno@gmail.com',
      subject: "Please confirm your account",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          </div>`,
    }).catch(err => console.log(err));
  }
}
