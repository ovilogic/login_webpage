import React, { Component } from 'react';



class Quotes extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        userName:'',
        passwd:''

       
      }

    this.doLogin = this.doLogin.bind(this)
    
    }

    
   
    doLogin(event) {

        let userName= event.target[0].value
        let password= event.target[1].value
        
        console.log(userName, password);
        
    
    //     let file = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        
    //     fetch(file)
    //         .then(res => res.json())
    //         .then(json => {
                
    //             const quotesMomma = Object.keys(json);
                
    //             const arrMomma = json[quotesMomma[0]]
    //             const index = Math.floor(Math.random() * arrMomma.length);
    //             const newQuoteObj = arrMomma[index]
    //             const newQuote = [newQuoteObj['quote'], newQuoteObj['author']]
                
    //             this.setState({
    //                 userName: newQuote[0],
    //                 author: newQuote[1]
         
    //         })
    //         }
    //         )
    }

    


    render() {

        return (
            
                <div className='flex-container' >
                    <div className='quote-box' >
                    <form onSubmit={this.doLogin}>
                        <div className="imgcontainer">
                            <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                        </div>

                        <div className="container">
                            <label htmlFor="uname"><b>Username</b></label><br />
                            <input type="text" placeholder="Enter Username" name="uname" required  />

                            <br /><label htmlFor="psw"><b>Password</b></label><br />

                            <input type="password" placeholder="Enter Password" name="psw" required />
                            <br />
                            <button type="submit" >Login</button>
                           
                        </div>

                        <div className="container" >
                            <button type="button" className="cancelbtn">Cancel</button><br />
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                        

                        </form>
                    </div>
                
                </div>
          
  
        );
    }
}
 
export default Quotes;