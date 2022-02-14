import { Model } from 'mongoose';
import { TokenDto } from './dto/token.dto';
import { Token, TokenDocument } from './schemas/token.schemas';
export declare class TokenService {
    private tokenModel;
    constructor(tokenModel: Model<TokenDocument>);
    saveToken(tokenDto: TokenDto): Promise<Token & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deleteToken(access_token: string): Promise<void>;
}
