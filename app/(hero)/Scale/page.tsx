import Content from "../../components/Content";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Scale',
}
export default function Scale() {
  return (
    <Content text="我是Scale页面" color="#3370FF"/>
  );
}
