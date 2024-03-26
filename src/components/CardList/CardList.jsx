import { Card } from '../Card/Card';

export const CardList = ({ data, updateShoe }) => {
    return (
        <section className='mt-20'>
            <h2 className='font-extrabold text-4xl text-center bg-[url("./src/assets/lines.png")] bg-center mb-10 bg-no-repeat w-auto'>NOUVELLES ARRIVEES</h2>
            <div className='justify-between grid grid-cols-1 gap-y-20 md:grid-cols-2 gap-x-6 xl:grid-cols-[repeat(3,30%)]'>
                {data.map(item => <Card key={item.id} item={item} clickItem={updateShoe}/>)}
            </div>
        </section>
    )
};