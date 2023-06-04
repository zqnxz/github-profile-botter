import axios from 'axios';
import BotOptions from './interfaces/bot.interface';

class Botter {
  private readonly apiUrl: string;
  private readonly botOptions: BotOptions;

  constructor(apiUrl: string, botOptions: BotOptions) {
    this.apiUrl = apiUrl;
    this.botOptions = botOptions;
  }

  public async startBot(): Promise<void> {
    try {
      for (let i = 1; i < this.botOptions.views; i++) {
        await this.makeApiRequest();
        console.log(`[${i}] views added for: ${this.botOptions.username}`);
      }
    } catch (error) {}
  }

  private async makeApiRequest(): Promise<void> {
    try {
      await axios.post(this.apiUrl, { username: this.botOptions.username });
    } catch (error) {}
  }
}

const botOptions: BotOptions = {
  username: process.argv[2],
  views: Number(process.argv[3]),
};
const apiUrl = `https://visitcount.itsvg.in/api?id=${botOptions.username}`;

const botter = new Botter(apiUrl, botOptions);
botter.startBot();
