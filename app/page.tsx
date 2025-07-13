import { Input } from "@/components/ui/input"
import Header from "./_components/header"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/quickSearchOption"
import BookingItem from "./_components/booking-item"

const Home = async () => {
  const barbershops = await db.barberShop.findMany({})
  const popularBarbershops = await db.barberShop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div className="overflow-y-hidden">
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

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <span className="flex items-center gap-2">
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </span>
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/bannerHome.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <BookingItem />

        <h2 className="mt-6 mb-3 text-xs font-medium text-gray-400 uppercase">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mt-6 mb-3 text-xs font-medium text-gray-400 uppercase">
          Populares
        </h2>

        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
