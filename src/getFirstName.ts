import { type GetFirstName } from "wasp/server/operations";
import { capitalize } from "./capitalize";

const firstName = "john";

export const getFirstName: GetFirstName<never, string> = () => {
  return capitalize(firstName);
};

// const capitalize = (str: string) => {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };
