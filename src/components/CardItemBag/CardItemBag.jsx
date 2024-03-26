export const CardItemBag = ({ itemList }) => {
    return itemList.map(item => {
        return (
            <div key={item.id} className="flex mt-10 hover:bg-[#DAFFA2] transition p-2 cursor-pointer bg-gray-50 space-x-2">
                <img className="h-24" src={item.src} />
                <div className="space-y-2">
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <span className="font-bold">{item.price}€</span>
            </div>
        )
    })
};
