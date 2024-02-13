import s from "./style.module.sass";
import Image from "next/image";
import picture from "../../../public/user-profile.png";
import { User } from "../../types/User";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
    return (
      <div className={s.card}>
        <Image
          src={picture.src}
          height={100}
          width={100}
          alt={user.name}
        />
        <div className={s.userName}>{user.name}</div>
      </div>
    );
}

