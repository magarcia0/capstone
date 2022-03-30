import { siteTitle } from '../components/layout';

export default function Footer() {
  return (
    <div className='dark:bg-slate-900'>
      <footer className="mt-32 text-gray-700 bg-white border-t body-font dark:bg-slate-900 dark:text-white">
        <div className="grid grid-cols-2">
          <div className="container flex flex-col flex-wrap px-5 py-6 lg:px-20 sm:flex-row">
            <div className=" dark:bg-slate-900 flex flex-wrap items-center justify-center text-base ">
              <p className="mr-5 text-sm text-center">© {siteTitle} 2022</p>
              <a href="mailto:wildcatplusplus@gmai.com" className="mr-5 text-sm text-center hover:underline">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}