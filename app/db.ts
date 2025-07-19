import { JSONFilePreset } from "lowdb/node";

interface Post {
  id: string;
  title: string;
  name: string;
}

// Read or create db.json
const defaultData: { posts: Post[] } = {
  posts: [],
};
const db = await JSONFilePreset("db.json", defaultData);

export default db;
