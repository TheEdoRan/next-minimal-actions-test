"use client";

import { testAction } from "./action";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between p-24">
			<h1 className="text-3xl font-semibold">next-safe-action test</h1>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const fd = new FormData(e.currentTarget);
					const username = fd.get("username") as string | null;
					if (!username) return;
					const result = await testAction({ username });
					console.log("Action result:", result);
				}}
				className="mt-6">
				<input
					type="text"
					name="username"
					placeholder="Username"
					className="border rounded px-3 py-2"
				/>
				<button
					type="submit"
					className="text-white bg-black rounded-lg px-3 py-2 ml-2">
					Submit
				</button>
				<p className="mt-4 text-gray-500">
					Check browser console for action result
				</p>
			</form>
		</main>
	);
}
