import React from "react";
import { Link } from "react-scroll";
import { HiOutlineHome } from "react-icons/hi";
export function Header() {
	return (
		<nav>
			<ul className="flex justify-evenly items-center text-center px-4 sticky pt-4 font-bold">
				<li
					className="text-rose-700 transition  duration-300 :ease-in-out w-2/6 cursor-pointer h-full rounded-lg mx-2 hover:text-white"
					aria-label="Home Button"
				>
					<Link spy={true} smooth={true} to="home">
						Home
					</Link>
				</li>
				<li
					className="text-rose-700 transition  duration-300 :ease-in-out w-2/6 cursor-pointer h-full rounded-lg mx-2 hover:text-white"
					aria-label="Projects Button"
				>
					Projects
				</li>
				<li
					className="text-rose-700 transition  duration-300 :ease-in-out w-2/6 cursor-pointer h-full rounded-lg mx-2 hover:text-white"
					aria-label="About Button"
				>
					About
				</li>
			</ul>
		</nav>
	);
}
