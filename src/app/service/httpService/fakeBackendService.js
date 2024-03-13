import LocalStorage from "@/app/service/localStorageService.js";
import { LS_KEY_USER, LS_KEY_USERS } from "@/app/const.js";
// import { UserType } from "@/app/service/httpService/types.js";

const usersLocalStorage = new LocalStorage(LS_KEY_USERS);
const userLocalStorage = new LocalStorage(LS_KEY_USER);

export default class FakeBackendService {
  users;

  constructor() {
    const users = usersLocalStorage.getItems();
    if (users.length) {
      this.users = users;
    } else {
      this.users = [
        {
          username: "admin",
          password: "123456",
          phone: "123456",
          email: "admin@gmail.com"
        }
      ];
      usersLocalStorage.setItems(this.users);
    }
  }

  getUser() {
    return userLocalStorage.getItems();
  }

  removeUser() {
    userLocalStorage.removeItem();
  }

  async login(payload) {
    const { username, password, phone, email } = payload;
    const userData = this.users.find((user) => {
      return (
        ((user.username && username && user.username === username) ||
          (user.phone && phone && user.phone === phone) ||
          (user.email && email && user.email === email)) &&
        user.password === password
      );
    });
    if (userData) {
      const preparedData = {
        ...userData,
        token: "fake-token"
      };
      userLocalStorage.setItems(preparedData);
      return preparedData;
    } else {
      throw new Error("These credentials do not match our records.");
    }
  }

  register(payload ) {
    const { email, username } = payload;

    const isUserExist = this.users.find((user) => {
      return user.email === email || user.username === username;
    });

    if (isUserExist) {
      throw new Error("This record is already exists!");
    } else {
      this.users.push(payload);
      usersLocalStorage.setItems(this.users);
      return "User created successfully!";
    }
  }
}
