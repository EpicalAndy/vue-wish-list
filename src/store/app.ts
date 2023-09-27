// Utilities
import { defineStore } from 'pinia';

import { WishModel } from "@/models/wish-model";
import { UserModel } from "@/models/user-model";

export const useAppStore = defineStore('app', {
  state: () => ({
    wishList: [] as Array<WishModel>,
    userList: [] as Array<UserModel>
  }),
  actions: {
    addWish(wish: WishModel) {
      wish && this.wishList.push(wish);
    },
    addUser(user: UserModel) {
      user && this.userList.push(user);
    }
  }
});
