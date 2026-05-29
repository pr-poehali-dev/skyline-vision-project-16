import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Есть ли DynaSwitch в реестре российского ПО или Минпромторга?",
      answer:
        "Да. Линейка DynaSwitch внесена в реестр радиоэлектронной продукции Минпромторга РФ. Оборудование доступно для государственных закупок по 44-ФЗ и 223-ФЗ. Реестровый номер и подтверждающие документы предоставляются по запросу.",
    },
    {
      question: "Как происходит миграция с Cisco / Juniper / Huawei?",
      answer:
        "DynaSwitch поддерживает стандартные протоколы (BGP, OSPF, VXLAN, EVPN) и CLI-совместим с основными платформами. Наша команда проводит аудит текущей конфигурации, готовит план миграции и сопровождает переключение. Большинство проектов завершается за 2–4 недели без остановки сервисов.",
    },
    {
      question: "Какой срок гарантии и условия технической поддержки?",
      answer:
        "Стандартная гарантия — 5 лет. Техническая поддержка доступна в форматах 8×5 NBD (замена на следующий рабочий день) и 24×7 с SLA 4 часа для критической инфраструктуры. Склад ЗИП находится в Москве — срок доставки в регионы 1–3 дня.",
    },
    {
      question: "Поддерживает ли DynaSwitch автоматизацию через Ansible / Terraform?",
      answer:
        "Да. DynaOS поддерживает Ansible (официальный модуль), Terraform, OpenConfig и gNMI/gRPC для потоковой телеметрии. Есть REST API и поддержка NETCONF/YANG. Примеры плейбуков доступны в публичном репозитории.",
    },
    {
      question: "Можно ли использовать DynaSwitch на объектах КИИ?",
      answer:
        "Да. Оборудование соответствует требованиям приказов ФСТЭК для категорированных объектов КИИ. Поддерживается сегрегация сетей, ролевой контроль доступа, аудит событий и экспорт логов в SIEM. Готовы предоставить техническое описание для регулятора.",
    },
    {
      question: "Как оформить коммерческое предложение или запросить тестовое оборудование?",
      answer:
        "Нажмите «Получить КП» на сайте или напишите на почту. Мы готовим КП в течение 1 рабочего дня. Для пилотных проектов доступна программа тестовой аренды оборудования сроком до 30 дней.",
    },
  ]

  return (
    <section id="faq" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-space-mono text-red-500 text-xs tracking-[0.3em] uppercase mb-4">Частые вопросы</p>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-4">Вопросы и ответы</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Всё, что важно знать перед выбором DynaSwitch для вашей инфраструктуры
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-red-500/20 rounded-xl px-6 bg-white/[0.02] hover:bg-red-500/5 transition-colors"
            >
              <AccordionTrigger className="font-geist text-foreground font-medium hover:text-red-500 transition-colors py-5 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-geist text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
