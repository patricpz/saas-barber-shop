import { Card, CardContent } from "@/components/ui/card"
import { CopyrightIcon } from "lucide-react"

const Footer = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center">
        <CopyrightIcon size={16} className="text-muted-foreground" />
        <p className="text-muted-foreground pl-2 text-sm">2023 Copyright </p>
        <p className="text-muted-foreground pl-1.5 text-sm font-bold">Patric</p>
      </CardContent>
    </Card>
  )
}

export default Footer
