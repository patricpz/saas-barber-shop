import { Input } from "@/components/ui/input"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { SearchIcon, Scissors, Car } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-medium">
          Olá, <span className="font-bold">Miguel!</span>
        </h2>
        <p className="text-muted-foreground text-sm">Sexta, 2 de Fevereiro</p>

        <div className="mt-6 flex items-center gap-2">
          <Input
            placeholder="Buscar Barbearias"
            className="h-10 flex-1 rounded-xl border border-zinc-800 bg-zinc-900 text-white placeholder:text-zinc-400"
          />
          <Button className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7B5CFA] p-0 hover:bg-[#6b4ee0]">
            <SearchIcon className="h-5 w-5 text-white" />
          </Button>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto">
          <Button
            variant="outline"
            className="gap-2 rounded-full px-4 py-2 text-sm"
          >
            <Scissors size={16} />
            Cabelo
          </Button>
          <Button
            variant="outline"
            className="gap-2 rounded-full px-4 py-2 text-sm"
          >
            Barba
          </Button>
          <Button
            variant="outline"
            className="gap-2 rounded-full px-4 py-2 text-sm"
          >
            <Car size={16} />
            Acabamento
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/bannerHome.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <Card className="mt-6">
          <CardContent className="flex justify-between">
            <div className="flex flex-col gap-2 py-1">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="rounded-full object-cover"
                  />
                </Avatar>
                <p className="text-sm font-medium">Barbearia FSW</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Julho</p>
              <p className="text-2xl">5</p>
              <p className="text-sm">10:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
