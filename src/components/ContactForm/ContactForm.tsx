import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, choosePublisher, chooseISBN } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface ContactFormProps {
    id?:string;
    data?:{}
}

interface ContactState {
    title: string;
    author: string;
    publisher: string;
    isbn: string;
}

export const ContactForm = (props:ContactFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const name = useSelector<ContactState>(state => state.title);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(choosePublisher(data.publisher));
            dispatch(chooseISBN(data.isbn));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Book Title</label>
                    <Input {...register('title')} name="title" placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name="author" placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="publisher">Publishing Company</label>
                    <Input {...register('publisher')} name="publisher" placeholder='Publisher'/>
                </div>
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <Input {...register('isbn')} name="isbn" placeholder='ISBN #'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}