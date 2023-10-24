/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  isOpen: boolean;
  navigation: { name: string; href: string }[];
  closeSibebar: () => void;
}

const MobileNav: React.FC<Props> = ({ isOpen, navigation, closeSibebar }) => {
  return (
    <Dialog as="div" className="lg:hidden" open={isOpen} onClose={closeSibebar}>
      <div className="fixed inset-0 z-50" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="./pn_green_logo.png" alt="" />
          </a>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400" onClick={closeSibebar}>
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/25">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base uppercase font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileNav;
