import { Button } from "@/components/ui/button"
import { Import, GitBranch } from "lucide-react"
import Image from "next/image"

const AddRepo = () => {
  return (
  <div
      className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer
      transition-all duration-300 ease-in-out transform-gpu
      hover:bg-background hover:border-indigo-400 hover:scale-[1.02]
      shadow-[0_2px_10px_rgba(0,0,0,0.08)]
      hover:shadow-[0_10px_30px_rgba(99,102,241,0.18)]"
  >
    <div className="flex flex-row items-start gap-4">
      <Button
        variant="outline"
        size="icon"
        className="flex justify-center items-center bg-white
        transition-all duration-300
        group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:via-indigo-500 group-hover:to-blue-500
        group-hover:border-transparent group-hover:text-white"
      >
        <GitBranch
          size={30}
          className="transition-transform duration-300 group-hover:scale-[1.7]"
        />
      </Button>

      <div className="flex flex-col">
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Open Github Repository
        </h1>
        <p className="text-sm text-muted-foreground max-w-55">
          Import your Github Repo
        </p>
      </div>
    </div>

    <div className="overflow-hidden">
      <Image
        src="/github.svg"
        alt="Open GitHub repository"
        width={110}
        height={110}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  </div>
);
}

export default AddRepo