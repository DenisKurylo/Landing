import React from 'react';
import cl from './general.module.scss'
import Header from "@/app/components/Header/Header";
import Content from "@/app/components/Content/Content";

const Page = () => {
    return (
        <div className={cl.general}>
            <Header/>
            <img src='/image_general_page.svg'/>
            <Content/>
        </div>
    );
};

export default Page;