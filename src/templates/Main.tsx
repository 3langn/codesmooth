import Link from 'next/link';
import type { FC, PropsWithChildren, ReactNode } from 'react';
import { useEffect, useState } from 'react';

import Navigate from '@/common/Navigate';

type IMainProps = {
  meta: ReactNode;
  children?: ReactNode;
  headerChildren?: ReactNode;
  isLoading?: boolean;
};

export const Header: FC<PropsWithChildren> = (props) => {
  return (
    <nav className="fixed top-0 z-10 flex h-16 w-full items-center border-0 border-b border-solid border-gray-300 bg-white shadow-md transition duration-300 ease-in-out">
      <Link href="/" className="flex items-center justify-start gap-2 px-2">
        <img src="/logo-96.png" alt="Logo" className="ml-4 h-8 w-8" />
        <span className="text-lg font-bold">Code Smooth</span>
      </Link>
      <div className="h-full flex-row pl-8">
        <Navigate />
      </div>
      {props.children}
      {/* <div className="flex h-full flex-auto items-center justify-end">
          <button className="mr-2 gap-x-2.5 lg:flex">
            <span>
              <SearchIcon />
            </span>
            <span>Search</span>
          </button>
          <div className="mx-4 h-8 border-0 border-l border-solid border-gray-200 dark:border-dark-90 lg:block"></div>
          <div className="mx-2 flex h-[full] w-[38px] cursor-pointer items-center p-1">
            <img
              className="shrink-0 rounded-full bg-gray-400 dark:bg-gray-900 "
              src="https://avatars.githubusercontent.com/u/76799726?v=4"
              alt=""
            />
          </div>
        </div> */}
    </nav>
  );
};

const Main = (props: IMainProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log('!!!!!!!!!!!!!!!!');

    if (progress === 100) {
      console.log('clear1');

      setProgress(0);
    }
    const timer = setInterval(() => {
      if (progress < 90) {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }
      if (!props.isLoading) {
        console.log('clear2');
        setProgress(0);
        clearInterval(timer);
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [props.isLoading]);

  return (
    <div>
      <Header>{props.headerChildren}</Header>
      <div className="flex flex-col items-center bg-white pt-16">{props.children}</div>
      {props.isLoading && (
        <div className="fixed top-0 left-0 z-50 h-1 w-full animate-pulse bg-gradient-to-r from-blue-200 to-blue-400">
          <div
            className="h-full w-[0%] bg-blue-600 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export { Main };
