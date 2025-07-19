import { Card } from "antd";
import { data } from "../../data";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const item = data.find((item) => item.id === Number(id));
  
  return {
    title: item?.name ? `${item.name} - 博客详情` : "博客详情",
  };
}

export default async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = data.find((item) => item.id === Number(id));
  return (
    <Card title={item?.name} variant="borderless" style={{ width: 300 }}>
      {item?.content}
    </Card>
  );
}
