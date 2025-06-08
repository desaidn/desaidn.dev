import menuItems from '../../../constants/menu-items';
import Link from '../../common/Link';

export default function Ls() {
  return (
    <div className="-ml-2">
      {menuItems.map(item => (
        <div key={item.name} className="group">
          <Link
            href={item.path}
            external={false}
            className="relative flex items-center text-green-400 transition-all duration-300 ease-out hover:text-white hover:translate-x-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm py-1 px-2"
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2 text-white">
              &gt;
            </span>
            <span className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/20 transition-all duration-300 rounded-sm transform scale-x-0 group-hover:scale-x-100 origin-left" />
            <span className="relative z-10 tracking-wide transition-all duration-300 underline underline-offset-4">
              {item.name}
            </span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-green-400/10 blur-sm rounded-sm" />
          </Link>
        </div>
      ))}
    </div>
  );
}
