
import BlopList from "../components/bolgList";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '博客列表',
  description: '...',
}
const Page = () => {
  return (
    <BlopList  />                            
  );
};
export default Page;
