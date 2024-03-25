import { IoIosArrowDown } from 'react-icons/io';

export const Select = ({ title, listOption }) => {
    return (
        <div className='relative'>
            <select id={title} defaultValue={''} className="w-24 appearance-none border border-gray-300 p-4 cursor-pointer bg-white">
                <option value={''} disabled hidden>{title}</option>
                {listOption.map(option => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
            <IoIosArrowDown className='pointer-events-none absolute inset-y-0 flex-center right-3 top-1/2 -translate-y-1/2' />
        </div>
    )
};