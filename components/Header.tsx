import { Button } from "./ui/button";
import { BsGithub } from "react-icons/bs";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="lg:flex lg:justify-around lg:mt-12 mt-12 items-center flex justify-around">
      <div>
        <h1 className="font-black">FileFlip</h1>
      </div>
      <div className="flex items-center">
        <div className="items-center flex lg:gap-2 md:flex">
          <ModeToggle></ModeToggle>
          <Link href="https://www.github.com/jordansmalls/fileflip" target="_blank">
            <Button
              variant="default"
              className="items-center gap-2 rounded-full bg-primary w-fit md:flex"
              size="lg"
            >
              <span>View Code</span>
              <span className="text-xl">
                <BsGithub />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
