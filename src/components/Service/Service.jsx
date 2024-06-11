import { useDispatch } from 'react-redux';
import s from './Service.module.css';
import { openModal } from "../../redux/slices/modalSlice";

export default function Service(args) {
    const dispatch = useDispatch();


    return (
        <div className={s.service} key={args.product?.id}>
            <div className={s.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-shield-fill-plus" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5z" />
                </svg>
            </div>
            <p className={s.title}>{args.product?.title}</p>
            <div className={s.hidden}>
                <p className={s.description}>{args.product?.description}</p>
                <button className={s.details} onClick={() => dispatch(openModal(args.product))}>ПОДРОБНЕЕ →</button>
            </div>
        </div>
    )
}
