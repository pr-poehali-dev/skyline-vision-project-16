export function TechnologySection() {
  const specs = [
    { label: "Коммутационная матрица", value: "12,8 Тбит/с" },
    { label: "Портов 100GE QSFP28", value: "32" },
    { label: "Портов 10GE SFP+", value: "4 breakout" },
    { label: "Задержка (cut-through)", value: "< 1 мкс" },
    { label: "Таблица MAC-адресов", value: "288 000" },
    { label: "Маршрутов IPv4/IPv6", value: "до 128K / 64K" },
    { label: "Питание (резервное)", value: "2× 650W AC/DC" },
    { label: "Форм-фактор", value: "1U, 19\" стойка" },
  ]

  return (
    <section id="technology" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: product image */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-red-500/5 rounded-3xl blur-3xl" />
            <img
              src="https://cdn.poehali.dev/projects/a1418cb8-6045-4d01-92d6-d67aa7be91d1/bucket/30ec337d-84f0-4894-a19e-449a7019442a.png"
              alt="iDATA DynaSwitch DS58010-32S"
              className="relative w-full max-w-xl mx-auto object-contain"
              style={{ filter: "drop-shadow(0 0 60px rgba(239,68,68,0.25))" }}
            />
            {/* model label */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 border border-red-500/30 rounded-lg px-4 py-2 text-center">
              <div className="font-orbitron text-white text-sm font-bold">DS58010-32S</div>
              <div className="font-space-mono text-red-500 text-xs mt-0.5">100G Data Center Switch</div>
            </div>
          </div>

          {/* Right: specs */}
          <div>
            <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-4">Технические характеристики</p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6">
              Производительность без компромиссов
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              DynaSwitch DS58010-32S — флагманский коммутатор уровня ядра для ЦОД и корпоративных сетей. 
              Аппаратный ASIC обеспечивает детерминированную производительность при любой нагрузке.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specs.map((spec, i) => (
                <div key={i} className="flex justify-between items-center border border-red-500/20 rounded-lg px-4 py-3 bg-white/[0.02] hover:bg-red-500/5 transition-colors">
                  <span className="font-space-mono text-gray-400 text-xs">{spec.label}</span>
                  <span className="font-orbitron text-white text-sm font-bold">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl border border-red-500/30 bg-red-500/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="font-space-mono text-red-400 text-sm">
                  Внесён в реестр Минпромторга РФ · Реестровый номер доступен по запросу
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
