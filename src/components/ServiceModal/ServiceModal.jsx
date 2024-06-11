import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/slices/modalSlice';
import s from './ServiceModal.module.css'

export default function ServiceModal() {
	const isModal = useSelector((state) => state.modal.value);
	const modalService = useSelector((state) => state.modal.service);
	const dispatch = useDispatch();

	return (
		<>
			{isModal && <div className={s.modal} id='back' onClick={(event) => {
				if (event.target.id === 'back') {
					dispatch(closeModal())
				}
			}}>
				<div className={s.inner}>
					<h1 className={s.title}>{modalService?.title}</h1>
					<p className={s.description}>{modalService?.description}</p>
					<button className={s.buyButton}>Buy</button>
					<button onClick={() => dispatch(closeModal())} className={s.closeBtn}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
					</svg></button>
				</div>
			</div>}
		</>

	)
}
