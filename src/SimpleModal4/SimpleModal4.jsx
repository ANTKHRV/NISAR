import React, { useEffect} from "react";
import { Transition } from "react-transition-group";

import "./SimpleModal4.css";
// import { Helmet } from 'react-helmet';


export const SimpleModal4 = ({ isOpen, onClose, children }) => {
  const nodeRef = React.useRef();

  const onWrapperClick = (event) => {
    event.stopPropagation();
    if (event.target.classList.contains("modal-menu")) onClose();
  };

  return (
    <>
      <Transition nodeRef={nodeRef} in={isOpen} timeout={0} unmountOnExit>
        {(state) => (
          <div className={`modal-menu modal-menu--${state}`} onClick={onWrapperClick}>
          
       <div className="modal-op">
       <button
                className="modal-close-button4"
                onClick={onClose}
              >
                x
              </button> 
           
              {children}
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};