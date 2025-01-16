import React from 'react';
import { useParams } from 'react-router-dom';
import { planetsData } from '../data';
import PageLayout from './PageLayout';
import PlanetAccordion from '../components/accordion/PlanetAccordion';

const GuideDetailPage: React.FC = () => {
    const { category } = useParams<{ category: string; id: string }>();

    let data: any[];
    switch (category) {
        case 'masseffect':
            data = planetsData;
            break;
        // Удалены блоки для dragonage и longdark, так как контента пока нет
        default:
            data = [];
    }

    return (
        <PageLayout>
            <PlanetAccordion planets={data} />
        </PageLayout>
    );
};

export default GuideDetailPage;