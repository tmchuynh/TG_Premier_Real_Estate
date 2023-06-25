
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function CustomTimeline() {
    const events = [
        { status: 'Inspiration', date: '2014-2016', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg', details: 'Tina grew up with both her parents in the real estate industry. Her dad thrived as a real estate agent for years at LS Gateway before becoming a real estate broker and established a well-known and respected real estate company of his own, FirstStar Inc. beside his wife. Even when she was younger, Tina had the privilage of following her parents during business transcations and learning from her parents about real estate on the sidelines. Her dream was to grow up to help out later on.' },
        { status: 'Experience', date: '[year dates]', icon: 'pi pi-cog', color: '#673AB7', details: 'As a product manager, Gray had.....[insert relevant experience relating to real estate here]' },
        { status: 'Licenses', date: '2022-2023', icon: 'pi pi-shopping-cart', color: '#FF9800', details: 'Between 2022 and 2023, Tina and Gray got their real estate salesperson license in their respective home states. Tina got her license in California while Gray got his license in Texas.' },
        { status: 'Joining Together', date: '2024', icon: 'pi pi-check', color: '#607D8B', details: 'Tina and Gray establish [Company Name] in 2024 after Gray moved to California with Tina. Their journey starts here. Helping new families find their dream houses, .....[expand]' }
    ];

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <>
                <Card title={item.status} subTitle={item.date}>
                    {item.image && <img src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`} alt={item.name} width={200} className="shadow-1" />}
                    {item.details && <p>{item.details}</p>}
                    <Button label="Read more" className="p-button-text"></Button>
                </Card>
            </>
        );
    };

    return (
        <div className="card">
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
        </div>
    )
}
