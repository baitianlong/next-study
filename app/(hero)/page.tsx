import Content from "../components/Content";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home',
}
export default function Home() {
  return (
    <Content text="我是home页面" color="#ddd"/>
  );
}
