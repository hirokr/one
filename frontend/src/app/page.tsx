import Logo from "@/components/global/Logo";
import { ModeToggle } from "@/components/global/themeToggle";

export default function Home() {
  return (
    <div className=''>
      <div>
        <ModeToggle />
      </div>
      <div className='h-20'>
        <Logo className="size-24 bg-red-500 inline-flex" strokeColor="#2563eb" strokeWidth={13} />
        asdfkl

      </div>
      <div className='h-screen bg-white'></div>
    </div>
  );
}
