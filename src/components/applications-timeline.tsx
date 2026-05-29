import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Корпоративная ЛВС",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Построение отказоустойчивой сети предприятия любого масштаба. DynaSwitch обеспечивает
            высокую доступность на уровне доступа, агрегации и ядра с поддержкой MLAG и VPC.
          </p>
          <div className="mb-8 rounded-xl overflow-hidden border border-red-500/20">
            <img
              src="https://cdn.poehali.dev/projects/a1418cb8-6045-4d01-92d6-d67aa7be91d1/bucket/30ec337d-84f0-4894-a19e-449a7019442a.png"
              alt="DynaSwitch для корпоративной ЛВС"
              className="w-full object-contain bg-black p-6"
              style={{ filter: "drop-shadow(0 0 30px rgba(239,68,68,0.15))" }}
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              Резервирование каналов (LACP / ECMP)
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              Сегментация через VLAN и VRF
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              Приоритизация трафика QoS для VoIP и видео
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Центры обработки данных",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Spine-Leaf архитектура на базе DynaSwitch DS58010-32S для частных и коммерческих ЦОД.
            VXLAN/EVPN обеспечивает масштабируемую мультиарендную L2/L3 фабрику без ограничений.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              Spine-Leaf без блокировок с ECMP 128-way
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              Телеметрия gNMI / sFlow в реальном времени
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              Интеграция с VMware NSX, OpenStack, Kubernetes
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Филиальные сети",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Унифицированное управление распределённой инфраструктурой через единую платформу DynaOS.
            Централизованный контроль и автоматизация конфигурации для сотен точек присутствия.
          </p>
          <div className="mb-8 rounded-xl overflow-hidden border border-red-500/20">
            <img
              src="https://cdn.poehali.dev/projects/a1418cb8-6045-4d01-92d6-d67aa7be91d1/bucket/cc362871-3815-4bdf-81c4-1cc8f2b32b80.png"
              alt="iDATA точка доступа для филиальных сетей"
              className="w-full object-contain bg-black p-6"
              style={{ filter: "drop-shadow(0 0 30px rgba(239,68,68,0.15))" }}
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              Zero-Touch Provisioning (ZTP) при развёртке
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              SD-WAN и управление полосой пропускания
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
              Резервные каналы с автоматическим переключением
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-4">Применения</p>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6">
            Одна платформа — три задачи
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            DynaSwitch закрывает полный стек потребностей: от рабочего места сотрудника до ядра
            гипермасштабируемого ЦОД — без смены вендора и экосистемы управления.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
