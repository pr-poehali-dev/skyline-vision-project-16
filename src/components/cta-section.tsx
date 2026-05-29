import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(239,68,68,1) 40px, rgba(239,68,68,1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(239,68,68,1) 40px, rgba(239,68,68,1) 41px)"
      }} />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-red-500/10 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA text */}
          <div className="slide-up">
            <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-4">Следующий шаг</p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Готовы перейти на российское оборудование?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Наши инженеры проведут бесплатный аудит вашей текущей сети и подготовят план
              перехода на DynaSwitch с минимальными рисками и без простоев.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-red-500 text-white hover:bg-red-600 pulse-button text-base px-8 py-4 font-geist"
              >
                Получить коммерческое предложение
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-500/50 text-white hover:bg-red-500/10 text-base px-8 py-4 bg-transparent font-geist"
              >
                Запросить тестовое оборудование
              </Button>
            </div>
          </div>

          {/* Right: product image */}
          <div className="relative flex items-center justify-center">
            <img
              src="https://cdn.poehali.dev/projects/a1418cb8-6045-4d01-92d6-d67aa7be91d1/bucket/30ec337d-84f0-4894-a19e-449a7019442a.png"
              alt="DynaSwitch"
              className="w-full max-w-lg object-contain"
              style={{ filter: "drop-shadow(0 0 60px rgba(239,68,68,0.3))" }}
            />
          </div>
        </div>

        {/* Logos / trust bar */}
        <div className="mt-16 pt-12 border-t border-red-500/20 text-center">
          <p className="font-space-mono text-gray-500 text-xs tracking-widest uppercase mb-8">
            Развёрнуто в инфраструктуре
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">
            {["Государственные структуры", "Банки и финтех", "Промышленные предприятия", "Коммерческие ЦОД", "Ритейл и телеком"].map((item) => (
              <span key={item} className="font-space-mono text-xs border border-red-500/20 rounded px-4 py-2 hover:text-gray-300 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
