"use client"

import {Menu, MenuButton, MenuItem, MenuItems, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import React from "react";
import {classNames} from "@/utils";


const DropDown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-base px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-primary hover:bg-secondary">
                    Options
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-primary" aria-hidden="true" />
                </MenuButton>
            </div>

            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-primary' : 'text-secondary',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Account settings
                                </a>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-primary' : 'text-secondary',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    Support
                                </a>
                            )}
                        </MenuItem>
                        <MenuItem>
                            {({ focus }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        focus ? 'bg-gray-100 text-primary' : 'text-secondary',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    License
                                </a>
                            )}
                        </MenuItem>
                        <form method="POST" action="#">
                            <MenuItem>
                                {({ focus }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            focus ? 'bg-gray-100 text-primary' : 'text-secondary',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </Transition>
        </Menu>
    )
}

export default DropDown;
