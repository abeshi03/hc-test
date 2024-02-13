"use client"

import { Layout } from "../../components/Layout";
import UserCard from "../../components/UserCard";
import s from "../style.module.sass";
import Link from "next/link";
import { User } from "../../types/User";
import { useQuery } from "react-query";
import axios from "axios";
import { Spinner } from "../../components/Spinner";

const fetchUsers = async () => {
  const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  return res.data;
} 

export default function UsersPage() {
  const { data: users = [], isLoading } = useQuery<User[]>(["users"], fetchUsers);

  const displayUsers = () => {
    if (isLoading) return <Spinner />;

    return (
      <div className={s.cardContainer}>
        {users.map(user => (
          <UserCard 
            key={user.id}
            user={user}
          />
        ))}
      </div>
    );    
  };

  return (
    <Layout>
      <h2 className={s.title}>ユーザー一覧</h2>
      {displayUsers()}
      <Link className={s.link} href="/">ホーム画面へ</Link>
    </Layout>
  );
};
