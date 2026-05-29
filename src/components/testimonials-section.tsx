import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Директор по ИТ, ГК «Металлоинвест»",
    initials: "АГ",
    content:
      "Перешли на DynaSwitch в ядре сети после ухода Cisco. Миграция заняла 3 недели — меньше, чем планировали. Производительность не уступает предыдущему решению, а поддержка работает быстрее.",
  },
  {
    name: "Сергей Вольнов",
    role: "Руководитель NOC, DataLine",
    initials: "СВ",
    content:
      "Развернули Spine-Leaf фабрику на 48 коммутаторах DynaSwitch для нового зала ЦОД. Задержки в пределах спецификации, ZTP ускорил развёртку в 4 раза. Телеметрия gNMI интегрировалась с нашим Grafana без доработок.",
  },
  {
    name: "Наталья Фёдорова",
    role: "CISO, Региональный банк «Надёжность»",
    initials: "НФ",
    content:
      "Ключевым требованием был реестр Минпромторга и соответствие ФСТЭК для КИИ. iDATA предоставил всю документацию и прошёл аудит регулятора. Оборудование работает в продакшене 14 месяцев без единого инцидента.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-4">Отзывы клиентов</p>
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-orbitron">Нам доверяют IT-директора</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальный опыт эксплуатации от команд, которые уже перешли на DynaSwitch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0">
                    <span className="font-orbitron text-red-500 text-xs font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
