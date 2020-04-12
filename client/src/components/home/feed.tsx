import React from 'react'
import { Row, Col } from 'react-bootstrap'

export class Feed extends React.Component {
  render(): JSX.Element {
    return (
      <main role="main" className="container">
        <Row>
          <Col>
            <div className="py-3">
              <h2>Beautiful Amsterdam</h2>
              <p>May 23, 2020 by Peter</p>
              <p>
                Simon Bishop had always loved beautiful Amsterdam with its
                magnificent, motionless mountains. It was a place where he felt
                sleepy.
              </p>
              <p>
                He was a clumsy, snotty, cocoa drinker with wide warts and ample
                lips. His friends saw him as an attractive, adorable author.
                Once, he had even brought a wicked toddler back from the brink
                of death. That's the sort of man he was.
              </p>
            </div>
            <div className="py-3">
              <h2>Violent Kate Hemingway</h2>
              <p>April 1, 2020 by Connor</p>
              <p>
                Kate Hemingway had always loved snooty San Diego with its
                healthy, heavy hills. It was a place where she felt unstable.
              </p>
              <p>
                She was a violent, sweet, brandy drinker with greasy eyelashes
                and ugly fingers. Her friends saw her as a villainous, vacant
                volcano. Once, she had even helped a proud toddler cross the
                road. That's the sort of woman he was.
              </p>
            </div>
            <div className="py-3">
              <h2>Ruthless Steve Rabbit</h2>
              <p>March 15, 2020 by Agatha</p>
              <p>
                Steve Rabbit was thinking about Suzanne Gump again. Suzanne was
                an optimistic academic with skinny eyebrows and grubby feet.
              </p>
              <p>
                Steve walked over to the window and reflected on his picturesque
                surroundings. He had always loved snooty Philadelphia with its
                wasteful, wooden waters. It was a place that encouraged his
                tendency to feel calm.
              </p>
            </div>
          </Col>
        </Row>
      </main>
    )
  }
}
