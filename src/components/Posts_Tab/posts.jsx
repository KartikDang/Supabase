import React from "react";
import { createClient } from '@supabase/supabase-js';
import { useUserSession } from "../../context/AuthContext";
import async from './posts';
import { useState } from "react";
import Card from './../card/card';


const SUPABASE_URL = "https://pamxlmbyqavhkmibugsb.supabase.co"
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhbXhsbWJ5cWF2aGttaWJ1Z3NiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1NjQyNzM1MSwiZXhwIjoxOTcyMDAzMzUxfQ._itCzzPwvH5TyELByNBIB1gTJ5yLnv-IS9svyIafsKs'
const supabase = createClient(SUPABASE_URL, SERVICE_KEY);


export default function Postspage() {
    const { user } = useUserSession();
    console.log(user);
     const [teamPostss, setTeamPostss] = useState([])
    async function obtposts() {

        const teamPosts = [];
        try {

            const { data, error } = await supabase
                .from('team_users')
                .select("team")
                .eq('user', user);
            //console.log(data); Team Data

            const team = data[0].team;
            // console.log(team); //Team Name

            try {
                const { data, error } = await supabase
                    .from('team_users')
                    .select("user")
                    .eq('team', team);
                //console.log(data); //Team Members ID
                const team_members = data;
                try {
                    team_members.map(async (e) => {
                        // console.log(e.user);

                        const { data, error } = await supabase
                            .from('posts')
                            .select("*")
                            .eq('id', e.user);

                        teamPosts.push(data[0]);
                    });
                } catch (error) {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }

        setTeamPostss(teamPosts);
    }

    // async function getResult() {
    //     let result = await obtposts();
    //     return result
    // }
    // let data;
    // async function doTask() {
    //     data = await getResult();
    //     console.log(data)
    // }

    React.useEffect(()=>{
        obtposts();
    },[]);


    return (
        <>
            {teamPostss.map( (e)=>{
                console.log(e);
                <Card props= {e}  />
            })}
        
        </>
    )
}