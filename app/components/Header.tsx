"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const linkData = [
  { path: "/Performance", name: "Performance" },
  { path: "/Reliability", name: "Reliability" },
  { path: "/Scale", name: "Scale" },
];
export default function Header() {
  let pathname = usePathname();
  return (
    <div className="flex justify-between container mx-auto text-white p-8 items-center">
      <Link className="text-3xl font-bold" href="/">
        Home
      </Link>
      <div className="text-xl flex gap-4">
        {linkData.map((item, index) => {
          return (
            <Link
              href={item.path}
              key={index}
              className={`link ${
                pathname === item.path ? "text-purple-500" : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
