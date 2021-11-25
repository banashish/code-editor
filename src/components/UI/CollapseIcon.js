/* eslint-disable no-restricted-globals */
import classes from "./CollapseIcon.module.css";

const CollapseIcon = (props) => {
  const showCollapsed = props.show;
  let collpaseIcon;
  if (showCollapsed) {
      if(screen.width > 720){
          collpaseIcon = <i class="bi bi-chevron-double-right"></i>;
      }
      else {
          collpaseIcon = <i class="bi bi-chevron-double-down"></i>;
      }
  } else {
    if(screen.width > 720){
        collpaseIcon = <i class="bi bi-chevron-double-left"></i>;
    }
    else {
        collpaseIcon = <i class="bi bi-chevron-double-up"></i>;
    }
  }

  const onCollapseHandler = () => {
      props.collapseClickHandler()
  };

  return (
    <span className={classes.collapse} onClick={onCollapseHandler}>
      {collpaseIcon}
    </span>
  );
};

export default CollapseIcon;
