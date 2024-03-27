import { Card } from '../Card/Card';

export const CardList = ({ data, updateShoe }) => {
    return (
        <section className='mt-20'>
            <h2 className='font-extrabold text-4xl text-center bg-[url("./src/assets/lines.png")] bg-center mb-10 bg-no-repeat w-auto dark:text-white'>NOUVELLES ARRIVEES</h2>
            <div className='div-section-list'>
                {data.map(item => <Card key={item.id} item={item} clickItem={updateShoe}/>)}
            </div>
        </section>
    );
};