import {useContext, useEffect} from 'react';
import dynamic from 'next/dynamic';
import {mainContext} from 'provider/mainContext';
import axios from 'axios';

const Desktop = dynamic(() => import('components/view/home/desktop'));
const Mobile  = dynamic(() => import('components/view/home/mobile'));

const customers = [
    {
        logo: '/images/neshan.svg',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',
        author: 'محمد زاهدی - بنیانگذار نشان'
    },
    {
        logo: '/images/zarinpal.svg',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',
        author: 'محمد زاهدی - بنیانگذار نشان'
    },
    {
        logo: '/images/namava.svg',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',
        author: 'محمد زاهدی - بنیانگذار نشان'
    },
    {
        logo: '/images/lahzenegar.svg',
        desc: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',
        author: 'محمد زاهدی - بنیانگذار نشان'
    }
];

const IndexPage = ({s}) => {
    console.log(s);
    const {isMobile} = useContext(mainContext);

    return isMobile === true
        ? <Mobile />
        : <Desktop customers={customers} />
}

export const getInitialProps  = async (context) => {

    const dd = await axios.get('/api/customer');

    return {
        props: {
            s: dd
        }
    }
}

export default IndexPage;