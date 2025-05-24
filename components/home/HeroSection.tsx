import React from "react";
import { Button } from "../ui/button";
import { Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";

const HeroSection = () => {
  return (
    <section>
      <div className="">
        <div className="flex">
          <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group">
            <Badge
              variant={"secondary"}
              className="relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200"
            >
              <Sparkles className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
              <p className="text-base text-rose-600">Powered by AI</p>
            </Badge>
          </div>
        </div>

        <h1>Transform PDF's into concise summaries</h1>
        <h2>Get a beautiful summaries reel of the document in seconds.</h2>
        <Button>Try Sommaire</Button>
      </div>
    </section>
  );
};

export default HeroSection;
