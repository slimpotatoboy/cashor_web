import {
  Account,
  Avatars,
  Client,
  Databases,
  Functions,
  ID,
  Storage,
} from "appwrite";
import { data } from "autoprefixer";

export const AppwriteEndpoint = "https://cloud.appwrite.io/v1";
export const AppwriteProject = process.env.NEXT_PUBLIC_PROJECT_ID;

const client = new Client();
client.setEndpoint(AppwriteEndpoint).setProject(AppwriteProject);

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);
const storage = new Storage(client);
const functions = new Functions(client);

export const AppwriteService = {
  sendEmail: async (name, email, businessName, orderId) => {
    await functions.createExecution(
      process.env.NEXT_PUBLIC_FUNCTION_ID,
      `{"name": "${name}","email": "${email}","business_name": "${businessName}", "order_id": "${orderId}"}`
    );
  },
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
    return await database.getDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_PRODUCT_ID,
      slug
    );
  },
  readImage: (id) => {
    return storage.getFilePreview(process.env.NEXT_PUBLIC_STORAGE_ID, id);
  },
  getBusiness: async (id) => {
    return await database.getDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_BUSINESS_ID,
      id
    );
  },
  postOrder: async (
    order_status,
    payment_method,
    note,
    customer_id,
    business_id,
    total_price
  ) => {
    return await database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_ORDERS_ID,
      ID.unique(),
      {
        order_status: order_status,
        payment_method: payment_method,
        note: note,
        customer_id: customer_id,
        business_id: business_id,
        total_price: total_price,
      }
    );
  },
  createPersonType: async (
    name,
    phone,
    email,
    address,
    user_id,
    business_id
  ) => {
    return await database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_PERSONTYPE_ID,
      ID.unique(),
      {
        name: name,
        phone: phone,
        email: email,
        address: address,
        type: "Customer",
        user_id: user_id,
        business_id: business_id,
      }
    );
  },
  postOrderProducts: async (
    order_id,
    product_id,
    product_name,
    quantity,
    selling_price,
    total_price
  ) => {
    return await database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_ORDERS_PRODUCT_ID,
      ID.unique(),
      {
        order_id: order_id,
        product_id: product_id,
        product_name: product_name,
        quantity: quantity,
        selling_price: selling_price,
        total_price: total_price,
      }
    );
  },
  postPrivateBeta: async (email) => {
    return await database.createDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID,
      process.env.NEXT_PUBLIC_PRIVATEBETA_ID,
      ID.unique(),
      {
        email: email,
        joined: false,
      }
    );
  },
};
