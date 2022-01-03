import React from 'react'
import Card from './Card'
import {
    TracksHeading,
    TracksList } from './TrackElements'
import AI from '../../assets/ai.jpg'
import MWAVE from '../../assets/mmwave.jpg'
import VLSI from '../../assets/vlsi.jpg'


const Tracks = () => {
    // const dStyle = {background : '#fff', padding : '1%'}
    return (
        <div id='Tracks' className='Tracks'>
            <TracksHeading>CONFERENCE TRACKS</TracksHeading>
                <TracksList>
                    <li ><Card image={AI} title={'AI'} subtitle={'Learn More >>'}/></li>
                    <li ><Card image={MWAVE} title={'MWAVE'} subtitle={'Learn More >>'}/> </li>
                    <li ><Card image={VLSI} title={'VLSI'} subtitle={'Learn More >>'}/></li>
                </TracksList>
        </div>
    )
}

export default Tracks
