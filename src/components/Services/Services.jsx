import { useGetProductsQuery } from '../../redux/api/productsApi'
import s from "./Services.module.css";
import Service from '../Service/Service';
import { useEffect, useState } from 'react';

export default function Services() {
	const { data, isError, isLoading } = useGetProductsQuery();
	const [services, setServices] = useState([]);

	useEffect(() => {
		// Это просто для сходства с макетом, в реальном проекте я бы делал по-другому.
		if (!data) return;

		const titles = [
			"СТРАТЕГИЯ",
			"АНАЛИЗ",
			"СОЦ СЕТИ",
			"РАЗВИТИЕ",
			"КОНТЕНТ",
			"ДИЗАЙН UX",
			"ТАРГЕТИРОВАННАЯ РЕКЛАМА",
			"ПРОДУКТ"
		];
		const newList = JSON.parse(JSON.stringify(data.products));

		for (let i = 0; i < titles.length; i++) {
			if (newList.length - 1 < i) break;

			newList[i].title = titles[i];
		}
		setServices(newList);
	}, [data]);

	if (isError) {
		return (
			<div>
				Something went wrong
			</div>
		)
	}

	return (
		<>
			{isLoading ? <div>Loading...</div> : <div className={s.services}>
				{services?.map((product) => (
					<div key={product.id}>
						<Service product={product} />
					</div>
				))}
			</div>}
		</>
	)
}
