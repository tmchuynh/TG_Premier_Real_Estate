import * as React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Link from 'next/link';

export default function CardFooter(contact, cell) {
    return (
        <div className="card-footer flex flex-wrap justify-content-end gap-2">
            <Link href={contact}>
            <Button label='Email' icon='pi pi-envelope'></Button></Link>
            <Link href={cell}><Button label='Call' icon='pi pi-phone' className='p-button-outlined p-button-secondary' ></Button></Link>
        </div>
    );
}