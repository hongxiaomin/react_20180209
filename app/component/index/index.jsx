import React,{Component} from 'react';
import '../../../public/css/index.pcss';
export default class Index extends Component{
    constructor(props){
        super(props);
        this.state={
            seconds:0
        }
    }
    tick(){
        this.setState(prevState=>({
            seconds:prevState.seconds+1
        }));
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            this.tick();
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <div className="cont">
                <div className="top">
                    这是首页22222:
                    <div className="bg">风景这里独好</div>
                </div>
                <div className="bottom">
                    Seconds:{this.state.seconds}
                </div>
            </div>
        )
    }
}