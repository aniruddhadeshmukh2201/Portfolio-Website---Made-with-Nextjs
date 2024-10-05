import Profile from "../public/profile-pic.jpeg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-[48px] justify-between w-[1040px] py-[100px]">
      <div className="flex-1">
        <div>
          <div className="text-4xl font-bold">Hey, I am Aniruddha</div>
        </div>
        <div className="pt-6 text-[22px] leading-8">
          <ul className="list-disc pl-6 mt-4 flex flex-col gap-4">
            <li>
              <strong> 👨‍💻 I&apos;m a passionate software engineer</strong> with
              expertise in full-stack development.
            </li>
            <li>
              🏙 <strong>I love building</strong> web applications and tools that make life easy.
            </li>
            <li>🎥 <strong>Learn alongside me</strong> as I explore the world of software.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <Image
          src={Profile}
          className="w-[300px] h-[300px] rounded-lg object-cover"
          alt="Aniruddha Deshmukh"
        />
      </div>
    </div>
  );
}
