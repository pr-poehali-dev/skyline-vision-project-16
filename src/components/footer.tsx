import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-2">
              i<span className="text-red-500">DATA</span>
            </h2>
            <p className="font-space-mono text-red-500 text-xs tracking-widest uppercase mb-4">DynaSwitch · Российский вендор</p>
            <p className="font-space-mono text-gray-400 mb-6 max-w-md text-sm leading-relaxed">
              Enterprise-сетевое оборудование для корпоративных ЛВС, ЦОД и филиальных сетей.
              Производство и поддержка в России.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Send" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Icon name="Mail" size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Продукты</h3>
            <ul className="space-y-2">
              <li>
                <a href="#technology" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  DynaSwitch DS58010-32S
                </a>
              </li>
              <li>
                <a href="#technology" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Коммутаторы ЦОД
                </a>
              </li>
              <li>
                <a href="#technology" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Коммутаторы ЛВС
                </a>
              </li>
              <li>
                <a href="#technology" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Беспроводные точки доступа
                </a>
              </li>
              <li>
                <a href="#technology" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  DynaOS (NOS)
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  О компании
                </a>
              </li>
              <li>
                <a href="#safety" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Сертификаты
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Кейсы внедрений
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Вопросы и ответы
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200 text-sm">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 iDATA. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Политика конфиденциальности
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
