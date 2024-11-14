import { MainNavRoutes } from "@/lib/routes";
import NavButton from "./(nav-components)/NavButton";


export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col m-5">
      <div className="flex flex-col items-center">
        {MainNavRoutes.map((route, i) => (
          <NavButton key={i} href={route.href} title={route.title} />
        ))}
      </div>
    </main>
  );
}
