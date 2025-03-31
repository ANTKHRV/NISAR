import React, { useEffect} from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal.css";
// import { Helmet } from 'react-helmet';


export const SimpleModal3 = ({ isOpen, onClose, children }) => {

 const nodeRef = React.useRef()
 
  const onWrapperClick = (event) => {
    event.stopPropagation();
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen])
  
  return (
    <>
  

      
      <Transition nodeRef={nodeRef} in={isOpen} timeout={0} unmountOnExit={true}>
        {(state) => (
          
          <div className={`modal modal--${state}`}>
             
            <div className="modal-wrapper" onClick={onWrapperClick }> 
            {/* <InnerModal onClick={e => e.stopPropagation()} /> */}
            <div className="nnn">    <div className="modal-content"></div>
             <button
                  className="modal-close-button"
                  onClick={() => onClose()}
                >
                  <IconClose />
                </button> 
                {children}
                </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
