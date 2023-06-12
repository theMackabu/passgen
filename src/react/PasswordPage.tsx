import { nanoid } from 'nanoid';
import '@github/clipboard-copy-element';
import { useEffect, useState } from 'react';
import { useAddToHomescreenPrompt } from '../hooks/installApp';

const PasswordPage = () => {
	const length = 22;
	const [password, setPassword] = useState(nanoid(length));
	const [prompt, promptToInstall] = useAddToHomescreenPrompt();

	return (
		<div className="relative dark:bg-gray-900 select-none transition duration-500">
			<div className="flex flex-col justify-center items-center w-screen h-screen transition duration-500">
				<h5 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white transition">Password Generator</h5>
				<div className="p-6 pt-2 w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition duration-500">
					<span className="text-xs text-gray-700 dark:text-gray-400">Generated Password</span>
					<clipboard-copy value={password}>
						<div className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 placeholder:text-xl mb-3 font-bold text-xl text-center cursor-pointer hover:ring-2 hover:ring-blue-500 hover:border-blue-500 hover:dark:ring-blue-600 hover:dark:border-blue-600 hover:text-gray-900 hover:dark:text-gray-100 transition duration-500">
							{password}
						</div>
					</clipboard-copy>
					<div className="flex">
						<button
							onClick={() => setPassword(nanoid(length))}
							className="text-center w-full block py-2 px-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 ring-0 dark:bg-blue-500 dark:hover:bg-blue-600 dark:ring-0 transition cursor-pointer transition duration-500 focus:ring-0 focus:dark:ring-0 outline-none">
							New password
						</button>
					</div>
				</div>
				<span className="font-normal text-gray-400 mt-2 text-xs transition duration-500">nanoid :3</span>
			</div>
			<div className="absolute top-5 left-5 transition duration-500">
				<a href="https://github.com/theMackabu" className="font-normal text-gray-400 mt-2 text-xs hover:text-blue-300">
					0.3.0 by theMackabu
				</a>
			</div>
			<div className="absolute top-5 right-5">
				<button
					onClick={promptToInstall}
					className="cursor-pointer rounded py-1 px-2 bg-gray-100 border border-gray-50 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 shadow-sm text-sm transition duration-500 font-medium hover:text-green-700 hover:dark:text-teal-300">
					Install?
				</button>
			</div>
		</div>
	);
};

export default PasswordPage;
