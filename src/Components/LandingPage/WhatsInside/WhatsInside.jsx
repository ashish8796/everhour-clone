import React, { useState } from 'react'

const insideItems = [
  {
    title:"Billing and budgeting",
    desc: "Simple and flexible projects billing. Set budgets to track progress in real time. Receive timely notifications",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp"
  },
  {
    title:"Time tracking",
    desc: "Easy-to-use time tracker. Know the time spent on tasks, hours of work and breaks for each employee",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp"
  },
  {
    title:"Task management",
    desc: "Create tasks, organize them in sections, add time estimates to keep everyone in the loop and on track",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp"
  },
  {
    title:"Schedule",
    desc: "View your team’s schedule, know how busy or available someone is, compare plan to the actual time spent",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp"
  },
  {
    title:"Expenses",
    desc: "Track work-related expenses with ease. Reimburse employees, use costs in project budgets, add to client invoices",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp"
  },
  {
    title:"Reports",
    desc: "Reports and dashboards to dive deep into how your team spends time, money and resources",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp"
  },
  {
    title:"Invoicing",
    desc: "Easily create an invoice based on tracked time and expenses. Connect with QuickBooks, Xero or FreshBooks",
    url:"https://blog-cdn.everhour.com/assets/images/new-design/screens/invoices-preview-v2@2x.webp"
  },
]


const WhatsInside = () => {
  const [imgUrl, setImgUrl] = useState("")
  return (
    <div>
      <div>
        <h1>What’s inside?</h1>
        <ul>
          <li>
            <img src="" alt=""/>
            <div>
              <h3>Billing and budgeting</h3>
              <p>Simple and flexible projects billing. Set budgets to track progress in real time. Receive timely notifications</p>
            </div>
          </li>
        </ul>
      </div>
      <div>

      </div>
    </div>
    )
}

export {WhatsInside}