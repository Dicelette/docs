/* eslint-disable @typescript-eslint/no-var-requires */
import Heading from "@theme/Heading";
import clsx from "clsx";

import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
	{
		title: "Facile d'utilisation",
		Image: require("@site/static/img/easy.png").default,
		description: (
			<>
			Un simple bot discord qui ne nécessite pas de configuration pour fonctionner ! Il suffit de l'ajouter à votre serveur pour commencer à l'utiliser.
			</>
		),
	},
	{
		title: "Fiche de personnage",
		Image: require("@site/static/img/character.png").default,
		description: (
			<>
        Le bot permet aussi de configurer un modèle, des fiches de personnages et de retenir des dés. Et en plus, vos données restent sur votre serveur !
			</>
		),
	},
	{
		title: "Universel",
		Image: require("@site/static/img/theme-park.png").default,
		description: (
			<>
        Le modèle est adaptable à l'infini, ce qui vous permet de configurer vos fiches pour tout type de roleplay !
			</>
		),
	},
];

function Feature({title, Image, description}: FeatureItem) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<img src={Image} className={styles.featureImage} alt={title} width={"100"} height={100}/>
			</div>
			<div className="text--center padding-horiz--md">
				<Heading as="h3">{title}</Heading>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
