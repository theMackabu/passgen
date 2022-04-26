// @ts-nocheck

import React, { useEffect, useState, Fragment } from 'react';
import { useQuery } from 'react-query';
import LoadingBar from 'react-top-loading-bar';
import tw from 'twin.macro';
import Link from 'next/link';
import Head from 'next/head';
import { useTheme } from 'next-themes';
import { getVersion } from 'app/api';
import Loading from 'components/Loading';
import Spinner from 'components/Spinner';
import Modal from 'react-modal';
import Fade from 'components/Fade';
import CopyOnClick from 'components/CopyOnClick';
import { useAddToHomescreenPrompt } from 'hooks/homePWA';
import { nanoid } from 'nanoid';
import { SunIcon, MoonIcon, CogIcon } from '@heroicons/react/solid';

const Index: React.FC = () => {
	const [progress, setProgress] = useState(0);
	const { theme, setTheme } = useTheme();
	const loadTimeFake = Math.floor(Math.random() * 100);
	const [mounted, setMounted] = useState(false);
	const [visible, setVisible] = useState(false);
	const [pass, setPass] = useState('');
	const [usage, setUsage] = useState(0);
	const [prompt, promptToInstall] = useAddToHomescreenPrompt();

	const genPass = () => {
		setPass(nanoid());
		setUsage(usage + 1);
		console.log(`Generated ${usage} time(s)`);
	};

	useEffect(() => {
		setMounted(true);
		genPass();
	}, []);
	if (!mounted) return null;
	return (
		<div css={tw`relative dark:bg-gray-900 select-none transition duration-500`}>
			<Head>
				<title>Passwords Generated: {usage} time(s)</title>
			</Head>
			<LoadingBar color='#1A56DB' progress={progress} onLoaderFinished={() => setProgress(0)} />
			<div css={tw`flex flex-col justify-center items-center w-screen h-screen transition duration-500`}>
				<h5 css={tw`mb-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white transition`}>
					<span css={tw`text-2xl text-gray-700 dark:text-gray-400 mr-2 transition`}>Secure</span>Password Generator
				</h5>
				<div
					css={tw`p-6 pt-2 w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition duration-500`}>
					<span css={tw`text-xs text-gray-700 dark:text-gray-400`}>Password</span>
					<CopyOnClick text={pass}>
						<div
							css={tw`mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-4 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300 placeholder:text-xl mb-3 font-bold text-xl text-center cursor-pointer hover:ring-2 hover:ring-blue-500 hover:border-blue-500 hover:dark:ring-blue-600 hover:dark:border-blue-600 hover:text-gray-900 hover:dark:text-gray-100 transition duration-500`}>
							{pass}
						</div>
					</CopyOnClick>
					<div css={tw`flex`}>
						<button
							onClick={() => genPass()}
							css={tw`text-center w-full block py-2 px-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 ring-0 dark:bg-blue-500 dark:hover:bg-blue-600 dark:ring-0 transition cursor-pointer transition duration-500 focus:ring-0 focus:dark:ring-0 outline-none`}>
							New password
						</button>
						<button
							css={tw`ml-1.5 text-center block py-2 px-3 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 ring-0 dark:bg-teal-500 dark:hover:bg-teal-600 dark:ring-0 transition cursor-pointer transition duration-500 focus:ring-0 focus:dark:ring-0 outline-none`}>
							<CogIcon css={tw`w-6 h-6`} />
						</button>
					</div>
				</div>
				<span css={tw`font-normal text-gray-400 mt-2 text-xs transition duration-500`}>5,616,592 ops/sec</span>
			</div>
			<div tw='absolute top-5 right-5'>
				<div
					suppressHydrationWarning
					css={tw`cursor-pointer rounded p-2 bg-gray-100 border border-gray-50 text-indigo-800 dark:bg-gray-800 dark:border-gray-700 dark:text-yellow-300 shadow-sm text-sm transition duration-500 hover:text-teal-800 hover:dark:text-orange-300`}
					aria-label='Toggle Dark Mode'
					onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					{theme === 'dark' ? <SunIcon css={tw`w-5 h-5`} /> : <MoonIcon css={tw`w-5 h-5`} />}
				</div>
			</div>
			<div tw='absolute bottom-5 left-5 transition duration-500'>
				<span suppressHydrationWarning css={tw`font-normal text-gray-400 mt-2 text-xs`}>
					0.2.0 ({loadTimeFake}ms) by Sajjaad Farzad
				</span>
			</div>
			<div tw='absolute top-5 left-5'>
				<button
					onClick={promptToInstall}
					css={tw`cursor-pointer rounded py-1 px-2 bg-gray-100 border border-gray-50 text-gray-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 shadow-sm text-sm transition duration-500 font-medium hover:text-green-700 hover:dark:text-teal-300`}>
					Install?
				</button>
			</div>
		</div>
	);
};

export default Index;
