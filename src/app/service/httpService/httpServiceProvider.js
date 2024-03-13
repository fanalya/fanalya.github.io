import FakeBackendService from "@/app/service/httpService/fakeBackendService.js";
import { getFirebaseBackend } from "@/app/service/httpService/firebaseService.js";
const fakeBackendService = new FakeBackendService();
const firebaseService = getFirebaseBackend();
export { fakeBackendService, firebaseService };
