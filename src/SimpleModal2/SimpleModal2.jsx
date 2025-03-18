import React, { useEffect} from "react";
import { Transition } from "react-transition-group";
import { ReactComponent as IconClose } from "../SimpleModal/icon-close.svg";
import "./SimpleModal2.css";
// import { Helmet } from 'react-helmet';


export const SimpleModal2 = ({ isOpen, onClose, children }) => {

 const nodeRef = React.useRef()

 const onWrapperClick = (event) => {
  event.stopPropagation();
  if (event.target.classList.contains("modal2")) onClose();
};

//   useEffect(() => {
//     const body = document.querySelector('body');
//     body.style.overflow = isOpen ? 'hidden' : 'auto';
//  }, [isOpen])

  return (
    <>
      <Transition nodeRef={nodeRef} in={isOpen} timeout={0} unmountOnExit={true}>
        {(state) => (

          <div className={`modal2 modal2--${state}`} onClick={onWrapperClick} >

            <div className="modal-wrapper2"  >
             {/* <InnerModal onClick={e => e.stopPropagation()} />  */}
            <div className="nnn2">    
               <div className="modal-content2"></div>
             <button
                  className="modal-close-button2"
                  onClick={() => onClose()}
                >
                  x
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
