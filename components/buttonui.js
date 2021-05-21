import Image from 'next/image'

import classNames from 'classnames/bind';

import styles from './buttonui.module.scss'

let cx = classNames.bind(styles);


export default function ButtonUI({ icon, clickHandler, className }) {

    let btnuiClasses = cx({
        button_ui: true,
        close : icon === "close"
    });



    return (
        <button 
            className={btnuiClasses}
            onClick={clickHandler}
        >
            <Image
                src={`/images/icon-${icon}.svg`}
                width={50}
                height={50}
                alt="Menu icon"
            />
        </button>
    )
}