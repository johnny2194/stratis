 import React from 'react'
 import FeaturedProduct from '../components/FeaturedProduct'
 import FeaturedSquareAd from '../components/FeaturedSquareAd'
 import Navigation from '../components/Navigation'
 import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 import {connect} from 'react-redux'
 import * as actionCreators from '../actions/navigationActionCreators'
 import {bindActionCreators} from 'redux'

 let navStyling = "navigation"

 class LandingPage extends React.Component {

   constructor(props) {
     super(props)
     this.handleScroll = this.handleScroll.bind(this)
   }

   componentDidMount() {
     window.addEventListener('scroll', this.handleScroll)
   }

   componentWillUnmount() {
     window.removeEventListener('scroll', this.handleScroll)
   }

   handleScroll() {
     if (window.scrollY > 326) {
       this.props.changeStyling('navigation navigation-invert')
     } else {
       this.props.changeStyling('navigation')
     }
   }

   

  render() {


    return (
       <div className="landing-page-wrapper">
         {/*<Navigation initialStyling="navigation" />*/}
         <ReactCSSTransitionGroup
           transitionName="example"
           transitionAppear={true}
           transitionAppearTimeout={500}
           transitionEnterTimeout={1000}
           transitionLeaveTimeout={600}>
           {<Navigation/>}
         </ReactCSSTransitionGroup>
        <div className="hero">
           <span></span>
           <div>Sale is on!</div> 
         </div>
         <div className="product-strip">
           <FeaturedProduct image="/images/burton1.png"></FeaturedProduct>
           <FeaturedProduct image="/images/moment2.png"></FeaturedProduct>
           <FeaturedProduct image="/images/burton2.png"></FeaturedProduct>
           <FeaturedProduct image="/images/moment1.png"></FeaturedProduct>
         </div>
         <div className="square-ad-strip">
           <FeaturedSquareAd image="/images/momentski.jpg">  
           </FeaturedSquareAd>
           <FeaturedSquareAd image="/images/ballin2.jpg"></FeaturedSquareAd>
         </div>
         <div className="product-strip">
           <FeaturedProduct image="/images/Belafonte.png"></FeaturedProduct>
           <FeaturedProduct image="/images/BurtonDejaVu.jpeg"></FeaturedProduct>
           <FeaturedProduct image="/images/HotMessSki.png"></FeaturedProduct>
           <FeaturedProduct image="/images/BurtonDayTrader.png"></FeaturedProduct>
         </div>
         {/* <div className="sale-collection">
         </div>*/}
         <div className="footer">
         </div>
       </div>
    )
  }
 }

 // this is taking the navigation portion of state and attaching it to the Navigation's props
 function mapStateToProps(state, routing) {
   return Object.assign({}, state.navigation, routing)
 }

 // this is attaching our actions to the Navigation component
 function mapDispatchToProps(dispatch) {
   return bindActionCreators(actionCreators, dispatch)
 }

 export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)