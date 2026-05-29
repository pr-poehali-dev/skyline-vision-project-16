import Icon from "@/components/ui/icon"

const certifications = [
  {
    icon: "ShieldCheck",
    title: "Реестр Минпромторга РФ",
    description: "Оборудование включено в реестр российской радиоэлектронной продукции. Доступно для государственных закупок по 44-ФЗ и 223-ФЗ.",
  },
  {
    icon: "Lock",
    title: "Соответствие ФСТЭК",
    description: "Выполнены требования приказов ФСТЭК для объектов КИИ. Поддержка сегрегации сетей, контроля доступа и аудита событий безопасности.",
  },
  {
    icon: "FileCheck",
    title: "ГОСТ Р сертификация",
    description: "Все продукты прошли сертификацию по российским стандартам электромагнитной совместимости и электробезопасности.",
  },
  {
    icon: "Building2",
    title: "Техподдержка в РФ",
    description: "Собственная инженерная команда и склад ЗИП в России. SLA от 4 часов для критической инфраструктуры, NBD для стандартных контрактов.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-4">Соответствие и сертификация</p>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
            Готово к работе в регулируемых средах
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            iDATA проходит всю необходимую российскую сертификацию, чтобы вы могли использовать оборудование
            в государственных, банковских и промышленных проектах без дополнительных согласований.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 border border-red-500/20 rounded-xl bg-white/[0.02] hover:bg-red-500/5 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <Icon name={cert.icon} size={24} className="text-red-500" />
              </div>
              <div>
                <h3 className="font-orbitron text-white font-bold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Import substitution banner */}
        <div className="relative rounded-2xl overflow-hidden border border-red-500/30 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/5 p-8 md:p-12">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(239,68,68,0.5) 30px, rgba(239,68,68,0.5) 31px), repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(239,68,68,0.5) 30px, rgba(239,68,68,0.5) 31px)"
            }} />
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-center">
            <div className="md:col-span-2">
              <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-3">Импортозамещение</p>
              <h3 className="font-orbitron text-white text-2xl md:text-3xl font-bold mb-3">
                Замена Cisco, Juniper, Huawei — без потери функциональности
              </h3>
              <p className="text-gray-300 leading-relaxed">
                DynaSwitch поддерживает стандартные протоколы и CLI-совместим с ведущими зарубежными платформами.
                Миграция с минимальными изменениями в конфигурации.
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center md:items-end">
              <div className="text-center">
                <div className="font-orbitron text-4xl font-bold text-red-500">100%</div>
                <div className="font-space-mono text-gray-400 text-xs mt-1">российское ПО (NOS)</div>
              </div>
              <div className="text-center">
                <div className="font-orbitron text-4xl font-bold text-red-500">5 лет</div>
                <div className="font-space-mono text-gray-400 text-xs mt-1">гарантия производителя</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
