import React from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import Link from '../components/Link'

class Tutorials extends React.Component {
	constructor(props){
        super(props);
        this.state = {
    
        };

    }
    render (){
        return (
          <Layout oAni={this.props.oAni}>
            <Head>
               <title>TUTORIALS</title>
            </Head>
        	<div className="Tutorials">
                <section>
                   <div>
                       <h1>Under development</h1>
                   </div>
                </section>
                <style jsx>{`
                    .Tutorials {
                        width: 100%;
                    }
                    section{
                        padding: 5% 0 5% 0;
                    }
                    div{
                        padding: 6% 10% 6% 6%;
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


export default Tutorials;