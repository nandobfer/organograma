import './CustomButton.css'

export const CustomButton = ({children}) => {
    return (
        <button className="button">{children}</button>
    )
}