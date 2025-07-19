import { NextResponse } from "next/server";
import db from "@/db";

interface Iparams {
  params: { id: string };
}

export async function POST() {
  return new Response("Hello, Next.js!");
}

export async function DELETE(request: Request, { params }: Iparams) {
  const { id } = params;
  await db.update(({ posts }) => {
    const index = posts.findIndex((post) => post.id === id);
    if (index !== -1) {
      posts.splice(index, 1);
    }
  });
  
  return NextResponse.json({
    id: id,
    code:0,
    message: "删除成功"
  });
}
