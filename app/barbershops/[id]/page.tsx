import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import { db } from "@/app/_lib/prisma"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarberShopPageProps {
  params: {
    id: string
  }
}

const BarberShopPage = async ({ params }: BarberShopPageProps) => {
  const barbershop = await db.barberShop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    notFound()
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          alt={barbershop?.name}
          fill
          className="object-cover"
        />
        <Button
          variant={"secondary"}
          size={"icon"}
          className="absolute top-4 left-4"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          variant={"secondary"}
          size={"icon"}
          className="absolute top-4 right-4"
          asChild
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="border-b border-solid p-5">
        <h1 className="mb-3 text-xl font-semibold">{barbershop?.name}</h1>
        <div className="mb-2 flex items-center gap-1">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-1">
          <StarIcon className="text-primary fill-primary" size={18} />
          <p className="text-sm">5,0</p>
        </div>
      </div>

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-1 text-xs font-bold text-gray-400 uppercase">
          Sobre Nos
        </h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-1 text-xs font-bold text-gray-400 uppercase">
          Serviços
        </h2>
        <div className="flex flex-col gap-2 p-2">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>

      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-1 text-xs font-bold text-gray-400 uppercase">
          Contatos
        </h2>
        <div className="space-y-3 p-5">
          {barbershop.phones.map((phone) => (
            <PhoneItem key={phone} phone={phone} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarberShopPage
