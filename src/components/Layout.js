import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

import favicon16 from '../img/favicon-16x16.png'
import favicon32 from '../img/favicon-32x32.png'
import favicon96 from '../img/favicon-96x96.png'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Hunter Hancock"
      link={[
        {"rel": "icon", 
          "type": "image/png", 
          "sizes": "16x16",
          "href": favicon16
        },
        {
          "rel": "icon",
          "type": "image/png",
          "sizes": "32x32",
          "href": favicon32
        },
        {
          "rel": "icon",
          "type": "image/png",
          "sizes": "96x96",
          "href": favicon96
        }
        ]}/>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
