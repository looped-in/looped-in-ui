import { cn } from "@/utils";
import type React from "react";

interface IButtonProps {
	styles?: string;
	disabled?: boolean;
	label: string;
	onClick?: () => void;
	type?: "button" | "submit" | "reset";
	className?: string;
}

const Button = (props: IButtonProps) => {
	return (
		<button
			className={cn(
				"h-10 w-32 rounded-tl-lg rounded-tr-lg rounded-br-lg bg-gradient-to-b from-[#ffb945] to-[#ff7338] text-white font-bold",
				props.className,
			)}
			type={props.type}
			onClick={props?.onClick}
			disabled={props.disabled}
		>
			{props.label}
		</button>
	);
};

export default Button;
