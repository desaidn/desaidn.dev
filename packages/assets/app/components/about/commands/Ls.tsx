import { memo } from 'react';
import menuItems from '../../../constants/menu-items';
import { useMobileAnimationWithId } from '../../../hooks/useMobileAnimation';
import Link from '../../common/Link';

const Ls = memo(() => {
  const { activeId, handleClick } = useMobileAnimationWithId();

  const handleItemClick = (
    itemName: string,
    href: string,
    event: React.MouseEvent
  ) => {
    handleClick(event, itemName, () => {
      window.location.href = href;
    });
  };

  return (
    <div className="-ml-2">
      {menuItems.map(item => {
        const isActive = activeId === item.name;
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
});

export default Ls;
