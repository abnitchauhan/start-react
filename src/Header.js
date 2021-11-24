import React from 'react';

class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {favoriteColor: "red"};
    }

    // static getDerivedStateFromProps(props,state)
    // {
    //     return{favoriteColor: props.favCol};
    // }

    // ComponentDidMount
    componentDidMount(){
    setTimeout(() => {
        this.setState({favoriteColor: "blue"})
    }, 1000);
    }

    render()
    {
        return(
            <h1>The Changed Color is {this.state.favoriteColor}</h1>
        );
    }
}

export default Header;