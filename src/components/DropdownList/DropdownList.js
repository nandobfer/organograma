import './DropdownList.css'

export const DropdownList = ({label, items}) => {

    console.log(items);

    return (
        <div className="dropdown">
            <label htmlFor="">{label}</label>
            <select name="" id="">
                {items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}