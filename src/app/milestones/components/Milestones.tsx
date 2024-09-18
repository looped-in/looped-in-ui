import React from "react";
import NavigationTab from "@/components/NavigationTab";

const Milestones = () => {
	return (
		<div className="h-screen flex flex-row">
			<div className="w-1/4">
				<NavigationTab />
			</div>

			<div className="w-3/4">Milestones</div>
		</div>
	);
};

export default Milestones;
