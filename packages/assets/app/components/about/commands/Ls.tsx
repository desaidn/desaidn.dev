import { memo } from 'react';
import menuItems from '../../../constants/menu-items';
import { useMobileAnimationWithId } from '../../../hooks/useMobileAnimation';
import Link from '../../common/Link';

const Ls = memo(() => {
  const { activeId, handleClick } = useMobileAnimationWithId();

  const handleItemClick = (
    itemName: string,
    href: string,
    external: boolean,
    event: React.MouseEvent
  ) => {
    if (external) {
      event.preventDefault();
    }
    handleClick(event, itemName, () => {
      if (external) {
        window.open(href, '_blank');
      } else {
        window.location.href = href;
      }
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
              external={item.external}
              className={`relative flex items-center transition-all duration-300 ease-out active:scale-95 focus:outline-none focus:ring-2 focus:ring-link/50 focus:ring-offset-2 focus:ring-offset-primary rounded-sm py-1 px-2 cursor-pointer ${
                isActive ? 'translate-x-2' : 'hover:translate-x-2'
              }`}
              onClick={e =>
                handleItemClick(item.name, item.path, item.external, e)
              }
            >
              <span
                className={`transition-opacity duration-300 mr-2 text-secondary ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                &gt;
              </span>
              <span
                className={`absolute inset-0 transition-all duration-300 rounded-sm transform origin-left ${
                  isActive
                    ? 'bg-link/20 scale-x-100'
                    : 'bg-link/0 scale-x-0 group-hover:bg-link/20 group-hover:scale-x-100'
                }`}
              />
              <span
                className={`relative z-10 tracking-wide transition-all duration-300 underline underline-offset-4 ${
                  isActive
                    ? 'text-secondary'
                    : 'text-link group-hover:text-secondary'
                }`}
              >
                {item.name}
              </span>
              <span
                className={`absolute inset-0 transition-opacity duration-500 bg-link/10 blur-sm rounded-sm ${
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
