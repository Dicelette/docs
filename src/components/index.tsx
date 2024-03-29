/* eslint-disable @typescript-eslint/no-var-requires */
import Translate, { translate } from '@docusaurus/Translate'
import Heading from '@theme/Heading'
import clsx from 'clsx'

type FeatureItem = {
	title: string
	Image: string
	description: JSX.Element
}

const FeatureList: FeatureItem[] = [
	{
		title: translate({ message: "Facile d'utilisation" }),
		Image: require('@site/static/img/easy.png').default,
		description: (
			<Translate>
				Un simple bot discord qui ne nécessite pas de configuration pour
				fonctionner ! Il suffit de l'ajouter à votre serveur pour commencer à
				l'utiliser.
			</Translate>
		),
	},
	{
		title: translate({ message: 'Fiche de personnage' }),
		Image: require('@site/static/img/character.png').default,
		description: (
			<Translate>
				Le bot permet aussi de configurer un modèle, des fiches de personnages
				et de retenir des dés. Et en plus, vos données restent sur votre serveur
				!
			</Translate>
		),
	},
	{
		title: translate({ message: 'Universel' }),
		Image: require('@site/static/img/theme-park.png').default,
		description: (
			<Translate>
				Le modèle est adaptable à l'infini, ce qui vous permet de configurer vos
				fiches pour tout type de roleplay !
			</Translate>
		),
	},
]

function Feature({ title, Image, description }: Readonly<FeatureItem>) {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<img
				src={Image}
				alt={title}
				width={'100'}
				height={100}
			/>
			<div className="space-y-2">
				<Heading
					as="h3"
					className="text-center font-bold"
				>
					{title}
				</Heading>
				<p className="max-w-96">{description}</p>
			</div>
		</div>
	)
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<div className="flex justify-evenly flex-wrap py-8">
			{FeatureList.map((props) => (
				<Feature
					key={props.title}
					{...props}
				/>
			))}
		</div>
	)
}
