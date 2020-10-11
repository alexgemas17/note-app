import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch()
    const {active:note} = useSelector(state => state.notes)
    const [formValue, handleInputChange, reset ] = useForm(note)
    const {title, body} = formValue

    const activeID = useRef(note.id) 
    useEffect(() => {
        if(note.id !== activeID.current){
            reset( note )
            activeID.current = note.id
        }
        
    }, [note, reset])
    
    useEffect(() => {
        
        dispatch( activeNote(formValue.id, { ...formValue }) )

    }, [formValue, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting( activeID.current ) )
    }

    return (
        <div className='notes__main-content'>
            
            <NotesAppBar />

            <div className='notes__content'>

                <input
                    type='text'
                    placeholder='Title'
                    className='notes__title-input'
                    autoComplete='off'
                    name='title'
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder='Write something...'
                    className='notes__textarea'
                    name='body'
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    (note.url) &&
                    <div className='notes__image'>
                        <img 
                            src={note.url}
                            alt='backgroud'
                        />
                    </div>
                }
            </div>

            <button 
                className='btn btn-danger'
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}
