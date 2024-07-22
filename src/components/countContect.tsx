import { createContext } from "react";
type Props = {
   children: React.ReactNode;
};
export const countCT = createContext<Number>(0);
const countContect = ({ children }: Props) => {
   return (
      <>
         <countCT.Provider value={10}>{children}</countCT.Provider>
      </>
   );
};

export default countContect;
