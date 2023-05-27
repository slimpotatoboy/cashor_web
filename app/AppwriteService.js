import { Account, Avatars, Client, Databases, Storage } from "appwrite";

export const AppwriteEndpoint = "https://cloud.appwrite.io/v1";
export const AppwriteProject = process.env.NEXT_PUBLIC_PROJECT_ID;

const client = new Client();
client.setEndpoint(AppwriteEndpoint).setProject(AppwriteProject);

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);
const storage = new Storage(client);

export const AppwriteService = {
  signOut: async () => {
    await account.deleteSession("current");
  },
  getAccount: async () => {
    return await account.get();
  },
  getAccountPicture: (name) => {
    return avatars
      .getInitials(name.split("").reverse().join(""), 256, 256)
      .toString();
  },
  setSession: (hash) => {
    const authCookies = {};
    authCookies["a_session_" + AppwriteProject] = hash;
    client.headers["X-Fallback-Cookies"] = JSON.stringify(authCookies);
  },
  getProduct: async (slug) => {
    return await database.getDocument(process.env.NEXT_PUBLIC_DATABASE_ID, process.env.NEXT_PUBLIC_PRODUCT_ID, slug);
  },
  readImage: (id) => {
    return storage.getFilePreview(process.env.NEXT_PUBLIC_STORAGE_ID, id);
  }
};
