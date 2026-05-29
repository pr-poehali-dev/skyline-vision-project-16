import Icon from "@/components/ui/icon"

const stats = [
  { value: "2017", label: "год основания" },
  { value: "150+", label: "внедрений в РФ" },
  { value: "3", label: "линейки продуктов" },
  { value: "24/7", label: "техподдержка" },
]

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-4">О компании</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              iDATA — российский вендор с DNA инженера
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Мы проектируем и производим сетевое оборудование для задач, где важна надёжность,
              производительность и независимость от зарубежных поставщиков.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              DynaSwitch — это не адаптированный white-label. Это собственная аппаратная платформа
              с авторским ASIC и операционной системой DynaOS, разработанными командой iDATA в России.
            </p>

            <div className="space-y-4">
              {[
                { icon: "MapPin", text: "Разработка и производство в России" },
                { icon: "Cpu", text: "Собственный ASIC и операционная система DynaOS" },
                { icon: "Users", text: "Прямая поддержка без посредников" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={16} className="text-red-500" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats + image */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-6 border border-red-500/20 rounded-xl bg-white/[0.02] text-center hover:bg-red-500/5 transition-colors"
                >
                  <div className="font-orbitron text-3xl font-bold text-red-500 mb-1">{stat.value}</div>
                  <div className="font-space-mono text-gray-400 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-red-500/20">
              <img
                src="https://cdn.poehali.dev/projects/a1418cb8-6045-4d01-92d6-d67aa7be91d1/bucket/cc362871-3815-4bdf-81c4-1cc8f2b32b80.png"
                alt="iDATA беспроводная точка доступа"
                className="w-full object-contain bg-black p-8"
                style={{ filter: "drop-shadow(0 0 40px rgba(239,68,68,0.2))" }}
              />
              <div className="absolute bottom-4 left-4 bg-black/80 border border-red-500/30 rounded-lg px-3 py-2">
                <div className="font-orbitron text-white text-xs font-bold">WAP-6000 Series</div>
                <div className="font-space-mono text-red-500 text-xs">Wi-Fi 6E Access Point</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
