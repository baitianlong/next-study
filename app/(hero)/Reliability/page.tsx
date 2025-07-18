import Content from "../../components/Content";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Reliability',
}
export default function Reliability() {
  return (
    <Content text="我是Reliability页面" color="#5f8fff"/>
  );
}
