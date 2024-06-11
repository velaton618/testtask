import { useDispatch } from "react-redux";
import s from "./Service.module.css";
import { openModal } from "../../redux/slices/modalSlice";
import StrategyIcon from "../Icons/StrategyIcon";
import { IProduct } from "../../types/IProduct";

export default function Service({ product }: { product: IProduct }) {
  const dispatch = useDispatch();

  return (
    <div className={s.service} key={product?.id}>
      <div className={s.icon}>
        <StrategyIcon />
      </div>
      <p className={s.title}>{product?.title}</p>
      <div className={s.hidden}>
        <p className={s.description}>{product?.description}</p>
        <button
          className={s.details}
          onClick={() => dispatch(openModal(product))}
        >
          ПОДРОБНЕЕ →
        </button>
      </div>
    </div>
  );
}
