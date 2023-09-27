import { UserModel } from "@/models/user-model";

export class WishModel {
  private id: number;
  cost: number;
  subject: UserModel | null;
  name: string;
  priority: number;

  constructor(wishData: any) {
    this.name = wishData.name || '';
    this.id = 0;
    this.priority = wishData.priority || 0;
    this.cost = wishData.cost || 0;
    this.subject = wishData.subject || null; // На кого распространяется желание
  }
}
