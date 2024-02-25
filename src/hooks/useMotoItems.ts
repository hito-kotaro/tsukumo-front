import { MotoItem } from "@/types/types"
import { useState } from "react"

export const useMotoItems = (initialItems:MotoItem[]) =>{
	const [motoItems, setMotoItems] = useState<MotoItem[]>(initialItems)

	const addMotoItem = (motoItem: MotoItem) =>{
		const newMotoItems = [...motoItems, motoItem]
		setMotoItems(newMotoItems)
	}


	const removeMotoItem = (id:number)=>{
		const newMotoItems = motoItems.filter((mi:MotoItem)=>{
			return mi.id !== id
		})
		setMotoItems(newMotoItems)
	}


	return {motoItems, addMotoItem, removeMotoItem}
}
