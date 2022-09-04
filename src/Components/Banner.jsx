import React from "react";
import { FaReact, FaAngular } from "react-icons/fa";
import {
	SiCsharp,
	SiTailwindcss,
	SiNextdotjs,
	SiFirebase
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiPhp } from "react-icons/di";

export function Banner() {
	return (
		<section name="homeBanner" className="w-100 pt-10 px-2">
			<div className="  flex flex-col justify-center items-center rounded-lg">
				<span className="p-16 rounded">
					<div className="text-xl  ">
						<span className=" underline decoration-2 decoration-red-500 flex flex-row">
							Hey, I'm Sam. The Software Strongman.
						</span>

						<span className="flex-row">
							I'm a full stack developer with experience in
						</span>

						<span className="pt-4 flex flex-row justify-evenly">
							<FaReact
								size={30}
								className="hover:text-blue-300 duration-200 :ease-in-out"
							/>
							<FaAngular
								size={30}
								className="hover:text-red-600 duration-200 :ease-in-out"
							/>
							<SiCsharp
								size={30}
								className="hover:text-purple-600 duration-200 :ease-in-out"
							/>
							<SiTailwindcss
								size={30}
								className="hover:text-blue-200 duration-200 :ease-in-out"
							/>
							<SiNextdotjs
								size={30}
								className="hover:text-slate-800 hover:bg-white hover:rounded-full hover:border-solid hover:border-2 hover:border-white  duration-200 :ease-in-out"
							/>
							<SiFirebase
								size={30}
								className="hover:text-orange-300 duration-200 :ease-in-out"
							/>
							<AiOutlineConsoleSql
								size={30}
								className="hover:text-red-500 duration-200 :ease-in-out"
							/>
						</span>
					</div>
				</span>
			</div>
		</section>
	);
}
