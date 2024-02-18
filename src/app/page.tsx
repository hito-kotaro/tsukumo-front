"use client";

import { HomePage } from "@/components/HomePage";
import { ListPage } from "@/components/ListPage";
import { MotoPage } from "@/components/MotoPage";
import { usePageState } from "@/hooks/usePageState";

export default function Home() {
	const pageStateHooks = usePageState(1)

	if(pageStateHooks.pageId===1){
		return <HomePage pageStateHooks={pageStateHooks}/>
	}else if(pageStateHooks.pageId ===2){
		return <MotoPage pageStateHooks={pageStateHooks}/>
	}else if(pageStateHooks.pageId ===3){
		return <ListPage pageStateHooks={pageStateHooks}/>
	}
	else{
		return <div>not found</div>
	}

	

}
