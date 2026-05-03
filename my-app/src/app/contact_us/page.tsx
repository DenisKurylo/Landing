import React from 'react';
import ContactForm from "@/app/contact_us/component/ContactForm";
import cl from '../general.module.scss'

const Page = () => {
    return (
        <div className={' w-full'}>
            <div className={cl.contact_page}>
                <ContactForm/>
                <img src='/Hero%20Image.svg'/>
            </div>
        </div>
    );
};

export default Page;