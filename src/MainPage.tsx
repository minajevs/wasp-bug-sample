import { useQuery, getFullName } from "wasp/client/operations";

export const MainPage = () => {
  const { data: fullName } = useQuery(getFullName);
  return (
    <>
      <div>{fullName}</div>
    </>
  );
};
