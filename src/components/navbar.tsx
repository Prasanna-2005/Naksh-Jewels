"use client";
'use client';
import { useRouter } from 'next/navigation';

import React, { useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
  PlusIcon,
  TrashIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";


// Jewel-related SVG icons
const DiamondIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <g>
      <polygon points="12,2 2,9 12,22 22,9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <polyline points="2,9 22,9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <polyline points="7,9 12,22 17,9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <polyline points="12,2 7,9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <polyline points="12,2 17,9" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </g>
  </svg>
);

const RingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="15" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="15" rx="4" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <rect x="10" y="2" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <line x1="12" y1="6" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const EarringIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="17" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <path d="M12 14V4" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="4" r="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
  </svg>
);

const BraceletIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none">
    <ellipse cx="12" cy="12" rx="8" ry="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="5" ry="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    <circle cx="4" cy="12" r="1" fill="currentColor"/>
    <circle cx="20" cy="12" r="1" fill="currentColor"/>
  </svg>
);

const NAV_MENU = [
  {
    name: "Necklaces",
    icon: DiamondIcon,
    href: "#",
    subItems: [
      { name: "Gold Necklaces", href: "#" },
      { name: "Diamond Necklaces", href: "#" },
      { name: "Pearl Necklaces", href: "#" },
      { name: "Pendant Necklaces", href: "#" },
      { name: "Choker Necklaces", href: "#" },
      { name: "Layered Necklaces", href: "#" },
    ],
  },
  {
    name: "Rings",
    icon: RingIcon,
    href: "#",
    subItems: [
      { name: "Engagement Rings", href: "#" },
      { name: "Wedding Bands", href: "#" },
      { name: "Diamond Rings", href: "#" },
      { name: "Statement Rings", href: "#" },
      { name: "Stackable Rings", href: "#" },
      { name: "Signet Rings", href: "#" },
    ],
  },
  {
    name: "Earrings",
    icon: EarringIcon,
    href: "#",
    subItems: [
      { name: "Stud Earrings", href: "#" },
      { name: "Hoop Earrings", href: "#" },
      { name: "Drop Earrings", href: "#" },
      { name: "Dangle Earrings", href: "#" },
      { name: "Huggie Earrings", href: "#" },
      { name: "Clip-On Earrings", href: "#" },
    ],
  },
  {
    name: "Bracelets",
    icon: BraceletIcon,
    href: "#",
    subItems: [
      { name: "Bangle Bracelets", href: "#" },
      { name: "Cuff Bracelets", href: "#" },
      { name: "Charm Bracelets", href: "#" },
      { name: "Tennis Bracelets", href: "#" },
      { name: "Chain Bracelets", href: "#" },
      { name: "Beaded Bracelets", href: "#" },
    ],
  },
];

function MobileNavItem({ name, icon: Icon, subItems }: { name: string; icon: any; subItems: any[] }) {
  const [open, setOpen] = useState(false);
  
  return (
    <Accordion open={open} icon={open ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}>
      <AccordionHeader onClick={() => setOpen(!open)} className="border-b-0 p-3">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5" />
          <Typography className="font-medium text-gray-900">{name}</Typography>
        </div>
      </AccordionHeader>
      <AccordionBody className="py-1">
        <div className="grid grid-cols-1 gap-1 pl-8">
          {subItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="py-2 px-3 rounded-lg hover:bg-blue-gray-50 transition-colors"
            >
              <Typography className="font-normal text-gray-700">
                {item.name}
              </Typography>
            </a>
          ))}
        </div>
      </AccordionBody>
    </Accordion>
  );
}

function DesktopNavItem({ children, href, subItems }: { children: React.ReactNode; href?: string; subItems?: any[] }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const renderItems = subItems?.map((item, key) => (
    <MenuItem key={key} className="flex items-center gap-3 rounded-lg">
      <Typography
        as="a"
        href={item.href}
        variant="small"
        className="font-normal flex items-center gap-2"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-gray-300"></span>
        {item.name}
      </Typography>
    </MenuItem>
  ));

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen}>
      <MenuHandler>
        <Typography
          as="a"
          href={href || "#"}
          variant="small"
          className="font-medium flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-blue-gray-50/50 transition-colors"
        >
          {children}
          {subItems && (
            <ChevronDownIcon
              className={`h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
            />
          )}
        </Typography>
      </MenuHandler>
      {subItems && (
        <MenuList
          className="hidden max-h-[60vh] w-[280px] overflow-auto rounded-xl p-3 lg:grid border-0 shadow-lg shadow-black/10"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(12px)",
          }}
        >
          <ul className="grid grid-cols-1 gap-1">
            {renderItems}
          </ul>
        </MenuList>
      )}
    </Menu>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setIsScrolling(true) : setIsScrolling(false);
    });
  }, []);
  const router = useRouter();

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0 transition-colors duration-300"
    >
      <div className="container mx-auto flex items-center justify-between gap-4 py-2">
        {/* Logo */}
        <Typography
          as="a"
          href="/"
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold whitespace-nowrap hover:underline transition"
        >
          NAKSH JEWELS
        </Typography>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-xs mx-4 hidden sm:block">
          <input
            type="text"
            placeholder="Search for jewels....."
            className="w-full rounded-full border border-gray-900 bg-white/10 py-2 pl-10 pr-4 text-gray-900 shadow-none focus:border-blue-400 focus:bg-white/30 focus:ring-2 focus:ring-blue-100 transition backdrop-blur-sm"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-blue-gray-400" />
        </div>

        {/* Desktop Navigation */}
        <ul className="ml-4 hidden items-center gap-1 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href, subItems }) => (
            <li key={name}>
              <DesktopNavItem href={href} subItems={subItems}>
                <Icon className="h-5 w-5" />
                <span className={isScrolling ? "text-gray-900" : "text-white"}>
                  {name}
                </span>
              </DesktopNavItem>
            </li>
          ))}
        </ul>

        {/* Action Icons */}
        <div className="hidden items-center gap-2 lg:flex">
          <IconButton 
            variant="text" 
            color={isScrolling ? "gray" : "white"} 
            className="rounded-full"
            onClick={() => router.push('/add')}   
          >
            <PlusIcon className="h-5 w-5" />
          </IconButton>
          <IconButton 
            variant="text" 
            color={isScrolling ? "gray" : "white"} 
            className="rounded-full"
            onClick={() => router.push('/delete')}   
          >
            <TrashIcon className="h-5 w-5" />
          </IconButton>
        </div>

        {/* Mobile Toggle */}
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={() => setOpen(!open)}
          className="ml-auto lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Mobile Navigation */}
      <Collapse open={open}>
        <div
          className="container mx-auto mt-3 rounded-xl bg-white p-4 shadow-xl"
          style={{
            maxHeight: "calc(100vh - 72px)", // Adjust 72px to your navbar height if needed
            overflowY: "auto",
          }}
        >
          <ul className="flex flex-col gap-1">
            {NAV_MENU.map(({ name, icon: Icon, subItems }) => (
              <li key={name}>
                <MobileNavItem name={name} icon={Icon} subItems={subItems} />
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <Button variant="text" className="flex items-center gap-2 rounded-full" onClick={() => router.push('/add')}  >
              <PlusIcon className="h-5 w-5" />
              Add
            </Button>
            <Button variant="text" className="flex items-center gap-2 rounded-full" onClick={() => router.push('/remove')}  >
              <TrashIcon className="h-5 w-5" />
              Delete
            </Button>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;