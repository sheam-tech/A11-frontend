import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import './Blog.css'

import Accordion from 'react-bootstrap/accordion'

const Blog = () => {
  return (
    <Fragment>
      <h1 className="text-center m-5 text-primary text-decoration-underline">Frequently Ased Questions</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>1.What is the Difference between javascript and nodejs?</Accordion.Header>
          <Accordion.Body>

            <table className="">
              <tbody><tr>
                <th>Features</th>
                <th>JavaScript</th>
                <th>Node JS</th>
              </tr>
                <tr>
                  <td><strong>Definition</strong></td>
                  <td>It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications.</td>
                  <td>It is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server.</td>
                </tr>
                <tr>
                  <td><strong>Type</strong></td>
                  <td>It is a programming language. It works in any browser that has a proper browser engine.</td>
                  <td>It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.</td>
                </tr>
                <tr>
                  <td><strong>Dedicated Server</strong></td>
                  <td>It is generally used on the client-side server.</td>
                  <td>It is generally used on the server-side.</td>
                </tr>
                <tr>
                  <td><strong>Community</strong></td>
                  <td>All the JavaScript is not important to the node community.</td>
                  <td>All node projects represent the JavaScript community.</td>
                </tr>
                <tr>
                  <td><strong>Running Engines</strong></td>
                  <td>JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.</td>
                  <td>Node JS is only supported by the V8 engine, which Google Chrome mostly uses. Any JavaScript program written with Node JS will always be run in the V8 engine.</td>
                </tr>
                <tr>
                  <td><strong>Used for</strong></td>
                  <td>It is designed to build network-centric applications.</td>
                  <td>It's designed for data-intensive real-time applications that run on several platforms.</td>
                </tr>
                <tr>
                  <td><strong>Languages</strong></td>
                  <td>It's a newer version of the ECMA script that runs on Chrome's V8 engine, which is written in C++.</td>
                  <td>It uses C, C++, and JavaScript.</td>
                </tr>
                <tr>
                  <td><strong>Modules</strong></td>
                  <td>Few JavaScript frameworks are <strong>TypedJS, RamdaJS</strong>, etc.</td>
                  <td>Lodash, express are examples of Nodejs modules. These all modules are to be imported from <strong>npm</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Companies Uses</strong></td>
                  <td>Various companies use JavaScript like <strong>Google, Shopify, Udacity, Sendgrid, Groupon, Okta, Instacart</strong>, etc.</td>
                  <td>Various companies use Node Js like <strong>Netflix, Hapi, Walmart, Paypal, Linkedin, Trello, Medium, eBay</strong>, etc.</td>
                </tr>
              </tbody></table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>2. When should you use nodejs and when should you use
            mongodb?</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>When i should use nodejs?</strong> <br />
              When i should use nodejs Node js is primarily used for
              non-blocking, event-driven servers,data-intensive due to its
              single-threaded nature. It's used for traditional web sites
              and back-end API services. Node JS is best suited for
              real-time collaborative drawing or editing applications.
            </p>
            <p>
              <strong>When i should use mongodb?</strong> <br />
              When i should use mongodb SQL. NoSQL databases like MongoDB
              are a good choice when your data is document-centric and
              doesn't fit well into the schema of a relational database,
              when you need to accommodate massive scale, when you are
              rapidly prototyping, and a few other use cases
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>3.WHAT is the Differences between SQL and NoSQL databases?</Accordion.Header>
          <Accordion.Body className="table"> <div className="tab">
          <table><thead><tr><th>SQL</th><th>NoSQL</th></tr></thead><tbody><tr><td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td><td>Non-relational or distributed database system.</td></tr><tr><td>These databases have fixed or static or predefined schema</td><td>They have dynamic schema</td></tr><tr><td>These databases are not suited for hierarchical data storage.</td><td>These databases are best suited for hierarchical data storage.</td></tr><tr><td>These databases are best suited for complex queries</td><td>These databases are not so good for complex queries</td></tr><tr><td>Vertically Scalable</td><td>Horizontally scalable</td></tr><tr><td>Follows ACID property</td><td>Follows CAP(consistency, availability, partition tolerance)</td></tr></tbody></table>

          </div>
            
          </Accordion.Body>
        </Accordion.Item><Accordion.Item eventKey="3">
          <Accordion.Header>4.What is the purpose of jwt and how does it work?</Accordion.Header>
          <Accordion.Body>
            <p>
              <strong>What is the purpose of jwt?</strong> <br />
              What is the purpose of jwt JWT, or JSON Web Token, is an open
              standard used to share security information between two
              parties — a client and a server. Each JWT contains encoded
              JSON objects, including a set of claims. JWTs are signed using
              a cryptographic algorithm to ensure that the claims cannot be
              altered after the token is issued
            </p>
            <p>
              <strong>How does it work?</strong> <br />
              how does it work 1.Users will start by authenticating with a
              username and password managed by Auth0. 2.Once authenticated,
              the client will receive a JWT representing an access token.
              3.The client will include the access token in the
              authorization header of every request to a secure endpoint.
              4.The server will validate the access token and determine if
              it has the right permissions, using the information within the
              token.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Fragment>

  );
};

export default Blog;
