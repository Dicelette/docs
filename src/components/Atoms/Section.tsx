import { FC } from "react";

import { AddButton } from ".";

type SectionProps = {
	length?: number;
	type?: "dice" | "stats";
    children: React.ReactNode;
    label: string;
    onAdd?: () => void;
}

const Section: FC<SectionProps> = ({ length, type, children, label, onAdd }) => 
	<section className="flex flex-col">
		<span className="text-lg font-bold mb-2">{label}
			{onAdd && <AddButton len={length} type={type} onClick={onAdd} />}
		</span>
		{children}
	</section>;

export default Section;