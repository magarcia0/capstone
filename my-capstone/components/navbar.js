import Link from 'next/link';
import { siteTitle } from '../components/layout';

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/search', label: 'Search' },
  { href: '/about', label: 'About' },
];

export default function Nav() {
  return (
    <nav className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white">
      <ul className="flex items-center justify-between p-1 list-none">
        <li>
          <Link href="/">
            <a className="pl-2 md:pl-8 text-red-900 no-underline dark:text-gray-400 md:text-3xl text-xl font-bold hover:text-blue-400 dark:hover:text-gray-300">
              {siteTitle}
            </a>
          </Link>
        </li>

        <ul className="flex items-center justify-between list-none">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <div className="no-underline px-4 py-2 font-bold text-black dark:text-gray-400 hover:text-blue-400 dark:hover:text-gray-300">
                <Link href={href}>{label}</Link>
              </div>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}