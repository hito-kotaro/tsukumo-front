"use client";

import { Card } from "@/components/ui/Card";
import { CheckLabel } from "@/components/ui/CheckLabel";
import { useToggle } from "@/hooks/useToggle";

export default function Home() {
  return (
    <>
      <div className="space-y-2 flex flex-col justify-center mt-5 border-2 border-blue-400">
        <Card
          name="テスト"
          memo="ここにメモが入ります"
          handleClick={() => console.log("hello")}
        />
      </div>
    </>
  );
}
