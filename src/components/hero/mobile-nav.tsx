/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import GithubIcon from "../common/icons/github-icon";
import LinkedInIcon from "../common/icons/linkedin-icon";
import { useTranslation } from "next-i18next";
import FlagDropdown from "../common/flag-dropdown/flag-dropdown";

interface Props {
  isOpen: boolean;
  navigation: { name: string; href: string }[];
  onCloseSidebar: () => void;
}

const MobileNav: React.FC<Props> = ({ isOpen, navigation, onCloseSidebar }) => {
  const { t } = useTranslation("hero");

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={onCloseSidebar}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-grey-900/80" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-2xl flex-1 z-50">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-2 right-2 flex w-16 justify-center pt-5 ">
                  <button type="button" className="-m-2.5 p-2.5" onClick={onCloseSidebar}>
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-800 px-6 pb-2">
                <div className="flex h-16 shrink-0 items-center">
                  <img className="h-8 w-auto" src="./pn_green_logo.png" alt="Your Company" />
                </div>
                <nav className="flex flex-1 flex-col">
                  <div className="flex flex-col items-center justify-center gap-12">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={onCloseSidebar}
                        className="text-sm uppercase font-semibold leading-6 text-white hover:text-[#61C9A8]"
                      >
                        {t(item.name)}
                      </a>
                    ))}
                    <FlagDropdown />
                  </div>
                </nav>
                <div className="mb-24 flex flex-col items-center justify-center gap-6">
                  <div className="w-[80%] border boder-white"></div>
                  <h5 className="text-sm font-thin text-white tracking-[.25em] whitespace-nowrap">
                    {t("checkSocials")}
                  </h5>
                  <div className="flex gap-6">
                    <a href="https://github.com/pedro-novo" target="_blank">
                      <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/pedro-novo-teixeira" target="_blank">
                      <LinkedInIcon />
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNav;
