import { forwardRef, useEffect } from "react";
import MenuListItem from "../MenuListItem/MenuListItem";
import './MenuListCategory.css';

const MenuListCategory = (props, ref) => {
    const { categoryTitle, items, handleScroll, isScrolling } = props;

  

    useEffect(() => {

        const intersectionCallback = ([entry], observer) => {
            console.log(observer);
            handleScroll(entry.isIntersecting, entry.target.getAttribute('data-name'));
        };
        
        const observer = new IntersectionObserver(intersectionCallback, {
            rootMargin: '-180px 0px -30% 0px',
        },{
            threshold:1,
        });

        if (isScrolling) {
            observer.disconnect();
        }

        if (ref != null && !isScrolling)
            observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [isScrolling, ref, handleScroll]);

    return (
        <div className="MenuListCategory" ref={ref} data-name={categoryTitle}>
            <h2 className="category">
                {categoryTitle}
            </h2>
            <div className="items-container">
                {
                    items.map((item) => {
                        return (
                            <MenuListItem key={item.itemID} {...item} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default forwardRef(MenuListCategory);