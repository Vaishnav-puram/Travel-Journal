import React from 'react';
import "../index.css";
import Header from "./Header";
import Card from "./Card";
import Object from "./Object";
export default function Content() {
    let Arr = Object.map((ele) => {
        return (
            <Card
                ele={ele}
            />
        )

    })
    return (
        <div>
            <Header />
            <section className='list'>
                {Arr}
            </section>
        </div>
    )
}