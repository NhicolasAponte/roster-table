import { Button } from "@/components/ui/button";
import Link from "next/link";


interface NavButtonProps {
  href: string;
  title: string;
}

export default function NavButton({ href, title }: NavButtonProps) {
  return (
    <div>
      <Link href={href}>
        <Button>{title}</Button>
      </Link>
    </div>
  );
}