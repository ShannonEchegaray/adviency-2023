import { giftsMock } from "~/mock/gifts";

class Service {
  private gifts: string[] = [];

  constructor(gifts: string[]){
    this.gifts = gifts;
  }

  public add(gift: string): void {
    this.gifts.push(gift);
  }

  public delete(index: number): string {
    return this.gifts.splice(index, 1)[0];
  }

  public deleteAll(): void {
    this.gifts = [];
  }
  
  public get christmasGifts(): string[] {
    return this.gifts;
  }
  
}

export default new Service(giftsMock);