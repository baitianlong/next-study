import Content from "../../components/Content";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Performance',
}
export default function Performance() {
  return (
    <Content text="我是Performance页面更新了" color="#000"/>
  );
}
