import { Star } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section className="lg:pt-8">
      <div className="container text-center">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 className="text-3xl font-extrabold lg:text-6xl lg:tracking-tighter tracking-tight">
            Convert Files Seamlessly, Right on Your Machine
          </h1>
          <p className="text-balance text-muted-foreground lg:text-lg text-sm">
            Introducing FileFlip – the ultimate free tool for multimedia
            conversion. Convert images, audio, and videos without limits,
            hassle, or the risk of uploading to external servers. Your files
            stay on your device, ensuring privacy and security. Start converting
            effortlessly today.
          </p>
        </div>
        <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
          <div>
            <div className="flex items-center gap-1">
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <Star className="size-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">5.0</span>
            </div>
            <p className="text-left font-medium text-muted-foreground">
              from 150+ reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
