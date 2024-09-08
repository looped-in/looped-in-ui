import React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
	return (
		<div className="flex flex-row h-screen">
			<div className="w-1/2 p-10 pt-20 space-y-6 place-content-center">
				<Link href="/">
					<Image src="/logo.svg" alt="logo" width={150} height={150} />
				</Link>

				<div>Back</div>

				<div className="text-6xl font-semibold">Welcome back!</div>

				<div>
					Welcome back to Loopedin. Enter your details below to sign in.
				</div>

				<Input placeholder="Email Address" className="h-12" />
				<Input placeholder="Password" className="h-12" />

				<div className="flex flex-row place-content-between">
					<div>Remember me</div>
					<div>Forgot Password?</div>
				</div>

				<Button label="Sign In" className="w-full" />
			</div>

			<div className="w-1/2 place-content-center">
				<Image
					src="/sign-in.png"
					width={2000}
					height={2000}
					alt="signInImage"
				/>
			</div>
		</div>
	);
};

export default SignIn;
