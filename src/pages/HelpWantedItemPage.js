import React from 'react';
import HelpWantedItem from '../components/HelpWantedItem/HelpWantedItem'

class HelpWantedItemPage extends React.Component {
    render() { 
        let postingId = this.props.match.params.id
        return (
                <HelpWantedItem id={postingId}/>
        )
    }
}

export default HelpWantedItemPage;