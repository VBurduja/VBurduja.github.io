import { getAllPaths, getAllPathsWithBase, readFile, readFileMetadata } from "@/lib/fileLib"
import { Profile } from "@/templates/profile"

import { PeopleList } from "@/templates/peopleList"
import Homepage from "@/templates/homepage"
import CardGrid from "@/templates/cardGrid"
import { RightSideCalendarLayout, RightSideNavLayout, RightSideCalendarAndNavLayout } from "@/components/templateLayout"
import Basic from "@/templates/basic"
import { getAllPub, getAllProj, getPubAndProjWithEmail } from "@/lib/bibLib"
import { PubAndProj } from "@/templates/pubAndProjList"
import Head from "next/head"

export default function PageManager(props) {

    const templatePicker = (template) => {
        
        switch(template){
            case "profile":
                return <Profile id={props.id} pageData={props.pageData}/>
            case "peopleList":
                return <PeopleList id={props.id} pageData={props.pageData}/>
            case "homepage":
                return <Homepage id={props.id} pageData={props.pageData}/>
            case "cardGrid":
                return <CardGrid id={props.id} pageData={props.pageData}/>
            case "pubAndProjList":
                return <PubAndProj id={props.id} pageData={props.pageData}/>
            default:
                return  <Basic id={props.id} pageData={props.pageData}/>
        }
    }

    return (
        <>
            <Head>
                <title>{`${props.pageTitle}`}</title>
            </Head>
            {
            props.pageData.nav && props.pageData.calendar ?
            <RightSideCalendarAndNavLayout navName={props.pageData.navName}>
            {templatePicker(props.pageData.template)}
            </RightSideCalendarAndNavLayout>
            :
            props.pageData.nav ?
            <RightSideNavLayout navName={props.pageData.navName}>
                {templatePicker(props.pageData.template)}
            </RightSideNavLayout>
            :
            props.pageData.calendar ? 
            <RightSideCalendarLayout>
                {templatePicker(props.pageData.template)}
            </RightSideCalendarLayout>
            : 
            templatePicker(props.pageData.template)
            }
        </>
    )
}


export function getStaticPaths() {

    const paths = [ ...getAllPaths()]

    paths.map(e=>console.log(e))
    return {
        paths : paths,
        fallback : false
    }
}

export async function getStaticProps({params}) {

    const id = (!params.id) ? [] : params.id
    let pageData = readFile(id)

    if (pageData.template === "cardGrid"){
        const cardIds = getAllPathsWithBase(pageData.src)
        let cards = cardIds.map(e => readFileMetadata(e.params.id))
        const numPages = Math.ceil(cards.length / pageData.cardLimit)
        if (pageData.sorted) {
            cards.sort((a, b) => { return new Date(a.date) - new Date(b.date)})
        }
        pageData = {...pageData, cards : cards, numPages : numPages}
    }

    if (pageData.template === "homepage") {
        const cardIdsLeft = getAllPathsWithBase(pageData.srcLeft)
        const cardIdsRight = getAllPathsWithBase(pageData.srcRight)
        let cardsLeft = cardIdsLeft.map(e => readFileMetadata(e.params.id))
        let cardsRight = cardIdsRight.map(e => readFileMetadata(e.params.id))

        pageData = {...pageData, cardsLeft : cardsLeft, cardsRight : cardsRight}
    }

    if (pageData.template === "profile") {
        let pubAndProj
        pubAndProj = await getPubAndProjWithEmail(pageData.email)
        pageData = {...pageData, ...pubAndProj}
    }

    if (pageData.template === "pubAndProjList") {
        if(pageData.pub){
            let pubGroups
            pubGroups = await getAllPub()
            pageData = {...pageData, ...pubGroups}
        }
        if(pageData.proj){
            let projGroups
            projGroups = await getAllProj()
            pageData = {...pageData, ...projGroups}
        } 
    }

    const pageTitle = pageData.title || id.slice(-1)[0]

    return {
        props :{
            id : id,
            pageTitle,
            pageData
        }
    }
}

