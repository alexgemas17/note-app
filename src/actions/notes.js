import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";


export const startNewNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = await db.collection(`${uid}/journal/notes`).add(newNote)
        
        dispatch( activeNote(docRef.id, newNote) )
        dispatch( addNewNote( docRef.id, newNote ) )
    }
}

export const activeNote = (id, note) => {
    return {
        type: types.notesActive,
        payload: {
            id,
            ...note
        }
    }
}

export const addNewNote = ( id, note ) => {
    return {
        type: types.notesAddNew,
        payload:{
            id, ...note
        }
    }
}

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes( uid )
        dispatch( setNotes(notes) )
    }
}

export const setNotes = (notes) => {
    return {
        type: types.notesLoad,
        payload: notes
    }
}

export const startSaveNotes = (note) => {
    return async (dispatch, getState) => {
        
        const { uid } = getState().auth;

        if( !note.url ){
            delete note.url
        }

        const noteToFiresotre = { ...note }
        delete noteToFiresotre.id

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update(noteToFiresotre)

        dispatch( refreshNote(note.id, note) )
        Swal.fire('Saved', note.title, 'success')
    }
}

export const refreshNote = ( idNote, note) => {
    return {
        type: types.notesUpdated,
        payload: {
            id: idNote,
            note: {
                idNote,
                ...note
            }
        }
    }
}

export const startUploading = ( file ) => {
    return async (dispatch, getState) => {
        const { active:activeNote } = getState().notes

        Swal.fire({
            title:'Uploading...',
            text: 'Please await',
            allowOutsideClick: false,
            willOpen: () => {
                Swal.showLoading()
            } 
        })

        const urlFile = await fileUpload(file)

        activeNote.url = urlFile

        dispatch( startSaveNotes( activeNote ) )

        Swal.close()
    }
}

export const startDeleting = ( id ) => {
    return async (disptach, getState) => {
        const { uid } = getState().auth;

        await db.doc(`${ uid }/journal/notes/${ id }`).delete()

        disptach( deleteNote( id ) )
    }
}

export const deleteNote = ( id ) => {
    return {
        type: types.notesDelete,
        payload: id
    }
}

export const noteLogout = () => {
    return {
        type: types.notesLogoutCleaing
    }
}