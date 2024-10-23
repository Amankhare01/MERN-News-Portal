import React, { Component } from 'react'
import App  from '../App'
import Navbar from './Navbar'
import { Route,Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
export default class News extends Component {

  state = {
    progress:0
  }

  setprogress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={2}
        progress={this.state.progress}
      />
        <Routes>
    <Route exact path="/business"  element={<App setprogress={this.setprogress} key="business" country='in' category='business'/>}></Route>
    <Route exact path="/"  element={<App setprogress={this.setprogress} key="business" country='in' category='business'/>}></Route>
    <Route exact path="/entertainment" element={<App setprogress={this.setprogress} key="entertainment" country="in" category="entertainment"/>}></Route>
    <Route exact path="/general" element={<App setprogress={this.setprogress} key="general" country='in' category='general'/>}> </Route>
    <Route exact path="/health" element={<App setprogress={this.setprogress} key="health" country='in' category='health'/>}> </Route>
    <Route exact path="/science" element={<App setprogress={this.setprogress} key="science" country='in' category='science'/>}> </Route>
    <Route exact path="/sports" element={<App setprogress={this.setprogress} key="sports" country='in' category='sports'/>}></Route>
    <Route exact path="/technology" element={<App setprogress={this.setprogress} key="technology" country='in' category='technology'/>}> </Route>
    </Routes>
      </div>
    )
  }
}
