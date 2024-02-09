import Image from "next/image";
import Telegram from "./Icons/Telegram.png";
import Linkedin from "./Icons/Linkedin.png";
import Github from "./Icons/Github.png";

export default function Home() {
    return (
        <main className="m-10 flex row-auto align-middle justify-around ">
            <div className="flex items-center align-middle ">
                <h1 className="stylish_bold font-extrabold text-lg">
                    PROJECT FLO
                    <p className="font-extrabold text-[8px] uppercase opacity-45">
                        In development ...
                    </p>
                </h1>
            </div>
            <div className="text-center">
                <h1 className="stylish_bold text-4xl font-extrabold">
                    Ambient Sounds Mixing
                </h1>
                <p className="stylish_accent">
                    Craft your perfect ambiance, effortlessly.
                </p>
            </div>
            <div className="flex gap-6 items-center">
                <a
                    className="w-[34px]"
                    href="https://t.me/LearningStuff"
                    target="_blank"
                >
                    <Image src={Telegram} alt="" />
                </a>
                <a
                    className="w-[34px]"
                    href="https://www.linkedin.com/in/yonatan-afewerk/"
                    target="_blank"
                >
                    <Image className="" src={Linkedin} alt="" />
                </a>
                <a
                    className="w-[36px]"
                    href="https://github.com/Yehonatal/flow"
                    target="_blank"
                >
                    <Image src={Github} alt="" />
                </a>
            </div>
        </main>
    );
}
