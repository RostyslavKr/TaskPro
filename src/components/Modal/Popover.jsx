import {useMedia} from 'react-use';
import css from './Modal.module.css';

const Popover = ({ children, onClose, position }) => {
    const isMobile = useMedia('(max-width: 480px)');
    return (
        <div className={css.backdrop} onClick={onClose}>
        <div className={css.popoverContent} 
          style={isMobile? {top:"50%", left:"50%", transform:"translate(-50%, -50%)"} : {...position}} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
export default Popover;