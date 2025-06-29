import { Input } from "@/components/ui/input"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { SearchIcon, Scissors, Car } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />

      <div className="p-5">
        {/* Saudação */}
        <h2 className="text-xl font-medium">
          Olá, <span className="font-bold">Miguel!</span>
        </h2>
        <p className="text-muted-foreground text-sm">Sexta, 2 de Fevereiro</p>

        {/* Barra de busca */}
        <div className="mt-6 flex items-center gap-2">
          <div className="relative flex-1">
            <Input placeholder="Buscar" />
            <Button>
              <SearchIcon />
            </Button>
          </div>
        </div>

        {/* Categorias */}
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

        {/* Banner */}
        <div className="relative mt-6 h-[150px] w-full overflow-hidden rounded-xl">
          <Image
            src="/bannerHome.png"
            alt="Banner de agendamento"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
