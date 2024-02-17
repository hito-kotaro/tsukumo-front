"use client";

import { CheckLabel } from "@/components/ui/CheckLabel";
import { useToggle } from "@/hooks/useToggle";


export default function Home() {
	const toggleHooks = useToggle(false)
  return (
    <>
      <div className="space-y-2 flex flex-col justify-center mt-5 border-2 border-blue-400">
				<CheckLabel toggleHooks={toggleHooks} label="宿泊日数によって数量を変動"/>

      </div>
    </>
  );
}
