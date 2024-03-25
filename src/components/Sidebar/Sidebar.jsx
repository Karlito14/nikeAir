export const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <>
            <aside className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50 top-0 right-0 fixed h-full w-full bg-white p-8 transition duration-300 md:w-1/2 lg:w-[35%]`}>
                <button className="absolute top-4 right-4 p-2 font-bold" onClick={() => closeSidebar(false)}>X</button>
                <h3 className="text-2xl text-center font-semibold">Mon panier</h3>
                {/*children*/}
            </aside>
            {isOpen && <div className="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-50"></div>}
        </>

    )
}