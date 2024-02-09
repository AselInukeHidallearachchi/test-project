import { Button, Card, Chip } from '@mui/material';
import './MenuList.css';
import MenuListCategory from './MenuListCategory/MenuListCategory';

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { data as DummyData } from '../../data';
import { createRef, useState } from 'react';


const MenuList = () => {
    let data = DummyData; // Assuming data is imported and its structure is known
    const [currentCategory, setCurrentCategory] = useState('');
    const [isScrolling, setIsScrolling] = useState(false);

    const dataRefs = data.map(() => createRef());

    const scrollTo = (e) => {
        setIsScrolling(true);
        const target = e.target;

        let matchedRef = dataRefs.find(ref =>
            ref.current?.getAttribute('data-name') === target.innerText
        );

        if (matchedRef && matchedRef.current) {
            setCurrentCategory(matchedRef.current.getAttribute('data-name') || '');
            matchedRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

            window.addEventListener('scrollend', () => {
                setIsScrolling(prevState => !prevState);
            }, { once: true });
        }
    };

    const handleScroll = (isIntersecting, attr) => {
        if (isIntersecting) {
            setCurrentCategory(attr || '');
        }
    };

    return (
        <div className="MenuList">
            <div className="chips">
                {data.map(bundle => (
                    <Chip
                        key={bundle.id}
                        label={bundle.categoryTitle}
                        color={currentCategory === bundle.categoryTitle ? 'primary' : 'default'}
                        className={currentCategory === bundle.categoryTitle ? 'selected' : 'not-selected'}
                        onClick={(e) => scrollTo(e)}
                    />
                ))}
            </div>
            <div className="menu-list__container">
                <div className="container  m-2">
                    <p className='text-small' style={{ paddingTop: '1rem',color: '#888' }}>Adults need around 2000 kcal a day</p>
                    {data.map((bundle, index) => (
                        <MenuListCategory
                            key={bundle.id}
                            {...bundle}
                            ref={dataRefs[index]}
                            handleScroll={handleScroll}
                            isScrolling={isScrolling}
                        />
                    ))}
                </div>
                <div className="basket-container">
                    <Card className='basket'>
                        <div className="basket-content">
                            <ShoppingBasketOutlinedIcon color="disabled" fontSize='large' />
                            <br />
                            <span className='text-muted'>Your basket is empty</span>
                            <br />
                            <br />
                            <Button disableRipple disabled variant="contained">Go to checkout</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default MenuList;
