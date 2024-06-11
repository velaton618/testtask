import { useGetProductsQuery } from '../../redux/api/productsApi'
import s from "./Services.module.css";
import Service from '../Service/Service';

export default function Services() {
	const { data: services, isError, isLoading } = useGetProductsQuery();

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
				{services?.products?.map((product) => (
					<div key={product.id}>
						<Service product={product} />
					</div>
				))}
			</div>}
		</>
	)
}
