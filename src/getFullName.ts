import { getFirstName, type GetFullName } from "wasp/server/operations";

type Input = {
  firstName: string;
  lastName: string;
};
export const getFullName: GetFullName<Input, string> = async ({ lastName }) => {
  const firstName = await getFirstName();
  return `${firstName} Smith`;
};
