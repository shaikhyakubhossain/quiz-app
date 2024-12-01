import styles from "./vertical-three-dots.module.scss";
import Btn from "../Btn/btn.component";

type propsType = {
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
};

export default function VerticalThreeDots(props: propsType) {
  return (
    <Btn customTW="block !p-0 !px-4 m-0" onClick={props.onClick}>
      <div className={`${styles.mainContainer}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Btn>
  );
}
