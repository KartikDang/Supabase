import React from "react";
import './card.css';
import { useState } from "react";
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = "https://pamxlmbyqavhkmibugsb.supabase.co"
const SERVICE_KEY = process.env.REACT_APP_SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

export default function Card( props ) {
   console.log(props);
    return (
        <>
        <div className="main-container">
            <div className="cards">
                <div className="card card-1">
                    <div className="card__icon">{props.postdesc}</div>
                    <p className="card__exit"><i className="fas fa-times"></i></p>
                    <h2 className="card__title">{props.posturl}</h2>
                    <p className="card__apply">
                        <a className="card__link" href="#">{props.username}<i className="fas fa-arrow-right"></i></a>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}