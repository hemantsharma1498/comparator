import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
function Header(props) {
  return (
    <section className="text-black bg-lgray">        
        
        {/* MAIN TEXT AND USER LOGIN/LOGOUT */}
        <div className="flex items-center justify-center p-6">
          <h1 className="text-6xl px-3 rounded-md shadow-lg py-1 bg-lmgray">
              NEW STREET JOURNAL
          </h1>
          <div className="fixed block right-20 mt-2 rounded-md border-2 border-gray shadow-lg py-1 hover:bg-lmgray transition-all ease-in-out delay-75" >

            <HomeMenu name={props.name}/>
          
          </div>

        </div>
        

        {/* NAVBAR */}
        <nav className="flex justify-center pb-3">
          <div className="px-2 hover:bg-lmgray transition-all ease-in-out delay-75">
            <a href="/content/home">
              Home            
              </a>
            
          </div>
          <div className="px-2 hover:bg-lmgray transition-all ease-in-out delay-75">
            <a href="/content-home">
              World            
              </a>
          </div>
          <div className="px-2 hover:bg-lmgray transition-all ease-in-out delay-75"> 
            <a href="/content-home">
              India            
              </a>            
          </div>
          <div className="px-2 hover:bg-lmgray transition-all ease-in-out delay-75">
            <a href="/content-home">
              Politics          
              </a>
          </div>
          <div className="px-2 hover:bg-lmgray transition-all ease-in-out delay-75">
            <a href="/content-home">
              Economy            
              </a>
          </div>
          <div className="px-2 hover:bg-lmgray transition-all ease-in-out delay-75"> 
            <a href="/content-home">
              Markets            
              </a>
          </div>
          <div className="px-2 hover:bg-lmgray transition-all ease-in-out delay-75">
            <a href="/content-home">
              Opinion            
              </a>
          </div>
          <div className="px-2 hover:bg-lmgray transition-all ease-in-out delay-75">
            <a href="/content-home">
              Real Estate            
              </a>
          </div>
        
      </nav>

        
    </section>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function HomeMenu(props){
  return(
    <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center py-1 px-6">
                    {props.name}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-44 rounded-md bg-white shadow-lg focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/acount-settings"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
  );
}

import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";


Header.defaultProps={
    title: 'News Feed'
}

export default Header
