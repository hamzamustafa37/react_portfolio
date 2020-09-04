import React,{Component} from'react';
import './Services.css';

class Services extends Component{
    render(){
        return(
            <div className='services'>
                <h3>services</h3>
                <h2>What we offer</h2>
                <div className='row'>
                  <Icons myicon={iconObj[0].icon} title={iconObj[0].title} des={iconObj[0].descripton} />
                  <Icons myicon={iconObj[1].icon} title={iconObj[1].title} des={iconObj[1].descripton} />
                  <Icons myicon={iconObj[2].icon} title={iconObj[2].title} des={iconObj[2].descripton} />
                  <Icons myicon={iconObj[3].icon} title={iconObj[3].title} des={iconObj[3].descripton} />
            </div>

</div>
        );
        }
    }
   
    
const qp=<ion-icon name="heart"></ion-icon>;
    const iconObj=[
    {
        icon: <ion-icon name="phone-portrait"></ion-icon>,
        title:'Responsive',
        descripton:'Looks great on any screen'

    },
    {
        icon:<ion-icon name="thumbs-up"></ion-icon>,
        title:'Redisgned',
        descripton:'Freshly redesigned for my portfolio'
    },
    {
        icon:<ion-icon name="thumbs-up"></ion-icon>,
        title:'Favorited',
        descripton:"Millions of users"+{qp}+" love the design! ",
         
    },
    {
        icon: <ion-icon name="help"></ion-icon>,
        title:'Questions',
        descripton:'Ask us your issues'
    }
    ];

class Icons extends Component{
    render(){
        return(
            <div>
            <span>
                {this.props.myicon}
                </span>
                <h4>{this.props.title}</h4>
                <p>{this.props.des}</p>
          
            </div>
        );

    }

    }
export default Services;