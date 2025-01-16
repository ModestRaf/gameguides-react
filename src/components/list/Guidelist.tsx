import React from 'react';
import styles from './Guidelist.module.scss';
import ListItem from "../listItem/ListItem";

interface iListItem {
    id: number;
    title: string;
    link?: string;
}

interface ListProps {
    items: iListItem[];
}

const List: React.FC<ListProps> = ({ items }) => {
    return (
        <ul className={styles.list}>
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    title={item.title}
                    link={item.link}
                />
            ))}
        </ul>
    );
};

export default List;