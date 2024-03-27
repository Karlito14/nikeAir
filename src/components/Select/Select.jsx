import { IoIosArrowDown } from 'react-icons/io';

export const Select = ({ title, id, listOption, sizeSelect, padding, onChange, defaultValue }) => {
    return (
        <div className='relative dark:text-black'>
            <select id={id} defaultValue={defaultValue ?? ''} className={`${sizeSelect} appearance-none border border-gray-300 ${padding} cursor-pointer bg-white`} onChange={onChange ? (event) => onChange(event.target.value): null}>
                <option value={''} disabled hidden>{title}</option>
                {listOption.map(option => {
                    return <option key={option} value={option}>{option}</option>;
                })}
            </select>
            <IoIosArrowDown className='pointer-events-none absolute inset-y-0 flex-center right-3 top-1/2 -translate-y-1/2' />
        </div>
    );
};