import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BarberShop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BarbershopItemProps {
    barbershop: BarberShop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    return (
        <Card className="min-w-[167px] rounded-2xl p-0">
            <CardContent className="p-0 px-2 pt-2">
                <div className="relative h-[159px] w-full">
                    <Image
                        src={barbershop.imageUrl}
                        alt={barbershop.name}
                        fill
                        className="object-cover rounded-2xl"
                    />

                    <Badge className="absolute top-2 left-2 " variant={"secondary"} >
                        <StarIcon size={16} className="fill-primary text-primary" />
                        <p className="text-xs font-semibold">5,0</p>
                    </Badge>
                </div>
                <div className="px-1 py-3">
                    <h3 className="font-semibold truncate">{barbershop.name}</h3>
                    <p className="text-sm text-gray-400 truncate">{barbershop.address}</p>
                    <Button variant="secondary" className="mt-3 w-full">
                        <Link href={`barbershops/${barbershop.id}`}>
                            Reservar
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default BarbershopItem;