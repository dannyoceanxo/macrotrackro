import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div className='main'>
      <div className='macroTrackLogo'>
        <img src='images/macrotrack.png' />
      </div>
      <div className='introtext'>
        {/* <h1>Hey, what's up?</h1> */}
        <h2>I'm Gen King and I'm gonna get your macros on track.  Buckle up, motherfuckers!</h2>
      </div>
      {/* <p>{this.state.bio}</p> */}
      {/* <div>
        <img className='intropic' src={this.state.profile} />
      </div> */}
      <div className='photosofprojects'>
        {/* <div className='one'>
          <div className='img' />
          <p>You see this shit?  Broccoli?  Eat mad broccoli, just trust me</p>
        </div>
        <div className='chuckNorris'>
          <img src='images/soda3.png' />
          <p>Greg Glassman told me that soda creeps into your house at night and punches you.  Don't fuck with soda, it's bad for you</p>
        </div>
        <div className='two'>
          <div className='img' />
          <p>STEAK.  You gotta eat all the steak you can find.  Something about protein, I don't really know.</p>
        </div> */}
      </div>
      <footer>
        {/* <div className='completedprojects'>
          <h4>Check out some other projects I've worked on:</h4>
          <div className='snowman'>
            <a href='http://snowman.dannyoceanxo.surge.sh'><img src='images/snowmanscreenshot.png' height='150px' width='300px' /></a>
          </div>
          <div className='colorpicker'>
            <a href='http://sassy-color-picker.dannyshenker.surge.sh/'><img src='images/colorpickerscreenshot.png' height='300px' width='265px' /></a>
          </div>
          <div className='shoutbox'>
            <a href='http://shoutbox.dannyshenker.surge.sh'><img src='images/shoutboxscreenshot.png' height='205px' width='215px' /></a>
          </div>
          <div className='roshambo'>
            <a href='http://one-list.dannyshenker.surge.sh/'><img src='images/onelist.png' height='225px' width='215px' /></a>
          </div>
        </div> */}
        {/* <div className='design'>
          <h1>No Clique</h1>
          <div className='noCliqueDesigns'>
          <h2>No Clique is a project I created with two of my childhood friends</h2>
        </div> */}
        {/* <div className='skills'>
          <h4>HTML, CSS, JavaScript, React, MobX</h4>
        </div> */}
        <div className='copyrightSocialMedia'>
          <a href='https://www.instagram.com/dannyoceanxo/'><img src='/images/instagram2.png' height='50px' width='50px' /></a>
          <a href='https://github.com/dannyoceanxo/'><img src='/images/waltercat.png' height='50px' width='50px' /></a>
          <h5>Copyright 2017, Danny Shenker.  Built with &hearts; at The Iron Yard</h5>
        </div>
      </footer>
    </div>
  }

  state = {
    bio: [],
    profile: [],
    name: [],
    repos: []
  }

  // When this react component mounts
  componentDidMount () {
    // the URL to "get" todo items
    const url = 'https://api.github.com/users/dannyoceanxo'
    // make an AJAX request to that URL
    window.fetch(url)
    // fetch returns a promsise, which yeilds the "response", we call it 'r'
    // The response has a method json(), that returns another promise
      .then(r => r.json())
    // then JSON is done parsing, the promise will yeild the "data"
      .then(data => {
        // use the data as the state for our items
        this.setState({
          profile: data.avatar_url,
          bio: data.bio,
          name: data.name,
          repos: data.repos_url
        })
      })
  }
}

export default App
