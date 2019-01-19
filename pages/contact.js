import React from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import Link from '../components/Link'

class Contact extends React.Component {
	constructor(props){
        super(props);
        this.state = {
    
        };

    }
    render (){
        return (
          <Layout oAni={this.props.oAni}>
            <Head>
               <title>CONTACT</title>
            </Head>
        	<div className="Contact">
                <section>
                   <div>
                       <h1>Hire me</h1>
                   </div>
                   <div>
                       <a href="#">hire@marchworks.example</a>
                   </div>
                   <div>
                       <p>Will contact you in the next 24h. Looking forward to working together</p>
                   </div>
                </section>
                <style jsx>{`
                    .Contact {
                        width: 100%;
                    }
                    section{
                        padding: 5% 0 5% 0;
                    }
                    div{
                        padding: 6% 10% 6% 6%;
                    }
                    a, p{
                        font-size: 1.2rem;
                        color: silver;
                        font-family: Source Sans Pro, sans-serif;
                    }
                     @media only screen and (max-width: 600px){
                        div{
                            padding: 6% 1% 6% 0%;
                        }
                    }
                `}</style>
            </div>
          </Layout>
        );
    }
}


export default Contact;