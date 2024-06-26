"use client"

import React, {useEffect} from 'react'
import {Disclosure, DisclosureButton, DisclosurePanel,} from '@headlessui/react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import DropDown from "@/components/DropDown";
import {getURL} from "next/dist/shared/lib/utils";
import {classNames} from "@/utils";
import theme from "tailwindcss/defaultTheme";
import LinkMainPage from "@/components/LinkMainPage";

const navigation = [
    { name: 'Main Page', href: '/car', current: true },
    { name: 'Search', href: '/car/1', current: false },
    { name: 'About', href: '/car/search', current: false },
    { name: 'Admin', href: '/admin', current: false },
]

const Main = () => {
    useEffect(()=>{
        navigation.forEach(n=> {
            const actualUrl = n.href;
            if (getURL().substring(0, actualUrl.length) == actualUrl) {
                n.current = true
            }
        })
    })

    return (
        <Disclosure as="nav" className="backdrop-blur z-50 header sticky top-0">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
                        <div className="relative flex h-full items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="nav-content flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center text-primary font-extrabold text-2xl">
                                    <LinkMainPage />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-grey text-text-hover' : 'text-text-base hover:bg-grey hover:text-text-hover',
                                                    'rounded-md px-3 py-2 text-sm font-extrabold'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <DropDown />
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden bg-base text-text-base">
                        <div className="space-y-1 px-2 pb-3 pt-2 border-b border-primary backdrop-brightness-100">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}


export default Main;
