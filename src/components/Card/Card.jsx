export const Card = ({ item, clickItem, clickAdd }) => {
    const onClick = () => {
        clickAdd(arr => [...arr, item])
    };
    return (
        <div className={`${item.className} w-full transition-all duration-300 hover:scale-105 cursor-pointer relative`} onClick={() => clickItem(item)}>
            <div className="p-8">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="underline underline-offset-4 font-semibold mt-10" onClick={ onClick }>AJOUT AU PANIER +</p>
            </div>
            <img src={item.src} alt={item.title} className="h-40 w-56 absolute top-5 left-[45%]" />
        </div>
    )
}