type Post = {
  id: string;
  title: string;
  content: string;
  author: string;
};

const posts: Post[] = [
  { id: "1", title: "はじめての投稿", content: "これは最初の投稿です", author: "山田太郎" },
  { id: "2", title: "2番目の投稿", content: "これは2番目の投稿です", author: "佐藤次郎" },
  { id: "3", title: "3番目の投稿", content: "これは3番目の投稿です", author: "鈴木花子" },
];

// Q1 ... 特定のIDを持つ投稿を検索して返す関数を作成してください
// const findPostById = () => {
//
// }

// Q2 全投稿のtitleの配列を返す関数を作成してください
// const getAllTitles = () => {
//
// }

// Q3 特定のIDを持つ投稿のcontentを更新する関数を作成してください
// イミューダブルに更新するようにしてください
// const updatePostContentById = () => {
//
// }


// Q4 関数をpostIdで実行し、結果をコンソールに出力してください
// const postId = "2";
// console.log("投稿検索結果:", findPostById(postId));

// Q5 全体取タイトルをコンソールに出力してください
// console.log("全投稿のタイトル:", getAllTitles);

// Q6 postId2のcontentを更新して、更新前のpostsと更新後のpostsをコンソールに出力してください
// console.log("内容更新前の投稿リスト:", posts);
// console.log("内容更新後の投稿リスト:", newPosts);
