import { giftsMock } from "~/mock/gifts";

export interface Gift {
  title: string
  quantity: number
  url: string
}

class Service {
  private gifts: Gift[] = [];

  constructor(gifts: Gift[]){
    this.gifts = gifts;
  }

  public add(newGift: Gift): void {
    this.gifts.push(newGift);
  }

  public delete(index: number): Gift {
    return this.gifts.splice(index, 1)[0];
  }

  public deleteAll(): void {
    this.gifts = [];
  }
  
  public get christmasGifts(): Gift[] {
    return this.gifts;
  }
  
}

export default new Service(giftsMock);