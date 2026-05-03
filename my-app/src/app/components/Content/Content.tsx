import React from 'react';
import cl from './content.module.scss'

const Content = () => {
    return (
        <div className={cl.content}>
            <p className={cl.header}>Heading</p>
            <p className={cl.subheader}>Subheading to introduce testimonials</p>
            <div className={cl.card_list}>
                <div className={cl.card}>
                    <p>“A terrific piece of praise”</p>
                    <div className={cl.info}>
                        <img src='/Avatar.svg'/>
                        <div className={cl.right_part}>
                            <p>Name</p>
                            <p className={'text-[gray]'}>Description</p>
                        </div>
                    </div>
                </div>
                <div className={cl.card}>
                    <p>“A fantastic bit of feedback”</p>
                    <div className={cl.info}>
                        <img src='/Avatar.svg'/>
                        <div className={cl.right_part}>
                            <p>Name</p>
                            <p className={'text-[gray]'}>Description</p>
                        </div>
                    </div>
                </div>
                <div className={cl.card}>
                    <p>“A genuinely glowing review”</p>
                    <div className={cl.info}>
                        <img src='/Avatar.svg'/>
                        <div className={cl.right_part}>
                            <p>Name</p>
                            <p className={'text-[gray]'}>Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;