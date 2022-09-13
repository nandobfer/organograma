import { useState } from 'react'
import { CustomButton } from '../CustomButton/CustomButton'
import { DropdownList } from '../DropdownList/DropdownList'
import InputContainer from '../InputContainer'
import './FormBox.css'

export const FormBox = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e gestão'
        
    ]

    const onSave = (event) => {
        event.preventDefault();
        console.log(`submetido: ${name}, ${cargo}, ${image}`)
    }

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [image, setImage] = useState('')

    return (
        <section className='form-box'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card</h2>
                <InputContainer 
                    required={true} 
                    label="Nome"
                    value={name}
                    changeValue={value => setName(value)}
                />
                <InputContainer 
                    label="Cargo"
                    value={cargo}
                    changeValue={value => setCargo(value)}
                />
                <InputContainer
                    label="Imagem"
                    value={image}
                    changeValue={value => setImage(value)}
                />
                <DropdownList items={times} label="Time"/>
                <CustomButton>
                    Criar Card
                </CustomButton>
            </form>
        </section>
    )
}