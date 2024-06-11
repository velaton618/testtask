import { useDispatch } from 'react-redux';
import s from './Service.module.css';
import { openModal } from "../../redux/slices/modalSlice";
import StrategyIcon from '../Icons/StrategyIcon';

export default function Service(args: any) {
    const dispatch = useDispatch();

    return (
        <div className={s.service} key={args.product?.id}>
            <div className={s.icon}>
                <StrategyIcon/>
            </div>
            <p className={s.title}>{args.product?.title}</p>
            <div className={s.hidden}>
                <p className={s.description}>{args.product?.description}</p>
                <button className={s.details} onClick={() => dispatch(openModal(args.product))}>ПОДРОБНЕЕ →</button>
            </div>
        </div>
    )
}
