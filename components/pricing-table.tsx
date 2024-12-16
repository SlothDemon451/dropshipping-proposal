import { Check, X } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingFeature {
  name: string
  basic: string | boolean
  pro: string | boolean
  business: string | boolean
}

const features: PricingFeature[] = [
  {
    name: "Social Media Marketing & Handling",
    basic: true,
    pro: true,
    business: true,
  },
  {
    name: "E-Commerce Setup",
    basic: "Basic",
    pro: "Advanced",
    business: "Advanced",
  },
  {
    name: "Virtual Assistance",
    basic: "Basic",
    pro: "Customizable",
    business: "Customizable",
  },
  {
    name: "Graphic Designing",
    basic: "Community",
    pro: "Community & Priority",
    business: "Community & 24 / 7 Premium",
  },
  {
    name: "Web Development",
    basic: "50",
    pro: "150",
    business: "350",
  },
  {
    name: "Video Editing/Animation",
    basic: true,
    pro: false,
    business: false,
  },
]

export default function PricingTable() {
  return (
    <div className="w-full p-4 md:p-6 lg:p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Our Plans
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Whether you're just starting out or running a large business, we have you covered with our range of services and features.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader className="text-center space-y-2">
              <h3 className="text-xl font-bold text-gray-900">BASIC</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">$5</span>
                <span className="text-gray-600 ml-2">/mo</span>
              </div>
              <p className="text-sm text-gray-600">charging $60 per year</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{feature.name}</span>
                  <span>
                    {typeof feature.basic === "boolean" ? (
                      feature.basic ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600">{feature.basic}</span>
                    )}
                  </span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-cyan-500 text-white hover:bg-cyan-600">
                Subscribe Now
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className={cn(
            "bg-white border-cyan-500 shadow-lg relative",
            "before:absolute before:-top-3 before:right-4 before:px-3 before:py-1",
            "before:bg-cyan-500 before:text-white before:text-sm before:font-bold",
            "before:content-['POPULAR'] before:rounded"
          )}>
            <CardHeader className="text-center space-y-2">
              <h3 className="text-xl font-bold text-gray-900">PRO</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">$15</span>
                <span className="text-gray-600 ml-2">/mo</span>
              </div>
              <p className="text-sm text-gray-600">Charging $180 per year</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{feature.name}</span>
                  <span>
                    {typeof feature.pro === "boolean" ? (
                      feature.pro ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600">{feature.pro}</span>
                    )}
                  </span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-cyan-500 text-white hover:bg-cyan-600">
                Subscribe Now
              </Button>
              <p className="text-xs text-gray-500 text-center w-full">
                Please Review our Terms & Conditions before buying.
              </p>
            </CardFooter>
          </Card>

          {/* Business Plan */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardHeader className="text-center space-y-2">
              <h3 className="text-xl font-bold text-gray-900">BUSINESS</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-5xl font-bold text-gray-900">$40</span>
                <span className="text-gray-600 ml-2">/mo</span>
              </div>
              <p className="text-sm text-gray-600">Charging $480 per year</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">{feature.name}</span>
                  <span>
                    {typeof feature.business === "boolean" ? (
                      feature.business ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <X className="w-5 h-5 text-red-500" />
                      )
                    ) : (
                      <span className="text-sm text-gray-600">{feature.business}</span>
                    )}
                  </span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full bg-cyan-500 text-white hover:bg-cyan-600">
                Subscribe Now
              </Button>
              <p className="text-xs text-gray-500 text-center w-full">
                Please Review our Terms & Conditions before buying.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

