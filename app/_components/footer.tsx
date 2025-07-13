import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-1">
          <p className="text-sm text-gray-400">
            © 2023 Copyright <span className="font-bold">Patric</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
