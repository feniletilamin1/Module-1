import React from 'react'
import IconList from '../icons/view_list.svg';
import IconModule from '../icons/view_module.svg';

export default function IconSwitch(props) {
  const { icon } = props;
  const { onSwitch } = props;
  return (
    <div className="icon-switch" onClick={() => onSwitch(icon)}>
      <img src={icon === "list" ? IconList : IconModule} alt="switch-icon" className="icon-switch__image" />
    </div>
  )
}
