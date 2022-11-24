import React, { useState, useEffect } from "react";
import "./networks.css"

import { Header } from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { MdAddLink } from "react-icons/md";

import { db } from "../../services/firebaseConection";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function Networks(){
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedIn, setLinkedIn] = useState("");
    const [github, setGithub] = useState("");

    useEffect(()=>{
        function loadLinks(){
            const docRef = doc(db,"social","link");
            getDoc(docRef).then((snapshot)=>{
                if(snapshot.data() !== undefined){
                    setFacebook(snapshot.data().facebook);
                    setInstagram(snapshot.data().instagram);
                    setLinkedIn(snapshot.data().linkedIn);
                    setGithub(snapshot.data().github);
                }
            })
        }
        loadLinks();
    },[]);

    function handleSave(e){
        e.preventDefault();
        setDoc(doc(db,"social","link"),{
            facebook: facebook,
            instagram: instagram,
            linkedIn: linkedIn,
            github: github,
        }).then(()=>{
            toast.success("Redes Sociais Cadastradas!");
        }).catch((error)=>{
            toast.error("Erro ao Salvar");
            console.log("Erro ao Salvar: " + error);
        })
    }
}
