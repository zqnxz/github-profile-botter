"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Botter {
    constructor(apiUrl, botOptions) {
        this.apiUrl = apiUrl;
        this.botOptions = botOptions;
    }
    startBot() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                for (let i = 0; i < this.botOptions.views; i++) {
                    yield this.makeApiRequest();
                    console.log(`[${i}] views added for: ${this.botOptions.username}`);
                }
            }
            catch (error) { }
        });
    }
    makeApiRequest() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield axios_1.default.post(this.apiUrl, { username: this.botOptions.username });
            }
            catch (error) { }
        });
    }
}
const botOptions = {
    username: process.argv[2],
    views: Number(process.argv[3]),
};
const apiUrl = `https://visitcount.itsvg.in/api?id=${botOptions.username}`;
const botter = new Botter(apiUrl, botOptions);
botter.startBot();
