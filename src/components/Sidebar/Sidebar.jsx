export const Sidebar = ({ children, isOpen, closeSidebar }) => {
    return (
        <>
            <aside onClick={(event) => event.stopPropagation()} className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} sidebar`}>
                <button className="absolute top-4 right-4 p-2 font-bold dark:text-white" onClick={() => closeSidebar(false)}>X</button>
                <h3 className="text-2xl text-center font-semibold dark:text-white">Mon panier</h3>
                {children}
                <button className="text-center text-xl px-8 py-4 font-bold mt-10 text-white mx-auto block transition bg-black hover:bg-gray-900 dark:hover:bg-gray-700" >Finaliser ma commande</button>
            </aside>
            {isOpen && <div className="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-50"></div>}
        </>
    );
};