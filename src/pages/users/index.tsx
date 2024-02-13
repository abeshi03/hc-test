"use client"

import { Layout } from "../../components/Layout";
import UserCard from "../../components/UserCard";
import s from "../style.module.sass";
import Link from "next/link";
import { User } from "../../types/User";

const users: User[] = [
  { id: 1, name: "ユーザー1" },
  { id: 2, name: "ユーザー2" },
  { id: 3, name: "ユーザー3" },
  { id: 4, name: "ユーザー4" },
  { id: 5, name: "ユーザー5" },
  { id: 6, name: "ユーザー6" },
  { id: 7, name: "ユーザー7" },
  { id: 8, name: "ユーザー8" },
  { id: 9, name: "ユーザー9" },
  { id: 10, name: "ユーザー10" },
  { id: 11, name: "ユーザー11" },
  { id: 12, name: "ユーザー12" }  
];

export default function UsersPage() {
  return (
    <Layout>
      <h2 className={s.title}>ユーザー一覧</h2>
      <div className={s.cardContainer}>
        {users.map(user => (
          <UserCard 
            key={user.id}
            user={user}
          />
        ))}
      </div>
      <Link className={s.link} href="/">ホーム画面へ</Link>
    </Layout>
  );
}
