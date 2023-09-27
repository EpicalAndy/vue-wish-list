export class UserModel {
  private id: number;
  private firstName: any;
  private lastName: any;
  private patronymicName: any;
  constructor(userData: any) {
    this.id = 0;
    this.firstName = userData.firstName || '';
    this.lastName = userData.lastName || '';
    this.patronymicName = userData.patronymicName || '';
  }

  get fullName() {
    return `${this.lastName} ${this.firstName} ${this.patronymicName}`;
  }
}
