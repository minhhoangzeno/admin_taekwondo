import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): void;
    getImage(imagename: any, res: any): import("rxjs").Observable<any>;
}
