import { useState } from 'react';
import menuItems from '../../../constants/menu-items';
import Link from '../../common/Link';

export default function Ls() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (
    itemName: string,
    href: string,
    event: React.MouseEvent
  ) => {
    const isTouchDevice =
      'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      event.preventDefault();
      setActiveItem(itemName);

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    }
  };

  return (
    <div className="-ml-2">
      {menuItems.map(item => {
        const isActive = activeItem === item.name;
        return (
          <div key={item.name} className="group">
            <Link
              href={item.path}
              external={false}
              className={`relative flex items-center transition-all duration-300 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm py-1 px-2 cursor-pointer ${
                isActive ? 'translate-x-2' : 'hover:translate-x-2'
              }`}
              onClick={e => handleItemClick(item.name, item.path, e)}
            >
              <span
                className={`transition-opacity duration-300 mr-2 text-white ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                &gt;
              </span>
              <span
                className={`absolute inset-0 transition-all duration-300 rounded-sm transform origin-left ${
                  isActive
                    ? 'bg-green-400/20 scale-x-100'
                    : 'bg-green-400/0 scale-x-0 group-hover:bg-green-400/20 group-hover:scale-x-100'
                }`}
              />
              <span
                className={`relative z-10 tracking-wide transition-all duration-300 underline underline-offset-4 ${
                  isActive
                    ? 'text-white'
                    : 'text-green-400 group-hover:text-white'
                }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute inset-0 transition-opacity duration-500 bg-green-400/10 blur-sm rounded-sm ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
