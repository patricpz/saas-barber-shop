import Image from "next/image"
import { BarberShopServices } from "@prisma/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceItemProps {
  service: BarberShopServices
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent>
        <div className="flex items-center gap-3">
          <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
            <Image
              alt={service.name}
              src={service.imageUrl}
              fill
              className="rounded-lg object-cover"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold">{service.name}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-primary text-sm font-bold">
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(Number(service.price))}
              </p>
              <Button variant="secondary">Reservar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
