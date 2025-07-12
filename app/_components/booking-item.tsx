import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const BookingItem = () => {
  return (
    <div>
      <h2 className="mt-6 mb-3 text-xs font-medium text-gray-400 uppercase">
        Agendamentos
      </h2>
      <Card className="">
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
  )
}

export default BookingItem
