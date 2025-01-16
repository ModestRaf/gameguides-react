import React from 'react';
import { useParams } from 'react-router-dom';
import { dragonAgeList, longDarkList, massEffectList } from "../data";
import PageLayout from "./PageLayout";
import List from "../components/list/Guidelist";

const GuidePage: React.FC = () => {
    const { category } = useParams<{ category: string }>();

    let items: { id: number; title: string; link?: string }[];
    switch (category) {
        case 'masseffect':
            items = massEffectList;
            break;
        case 'dragonage':
            items = dragonAgeList;
            break;
        case 'longdark':
            items = longDarkList;
            break;
        default:
            items = [];
    }

    return (
        <PageLayout>
            <List items={items} />
        </PageLayout>
    );
};

export default GuidePage;