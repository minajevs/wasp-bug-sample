import { useQuery } from "wasp/client/operations";
import { getFullName } from "wasp/client/operations";

export const MainPage = () => {
  const { data: fullName } = useQuery(getFullName, {
    firstName: "John",
    lastName: "Smith",
  });
  return (
    <>
      <div>{fullName}</div>
    </>
  );
};
