"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let AppService = class AppService {
    getHello() {
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
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map