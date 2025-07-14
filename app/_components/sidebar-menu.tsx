import { Button } from "@/components/ui/button"
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Calendar1Icon, HomeIcon, LogOutIcon } from "lucide-react"
import { quickSearchOptions } from "../_constants/quickSearchOption"
import Image from "next/image"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const SideBarMenu = () => {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-[-35px]">Menu</SheetTitle>
      </SheetHeader>
      <div className="flex items-center border-b border-solid p-5">
        <div className="flex items-center gap-2">
          <Avatar className="h-[50px] w-[50px]">
            <AvatarImage
              src={
                "https://images.unsplash.com/photo-1751480433116-dc745e575a29?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            />
          </Avatar>
        </div>
        <div className="ml-3 flex flex-col">
          <span className="font-bold">Miguel</span>
          <span className="text-xs text-gray-400">Barbeiro</span>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid p-5">
        <Button className="justify-start gap-2">
          <HomeIcon />
          Inicio
        </Button>
        <Button className="justify-start gap-2" variant={"ghost"}>
          <Calendar1Icon />
          Agendamento
        </Button>
      </div>

      <div className="flex flex-col gap-4 border-b border-solid p-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant={"ghost"}
          >
            <Image
              src={option.imageUrl}
              alt={option.title}
              width={20}
              height={20}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-4 border-b border-solid p-5">
        <Button className="justify-start gap-2" variant={"ghost"}>
          <LogOutIcon />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SideBarMenu
