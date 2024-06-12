import styled from 'styled-components'

export const Appbgcontainer = styled.div`
    min-height: 100vh;
    
`
export const Header = styled.div`
    background-color:  #f1f5f9;
    padding: 15px;
    @media screen and (min-width: 768px){
        padding-left: 50px;
    }
`
export const LogoImage = styled.img`
    width: 100px;
    @media screen and (min-width: 768px){
        width: 120px;
    }
`
export const ProjectsMainContainer = styled.div`
    padding: 20px;
    padding-right: 15px;
    @media screen and (min-width: 768px){
        padding: 0px;
        padding-top: 20px;
        padding-left: 50px;
    }
`
export const Select = styled.select`
    padding: 5px;
    width: 200px;
    outline: none;
    font-family: Roboto;
    font-size: 14px;
    @media screen and (min-width: 768px){
        font-size: 15px;
        width: 250px;
    }
`
export const LoadingContainer = styled.div`
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FailureContainer = styled.div`
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FailureImage = styled.img`
    height: 160px;
    @media screen and (min-width: 768px){
        height: 200px;
    }
`
export const FailureHeading = styled.h1`
    font-family: Roboto;
    font-size: 20px;
`
export const FailureText = styled.p`
    font-family: Roboto;
    font-size: 15px;
`
export const RetryButton = styled.button`
    background-color: #328af2;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: poiter;
    height: 35px;
    width: 100px;
    border-radius: 5px;
    font-family: Roboto;
    font-size: 15px;
`
export const ProjectsCardsList = styled.ul`
    padding: 0px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (min-width: 768px){
        justify-content: flex-start;
    }
`
export const ProjectCard = styled.li`
    list-style-type: none;
    box-shadow: 0px 4px 16px 0px #cbd5e1;
    background-color: #ffffff;
    border-radius: 8px;
    margin-bottom: 15px;
    width: 180px;
    height: 220px;
    @media screen and (min-width: 768px){
        width: 240px;
        height: 250px;
        margin-right: 10px;
    }
`
export const ProjectImage = styled.img`
    width: 180px;
    height: 160px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
     @media screen and (min-width: 768px){
        width: 240px;
        height: 190px;
    }
`
export const ProjectName = styled.p`
    font-family: Roboto;
    margin-top: 10px;
    margin: 0px;
    margin-left: 15px;
    margin-top: 10px;
`
