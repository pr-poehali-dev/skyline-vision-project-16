import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const features = [
  {
    title: "Высокая пропускная способность",
    description: "До 12,8 Тбит/с коммутационной матрицы. Нулевые потери пакетов при 100% нагрузке — идеально для ЦОД и High-Availability кластеров.",
    icon: "Zap",
    badge: "ЦОД",
  },
  {
    title: "Российский реестр",
    description: "Внесено в реестр Минпромторга РФ. Соответствует требованиям ФЗ-187 и приказа ФСТЭК для КИИ. Замена иностранного оборудования без потери функциональности.",
    icon: "ShieldCheck",
    badge: "Сертификат",
  },
  {
    title: "Гибкая архитектура",
    description: "Поддержка VXLAN, EVPN, BGP, OSPF и SR-MPLS. Построение Spine-Leaf фабрик любого масштаба под корпоративные ЛВС и мультиарендные ЦОД.",
    icon: "Network",
    badge: "SDN",
  },
  {
    title: "Аппаратный ASIC",
    description: "Собственный ASIC-чип с детерминированной задержкой менее 1 мкс. Аппаратная обработка ACL, QoS, зеркалирования и телеметрии.",
    icon: "Cpu",
    badge: "ASIC",
  },
  {
    title: "Отказоустойчивость",
    description: "Горячая замена блоков питания и вентиляторов. Dual-supervisor для непрерывной работы. Время переключения при сбое — менее 50 мс (BFD + ECMP).",
    icon: "RefreshCw",
    badge: "HA",
  },
  {
    title: "Открытый NOS",
    description: "Операционная система DynaOS на базе Linux с открытым API. Поддержка Ansible, Terraform, OpenConfig и gNMI для автоматизации сетевых операций.",
    icon: "Terminal",
    badge: "Автоматизация",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-4">Технические возможности</p>
          <h2 className="text-4xl font-bold text-foreground mb-4 font-orbitron">DynaSwitch — не компромисс</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Enterprise-уровень производительности, российская сертификация и полный стек автоматизации в одном решении
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Icon name={feature.icon} size={20} className="text-red-500" />
                  </div>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
