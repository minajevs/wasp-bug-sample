import { getFirstName, type GetFullName } from "wasp/server/operations";

export const getFullName: GetFullName<never, string> = async () => {
  const firstName = await getFirstName();
  return `${firstName} Smith`;
};
