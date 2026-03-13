"use client";
// import TemplateSelectionModal from "@/components/modal/template-selector-modal";
import { Button } from "@/components/ui/button"
// import { createPlayground } from "@/features/playground/actions";
import { Plus } from 'lucide-react'
import Image from "next/image"


const AddNewButton = () => {

 return (
  <>
    <div
      // onClick={() => setIsModalOpen(true)}
      className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer
      transition-all duration-300 ease-in-out transform-gpu
      hover:bg-background hover:border-indigo-500 hover:scale-[1.02]
      shadow-[0_2px_10px_rgba(0,0,0,0.08)]
      hover:shadow-[0_10px_30px_rgba(99,102,241,0.18)]"
    >
      
      <div className="flex flex-row items-start gap-4">
        <Button
          variant="outline"
          size="icon"
          className="flex justify-center items-center bg-white
          transition-colors duration-300
          group-hover:bg-indigo-50
          group-hover:border-indigo-500
          group-hover:text-indigo-600"
        >
          <Plus
            size={30}
            className="transition-transform duration-300 group-hover:rotate-[180deg]"
          />
        </Button>

        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-indigo-600">Add New</h1>
          <p className="text-sm text-muted-foreground max-w-55">
            Create a new playground
          </p>
        </div>
      </div>

      <div className="overflow-hidden">
        <Image
          src="/add-new.svg"
          alt="Create new playground"
          width={70}
          height={70}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>

    </div>

  </>
);
}

export default AddNewButton