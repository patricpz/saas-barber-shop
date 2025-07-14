import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import SideBarMenu from "./sidebar-menu"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-3">
        <Image src="/logo.png" alt="Logo" width={120} height={`8`} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"outline"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SideBarMenu />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
