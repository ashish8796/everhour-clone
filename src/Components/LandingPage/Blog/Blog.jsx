import React from 'react'
import styled from 'styled-components'

const boxes = [
  {
    title: "How to create a Simple Timesheet Template Using Google Spreadsheet",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/blog/free-timesheet-template-using-google-spreadsheet@2x.webp",
  },
  {
    title: "Performance Improvement Plan: How To Do It Right",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/blog/performance-improvement-plan@2x.webp",
  },
  {
    title: "Pros and Cons of 14 Best Project Management Tools",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/blog/best-project-management-tools@2x.webp",
  },
  {
    title: "How to Use JIRA - Complete Hands-on Guide",
    img:"https://blog-cdn.everhour.com/assets/images/new-design/illustrations/blog/how-to-use-jira@2x.webp",
  },
]

const Blog = () => {
  return(
    <Container>
      <div>
        <div>
          <h1>We have a blog!</h1>
          <p>Time management insights, project management guides,<br/> work from home tips, and more</p>
        </div>

        <div>
          {boxes.map((({title,img}) => {
            return (
              <div>
                <div>
                  <img src={img} alt=""/>
                </div>
                <h2>{title}</h2>
              </div>
            )
          } ))}
        </div>
      </div>
    </Container>
  )
}

export {Blog}

const Container = styled.div`
  & > div{
    width:96%;
    margin:auto;


    & > div:nth-child(2){
      display:flex;
    }

  }
`