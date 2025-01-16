import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Listitem.module.scss';

interface ListItemProps {
    title: string;
    link?: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, link }) => {
    return (
        <li className={styles.listItem}>
            {link ? (
                <Link to={link} className={styles.link}>
                    {title}
                </Link>
            ) : (
                <span>{title}</span>
            )}
        </li>
    );
};

export default ListItem;