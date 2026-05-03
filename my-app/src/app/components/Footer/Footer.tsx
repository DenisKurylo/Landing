import React from 'react';
import cl from './footer.module.scss'

const Footer = () => {
    return (
        <div className={cl.footer}>
            <hr  style={{width: "100%", border: "none", borderTop: "1px solid #E6E6E6", background:'#E6E6E6'}}/>
            <div className={cl.footer_wrapper}>
                <div className={cl.name_and_link}>
                    <p>Site name</p>
                    <div className={cl.link}>
                        <img src='/facebook.svg'/>
                        <img src='/linkedin.svg'/>
                        <img src='/youtube.svg'/>
                        <img src='/instagram.svg'/>
                    </div>
                </div>
                <div className={cl.link_page_list}>
                    <div className={cl.link_pages}>
                        <div>
                            Topic
                        </div>
                        <div>
                            Page
                        </div>
                        <div>
                            Page
                        </div>
                        <div>
                            Page
                        </div>
                    </div>
                    <div className={cl.link_pages}>
                        <div>
                            Topic
                        </div>
                        <div>
                            Page
                        </div>
                        <div>
                            Page
                        </div>
                        <div>
                            Page
                        </div>
                    </div>
                    <div className={cl.link_pages}>
                        <div>
                            Topic
                        </div>
                        <div>
                            Page
                        </div>
                        <div>
                            Page
                        </div>
                        <div>
                            Page
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;