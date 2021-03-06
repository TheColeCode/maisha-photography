import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/img_3756-web.jpg')`,
          }}
        >
          {/* <h1
            className="has-text-weight-bold is-size-1"
            style={{
              backgroundColor: '#e5e4e2',
              color: 'black',
              padding: '1rem',
            }}
          >
            Portfolio
          </h1> */}
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
