import instance from "../API";
import { TUser } from "../interface/users";

export const Register = async (user: TUser) => {
   try {
      const { data } = await instance.post("/register" + user);
      return data;
   } catch (error) {
      console.log(error);
   }
};
