import React, {FC} from 'react';
// @ts-ignore
import classes from './MyModal.module.css';

interface ModalWindow {
    children: React.ReactNode | React.ReactElement;
    visible: boolean;
}

const MyModal: FC<ModalWindow> = ({
                                      children,
                                      visible,
                                      }
) => {

    const rootClasses = [classes.myModal];

    if(visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(" ")}>
            <div className={classes.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;