import React from 'react'
import {
    ObjectiveContainer,
    ObjHeading,
    ObjParagraph,
} from './ObjectiveElements'
import IMG from '../../assets/College_full.jpg'


const ObjectiveSection = () => {
    return (
        <div id='Objective' className="Objective">
            <ObjHeading>OBJECTIVE</ObjHeading>
            <ObjectiveContainer >
                <ObjParagraph>The International Conference on Communication,Computing and Nano-Microwave Technology (CCNMT-2022) will be organized by CSE department of Dr. Sudhir Chandra Sur Institute of Technology ,Kolkata, West Bengal during March 9-10, 2022. It will act as the forum for researchers and practitioners working in the development and application of emerging trends to share their ideas. This conference aims to build networks among the industries and academia, detecting research demands, exchanging best practices and experiences in a global scale context. It will also serve as a platform to develop the recent trends in design and implementation of smart devices, engineering computation and also microwave technology. Each participant will also be provided one Participation Certificate. Contributory papers presented in the technical sessions will be published in the Conference Compendium.</ObjParagraph>
                <div>
                <img src={IMG}  alt="none" width={"100%"} height={"auto"}/>
                </div>
            </ObjectiveContainer>
        </div>
    )
}

export default ObjectiveSection
