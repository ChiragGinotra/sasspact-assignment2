import { useUser } from "./useUser";

export default function Username() {
  const { user } = useUser();
  const { username } = user;

  return (
    <div className="items-center text-[1.4rem] text-grey-600 font-medium">
      {username}
    </div>
  );
}
