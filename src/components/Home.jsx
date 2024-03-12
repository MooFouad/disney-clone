/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-const-assign */
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originels from "./Originels";
import Trending from "./Trending";
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from "../redux/features/user/userSlice";
import { useEffect } from "react";
import db from './../firebase';
import {  collection, onSnapshot } from "firebase/firestore";
import { setMovie } from "../redux/features/movie/movieSlice";

const Home = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)
    let recommends = []
    let newDisneys = []
    let originals = []
    let trending = []

    // we will use onSnapshot() instead of use getDocs()
    // because getDocs allow us to get data once
    // onSnapshot like a hook that will update itself everytime it detect a change in the database
    useEffect(()=>{
        const moviesCollectionRef = collection(db, 'movies');
        onSnapshot(moviesCollectionRef, (snapshot)=>{
            snapshot.docs.map((doc)=>{
                console.log(recommends)
                switch(doc.data().type){
                    case 'recommend' :
                        recommends = [...recommends, {id : doc.id, ...doc.data()}]
                        break;
                    case 'new' :
                        newDisneys = [...newDisneys, {id : doc.id, ...doc.data()}]
                        break;
                    case 'original' :
                        originals = [...originals, {id : doc.id, ...doc.data()}]
                        break;
                    case 'trending' :
                        trending = [...trending, {id : doc.id, ...doc.data()}]
                        break;
                }
            })
        
        
        dispatch(
            setMovie({
                recommend : recommends,
                newDisney : newDisneys,
                original : originals,
                trending : trending,
            })
        )
    })
    }, [userName])

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Originels/>
            <Trending/>
        </Container>
    )
}

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &::after{
        background: url('/images/home-background.png') center center / cover no-repeat fixed
        ;
        content: '';
        position: absolute;
        inset: 0;
        opacity: 1;
        z-index: -1;
    }
`

export default Home