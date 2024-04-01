import { FC } from "react";

import { AddButton } from ".";

type SectionProps = {
    children: React.ReactNode;
    label: string;
    onAdd?: () => void;
}

const Section: FC<SectionProps> = ({ children, label, onAdd }) => 
	<section className="flex flex-col">
		<span className="text-lg font-bold mb-2">{label}
			{onAdd && <AddButton onClick={onAdd} />}
		</span>
		{children}
	</section>;

export default Section;